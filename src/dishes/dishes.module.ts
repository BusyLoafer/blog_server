import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishProducts } from 'src/entities/dishes-products.entity';
import { Product } from 'src/products/products.entity';
import { ProductsModule } from 'src/products/products.module';
import { DishesController } from './dishes.controller';
import { Dish } from './dishes.entity';
import { DishesService } from './dishes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Product, DishProducts]), ProductsModule],
  controllers: [DishesController],
  providers: [DishesService]
})
export class DishesModule {}
