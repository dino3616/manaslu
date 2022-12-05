import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import { match } from 'ts-pattern';
import { EnvService } from '../env/env.service';

const envService = new EnvService(new ConfigService());

export type GqlContext = undefined;

const gqlFactory = (apolloDriverConfig: ApolloDriverConfig) => (): ApolloDriverConfig => ({
  ...apolloDriverConfig,
  context: undefined,
});

const GraphQLConfigDevelopment = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    useFactory: gqlFactory({
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      introspection: true,
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      debug: true,
      validationRules: [createComplexityLimitRule(5000)],
    }),
  });

export const GraphQLConfigProduction = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    useFactory: gqlFactory({
      apollo: envService.ApolloStudioConfig,
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      introspection: true,
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      validationRules: [createComplexityLimitRule(5000)],
    }),
  });

const GraphQLConfigTest = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    useFactory: gqlFactory({
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      playground: false,
      validationRules: [createComplexityLimitRule(5000)],
    }),
  });

export const GraphQLConfigModule = match(envService.NodeEnv)
  .with('development', () => GraphQLConfigDevelopment())
  .with('production', () => GraphQLConfigProduction())
  .with('test', () => GraphQLConfigTest())
  .otherwise(() => GraphQLConfigDevelopment());
