import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMealDto } from 'src/meals/dto/create-meal.dto';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }


  async createProduct(dto: CreateProductDto) {
    const product = await this.productRepository.save(dto);
    return product;
  }

  async getProducts() {
    const products = await this.productRepository.find();
    return products;
  }

  async getProductById(id: number) {
    try {
      const product = await this.productRepository.findOneByOrFail({ id })
      return product;
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  async findByIds(ids: number[]) {
    let products = []

    for await (const i of ids) {
      products.push( await this.productRepository.findOneBy({ id: i }))
    }

    return products.filter(data => !!data)
  }

  async editProduct(id: number, dto: CreateProductDto) {
    try {
      const product = await this.productRepository.findOneByOrFail({ id })
      product.title = dto.title;
      product.description = dto.description;
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}
