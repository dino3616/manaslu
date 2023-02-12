import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, Prisma } from '@prisma/client';
import { EnvService } from '@/config/env/env.service';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel> implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const logger = new Logger(PrismaService.name);
    const envService = new EnvService(new ConfigService());

    if (envService.NodeEnv === 'test') {
      super({ log: ['info', 'warn', 'error'] });
    } else {
      super({ log: ['query', 'info', 'warn', 'error'] });
    }

    logger.debug(`${PrismaService.name} constructed`);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
