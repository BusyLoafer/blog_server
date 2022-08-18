import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Dish } from './dishes.entity';
import { DishesService } from './dishes.service';
import { CreateDishFullDto } from './dto/create-dish-full.dto';

@ApiTags("Пища")
@Controller('dishes')
export class DishesController {

  constructor(private dishesService: DishesService) { }

  
  @ApiOperation({summary: "Создание блюда"})
  @ApiResponse({status: 200, type: Dish})
  @Post()
  create(@Body() dto: CreateDishFullDto) {
    return this.dishesService.createDish(dto);
  }

  @ApiOperation({summary: "Получение всех блюд"})
  @ApiResponse({status: 200, type: [Dish]})
  @Get()
  getAll() {
    return this.dishesService.getDishes();
  }

  @ApiOperation({summary: "Получение определённого блюда"})
  @ApiResponse({status: 200, type: [Dish]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.dishesService.getById(id);
  }

  @ApiOperation({summary: "Редактирование блюда"})
  @ApiResponse({status: 200, type: [Dish]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateDishFullDto) {
    return this.dishesService.editDish(id, dto);
  }

}
