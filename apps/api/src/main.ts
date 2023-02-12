import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvService } from './config/env/env.service';

const bootstrap = async () => {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const port = app.get(EnvService).Port;

  logger.log(`manaslu API is running on port ${port} 🚀`);

  await app.listen(port);
};

bootstrap();
