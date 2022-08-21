import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishProducts } from 'src/food/entities/dishes-products.entity';
import { Product } from 'src/food/products/products.entity';
import { ProductsModule } from 'src/food/products/products.module';
import { DishesController } from './dishes.controller';
import { Dish } from './dishes.entity';
import { DishesService } from './dishes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Product, DishProducts])],
  controllers: [DishesController],
  providers: [DishesService],
  exports: [DishesService]
})
export class DishesModule {}