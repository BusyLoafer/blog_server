import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/products.entity';
import { DishesController } from './dishes.controller';
import { Dish } from './dishes.entity';
import { DishesService } from './dishes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Product])],
  controllers: [DishesController],
  providers: [DishesService]
})
export class DishesModule {}
