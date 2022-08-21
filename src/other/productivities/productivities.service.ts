import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productivity } from './productivities.entity';

@Injectable()
export class ProductivitiesService {

  constructor(
    @InjectRepository(Productivity)
    private productivityRepository: Repository<Productivity>
  ) { }

  async getAll() {
    const productivities = await this.productivityRepository.find();
    return productivities;
  }

  async getProductivityById(id: number) {
    try {
      const product = await this.productivityRepository.findOneByOrFail({ id })
      return product;
    } catch (error) {
      throw new HttpException('Productivity not found', HttpStatus.NOT_FOUND);
    }
  }

}
