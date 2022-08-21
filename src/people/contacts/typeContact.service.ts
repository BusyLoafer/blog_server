import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contacts.entity';
import { TypeContact } from './typeContact.entity';

@Injectable()
export class TypeContactsService {

  constructor(
    @InjectRepository(TypeContact)
    private contactTypeRepository: Repository<TypeContact>,
  ) { }

  async findById(id: number) {
    return await this.contactTypeRepository.findOneBy({ id })
  }
}
