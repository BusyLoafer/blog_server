import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMealFullDto } from './dto/create-meal-full.dto';
import { Meal } from './meals.entity';
import { MealsService } from './meals.service';

@ApiTags("Пища")
@Controller('meals')
export class MealsController {

  constructor(private mealService: MealsService) { }

  @ApiOperation({summary: "Создание приёма пищи"})
  @ApiResponse({status: 200, type: [Meal]})
  @Post()
  create(@Body() dto: CreateMealFullDto) {
    return this.mealService.createMeal(dto);
  }

  @ApiOperation({summary: "Получение всех приёмов пищи"})
  @ApiResponse({status: 200, type: [Meal]})
  @Get()
  getAll() {
    return this.mealService.getMeals();
  }

  @ApiOperation({summary: "Получение определённого приёма пищи"})
  @ApiResponse({status: 200, type: [Meal]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.mealService.getById(id);
  }

  @ApiOperation({summary: "Редактирование приёма пищи"})
  @ApiResponse({status: 200, type: [Meal]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateMealFullDto) {
    return this.mealService.editMeal(id, dto);
  }

}
