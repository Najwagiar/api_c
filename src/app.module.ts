import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { BookEntity } from './books/entities/books-entity.js';
import { CategoriesModule } from './categories/categories.module.js';
import { CategoryEntity } from './categories/entities/categories-entity.js';
import { PublisherEntity } from './publishers/entities/publishers-entity.js';
import { AuthorEntity } from './authors/entities/authors-entity.js';
import { CustomerEntity } from './customers/entities/customers-entity.js';
import { CustomerAddressEntity } from './customer-addresses/entities/customer-addresses-entity.js';
import { OrderEntity } from './orders/entities/orders-entity.js';
import { OrderItemEntity } from './order-items/entities/order-items-entity.js';
import { PaymentEntity } from './payments/entities/payments-entity.js'; 
import { ShipmentEntity } from './shipments/entities/shipments-entity.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string()
          .valid('development', 'staging', 'production')
          .default('development'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(5432),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [BookEntity, CategoryEntity, PublisherEntity, AuthorEntity, CustomerEntity, CustomerAddressEntity, OrderEntity, OrderItemEntity, PaymentEntity, ShipmentEntity],
        synchronize: true,
      }),
    }),

    BooksModule,

    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}