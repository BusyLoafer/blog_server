import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Productivity } from './productivities.entity';
import { ProductivitiesService } from './productivities.service';

@ApiTags("Другое")
@Controller('productivities')
export class ProductivitiesController{
  constructor(private productivityService: ProductivitiesService) { }

  
  @ApiOperation({summary: "Получение всех видов продуктивности"})
  @ApiResponse({status: 200, type: Productivity})
  @Get()
  getAll() {
    return this.productivityService.getAll();
  }
}
