import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dishes.entity';
import { CreateDishFullDto } from './dto/create-dish-full.dto';


@Injectable()
export class DishesService {

  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>
  ) { }

  
  async createDish(dto: CreateDishFullDto) {

    const dish = await this.dishRepository.save(dto);

    return dish;
  }

  async getDishes() {
    const dishes = await this.dishRepository.find();
    return dishes;
  }

  async getById(id: number) {
    try {
      const dish = await this.dishRepository.findOneByOrFail({id})
      return dish;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

  async editDish(id: number, dto: CreateDishFullDto) {
    try {
      const dish = await this.dishRepository.findOneByOrFail({id});
      dish.description = dto.description;
      dish.title = dto.title;
      dish.resipe = dto.resipe;
      dish.products = dto.products;
      // dish.products = await this.productService.findByIds(dto.products)
      await this.dishRepository.save(dish);
      return dish;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

  async findByIds(ids: number[]) {
    let dishes = []

    for await (const i of ids) {
      dishes.push( await this.dishRepository.findOneBy({ id: i }))
    }

    return dishes.filter(data => !!data)
  }

}
