import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Carga variables de entorno
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Configuración de CORS (más segura y flexible)
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Usa variable de entorno
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true, // Si necesitas enviar cookies/tokens
    maxAge: 86400 // Cache de CORS por 24 horas
  });

  // Validación global (para todos los DTOs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no decoradas en DTOs
      forbidNonWhitelisted: true, // Rechaza requests con propiedades no permitidas
      transform: true // Convierte tipos automáticamente (ej: string -> number)
    })
  );

  // Configuración de Swagger (API Documentation)
  const config = new DocumentBuilder()
    .setTitle('API Docentes')
    .setDescription('Sistema de gestión de docentes')
    .setVersion('1.0')
    .addBearerAuth() // Soporte para JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Endpoint: /api-docs

  // Puerto desde variables de entorno (con fallback)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Servidor corriendo en: http://localhost:${port}`);
  console.log(`📄 Documentación API: http://localhost:${port}/api-docs`);
}
bootstrap();