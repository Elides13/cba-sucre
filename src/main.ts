<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

// Crear instancia de app y pinia
const app = createApp(App)
const pinia = createPinia()

// Usar pinia y router
app.use(pinia)
app.use(router)

// Registrar iconos
library.add(faPlus, faEdit, faTrash, faSave)
app.component('font-awesome-icon', FontAwesomeIcon)

// Montar app
app.mount('#app')

// ✅ Exportar pinia si necesitas usarlo fuera de componentes (por ejemplo en Axios)
export { pinia }
=======
import { NestFactory } from '@nestjs/core';
import { Reflector } from '@nestjs/core';

import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  dotenv.config(); await NestFactory.create(AppModule);// Cargar variables de entorno

  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400,
  });

  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
 
// Pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Guard global de JWT
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Docentes')
    .setDescription('Sistema de gestión de docentes')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Puerto desde variables de entorno
  const port = process.env.PORT || 3300;
  await app.listen(port);

  console.log(`🚀 Servidor corriendo en: http://localhost:${port}`);
  console.log(`📄 Documentación API: http://localhost:${port}/api-docs`);
}
bootstrap();
>>>>>>> b8821912a2fe26b64e0e45835196cae1a689bead
