import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
dotenv.config({ path: '.env.dev' });

async function bootstrap() {
  const allowedOrigins = process.env.ALLOWED_CORS_ORIGINS?.split(',') || [
    'http://localhost:3001',
  ];
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip unknown props
      forbidNonWhitelisted: true, // throw if unknown props
      transform: true, // auto‐convert payloads
      errorHttpStatusCode: 422, // you decide status code
      // exceptionFactory: (errors) =>
      //   new BadRequestException(
      //     errors.map((err) => ({
      //       field: err.property,
      //       message: err.constraints,
      //     })),
      //   ),
      exceptionFactory: (validationErrors) => {
        const first = validationErrors[0];
        const constraints = first.constraints || {};
        // take the first constraint message:
        const message = Object.values(constraints)[0];
        return new BadRequestException({
          field: first.property,
          message,
        });
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();

// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       forbidNonWhitelisted: true,
//     }),
//   );

//   app.enableCors({
//     origin: process.env.CLIENT_URL,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   });

//   await app.listen(process.env.PORT || 3000);
// }
// bootstrap();
