import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diary } from './diaries.entity';

@Injectable()
export class DiariesService {

  constructor(
    @InjectRepository(Diary)
    private diaryRepository: Repository<Diary>
  ) { }

  // ! NEED CHANGE
  async getDyaryByUserId() {
    try {
      const diary = await this.diaryRepository.findOneByOrFail({ id: 1 })
      return diary;
    } catch (error) {
      throw new HttpException('Diary not found', HttpStatus.NOT_FOUND);
    }
  }
}
