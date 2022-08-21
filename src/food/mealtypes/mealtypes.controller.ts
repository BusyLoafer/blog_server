import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMealTypeDto } from './dto/create-mealType.dto';
import { MealType } from './mealtypes.entity';
import { MealtypesService } from './mealtypes.service';

@ApiTags("Пища")
@Controller('mealtypes')
export class MealtypesController {

  constructor(private mealTypeService: MealtypesService) { }

  @ApiOperation({ summary: "Создание типа приёма пищи" })
  @ApiResponse({ status: 200, type: [MealType] })
  @Post()
  create(@Body() dto: CreateMealTypeDto) {
    return this.mealTypeService.createMealType(dto);
  }

  @ApiOperation({ summary: "Получение всех типов приёмов пищи" })
  @ApiResponse({ status: 200, type: [MealType] })
  @Get()
  getAll() {
    return this.mealTypeService.getMealTypes();
  }

  @ApiOperation({ summary: "Получение определённого типа приёма пищи" })
  @ApiResponse({ status: 200, type: [MealType] })
  @Get(':id')
  getById(@Param('id') id) {
    return this.mealTypeService.getById(id);
  }

  @ApiOperation({ summary: "Редактирование типа приёма пищи" })
  @ApiResponse({ status: 200, type: [MealType] })
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateMealTypeDto) {
    return this.mealTypeService.editMealType(id, dto);
  }

}
