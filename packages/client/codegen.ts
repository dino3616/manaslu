// eslint-disable-next-line import/no-extraneous-dependencies
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../../schema.gql',
  documents: ['src/infra/graphql/document/**/*.gql'],
  generates: {
    './src/infra/graphql/generated/graphql.ts': {
      config: {
        scalars: {
          Datetime: Date,
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};

export default config;
