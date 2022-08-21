import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishesService } from 'src/food/dishes/dishes.service';
import { Repository } from 'typeorm';
import { CreateMealFullDto } from './dto/create-meal-full.dto';
import { Meal } from './meals.entity';

@Injectable()
export class MealsService {

  constructor(
    @InjectRepository(Meal)
    private mealRepository: Repository<Meal>
  ) { }

  async createMeal(dto: CreateMealFullDto) {
    const meal = await this.mealRepository.save(dto);
    return meal;
  }

  async getMeals() {
    const meals = await this.mealRepository.find();
    return meals;
  }

  async getById(id: number) {
    try {
      const meal = await this.mealRepository.findOneByOrFail({ id })
      return meal;
    } catch (error) {
      throw new HttpException('Meal not found', HttpStatus.NOT_FOUND);
    }
  }

  async editMeal(id: number, dto: CreateMealFullDto) {
    try {
      const meal = await this.mealRepository.findOneByOrFail({ id });
      meal.dishes = dto.dishes
      if (dto.date) {
        meal.date = dto.date;
      }
      await this.mealRepository.save(meal);
      return meal;
    } catch (error) {
      throw new HttpException('Meal not found', HttpStatus.NOT_FOUND);
    }
  }

}
