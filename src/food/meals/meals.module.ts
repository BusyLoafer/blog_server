import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from 'src/food/dishes/dishes.entity';
import { DishesModule } from 'src/food/dishes/dishes.module';
import { MealType } from 'src/food/mealtypes/mealtypes.entity';
import { MealsController } from './meals.controller';
import { Meal } from './meals.entity';
import { MealsService } from './meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Meal, Dish, MealType]), DishesModule],
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule {}
