import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Smile } from './smiles.entity';

@Injectable()
export class SmilesService {

  constructor(
    @InjectRepository(Smile)
    private smileRepository: Repository<Smile>
  ) { }

  async getAll() {
    const productivities = await this.smileRepository.find();
    return productivities;
  }

  async getSmileById(id: number) {
    try {
      const smile = await this.smileRepository.findOneByOrFail({ id })
      return smile;
    } catch (error) {
      throw new HttpException('Smile not found', HttpStatus.NOT_FOUND);
    }
  }
}
