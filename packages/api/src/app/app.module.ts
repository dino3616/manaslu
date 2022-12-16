import { Module } from '@nestjs/common';
import { EnvModule } from '@/config/env/env.module';
import { GraphQLConfigModule } from '@/config/graphql/graphql-config.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { Modules } from '@/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, PrismaModule, ...Modules],
})
export class AppModule {}
