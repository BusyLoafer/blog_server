import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMealTypeDto } from './dto/create-mealType.dto';
import { MealType } from './mealtypes.entity';

@Injectable()
export class MealtypesService {
  
  constructor(
    @InjectRepository(MealType)
    private mealTypeRepository: Repository<MealType>
  ) { }

  async createMealType(dto: CreateMealTypeDto) {
    return await this.mealTypeRepository.save(dto);
  }

  async getMealTypes() {
    const mealTypes = await this.mealTypeRepository.find();
    return mealTypes;
  }

  async getById(id: number) {
    try {
      const mealType = await this.mealTypeRepository.findOneByOrFail({id})
      return mealType;
    } catch (error) {
      throw new HttpException('MealType not found', HttpStatus.NOT_FOUND);
    }
  }

  async editMealType(id: number, dto: CreateMealTypeDto) {
    try {
      const mealType = await this.mealTypeRepository.findOneByOrFail({id});
      mealType.title = dto.title;
      mealType.description = dto.description;
      await this.mealTypeRepository.save(mealType);
      return mealType;
    } catch (error) {
      throw new HttpException('MealType not found', HttpStatus.NOT_FOUND);
    }
  }
}
