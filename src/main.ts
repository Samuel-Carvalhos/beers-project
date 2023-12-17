import { NestFactory } from '@nestjs/core';
import { BeersModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(BeersModule);
  await app.listen(3000);
}
bootstrap();
