import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { ApolloConfigInput } from 'apollo-server-types';

@Injectable()
export class EnvService {
  private readonly logger = new Logger(EnvService.name);

  constructor(private configService: ConfigService) {
    this.logger.debug(`${EnvService.name} constructed`);
  }

  get NodeEnv(): 'development' | 'production' | 'test' {
    const nodeEnv = this.configService.get<'development' | 'production' | 'test'>('NODE_ENV', 'development');

    return nodeEnv;
  }

  get Port(): number {
    const port = this.configService.get<number>('PORT', 4000);

    return port;
  }

  get DatabaseURL(): string {
    const databaseURL = this.configService.getOrThrow<string>('DATABASE_URL');

    return databaseURL;
  }

  get ApolloStudioConfig(): ApolloConfigInput {
    return {
      key: this.configService.getOrThrow('APOLLO_KEY'),
      graphId: this.configService.getOrThrow('APOLLO_GRAPH_ID'),
    };
  }
}
