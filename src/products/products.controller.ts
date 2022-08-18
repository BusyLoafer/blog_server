import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@ApiTags("Продукты")
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) { }

  
  @ApiOperation({summary: "Создание продукта"})
  @ApiResponse({status: 200, type: Product})
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @ApiOperation({summary: "Получение всех продуктов"})
  @ApiResponse({status: 200, type: [Product]})
  @Get()
  getAll() {
    return this.productService.getProducts();
  }

  @ApiOperation({summary: "Получение определённого продукта"})
  @ApiResponse({status: 200, type: [Product]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.productService.getProductById(id);
  }

  @ApiOperation({summary: "Редактирование продукта"})
  @ApiResponse({status: 200, type: [Product]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateProductDto) {
    return this.productService.editProduct(id, dto);
  }
}
