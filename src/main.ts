import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Set the allowed HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // Allow credentials such as cookies and authorization headers
  });

  await app.listen(3000);
}
bootstrap();
