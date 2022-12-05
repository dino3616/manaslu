import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class EnvValidator {
  NODE_ENV: 'development' | 'production' | 'test';

  PORT = 4000;

  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string;

  APOLLO_KEY: string;

  APOLLO_GRAPH_ID: string;
}

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
