import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Dish } from './dishes.entity';
import { DishesService } from './dishes.service';
import { CreateDishFullDto } from './dto/create-dish-full.dto';

@ApiTags("Блюда")
@Controller('dishes')
export class DishesController {

  constructor(private dishesService: DishesService) { }

  
  @ApiOperation({summary: "Создание продукта"})
  @ApiResponse({status: 200, type: Dish})
  @Post()
  create(@Body() dto: CreateDishFullDto) {
    return this.dishesService.createDish(dto);
  }

}
