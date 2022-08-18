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
    private mealRepository: Repository<Meal>,
    private dishService: DishesService
  ) { }

  async createMeal(dto: CreateMealFullDto) {
    const meal = new Meal();
    meal.meal_type_id = dto.meal_type_id;
    if (dto.date) {
      meal.date = dto.date;
    }
    meal.dishes = await this.dishService.findByIds(dto.dishes)

    return await this.mealRepository.save(meal);
  }

  async getMeals() {
    const meals = await this.mealRepository.find();
    return meals;
  }

  async getById(id: number) {
    try {
      const dish = await this.mealRepository.findOneByOrFail({id})
      return dish;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

  async editMeal(id: number, dto: CreateMealFullDto) {
    try {
      const meal = await this.mealRepository.findOneByOrFail({id});
      meal.meal_type_id = dto.meal_type_id;
      if (dto.date) {
        meal.date = dto.date;
      }
      meal.dishes = await this.dishService.findByIds(dto.dishes)
      await this.mealRepository.save(meal);
      return meal;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

}
