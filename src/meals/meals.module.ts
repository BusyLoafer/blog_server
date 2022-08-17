import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from 'src/dishes/dishes.entity';
import { MealType } from 'src/entities/meal-types.entity';
import { MealsController } from './meals.controller';
import { Meal } from './meals.entity';
import { MealsService } from './meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Meal, Dish, MealType])],
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule {}
