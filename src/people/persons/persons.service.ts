import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { Repository } from 'typeorm';
import { GroupsService } from '../groups/groups.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './persons.entity';

@Injectable()
export class PersonsService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    private groupService: GroupsService,
  ) { }


  async createPerson(dto: CreatePersonDto) {
    // ! TEMP
    const person = new Person();
    if (dto.groupId) {
      person.group = await this.groupService.getGroupById(dto.groupId)
    }
    person.firstName = dto.firstName;
    person.secondName = dto.secondName;
    person.lastName = dto.lastName;
    person.description = dto.description;
    person.gender = dto.gender;

    const newPerson = await this.personRepository.save(person);
    return newPerson;
  }

  async getAllPersons() {
    const persons = await this.personRepository.find();
    return persons;
  }

  async getPersonById(id: number) {
    try {
      const person = await this.personRepository.findOneByOrFail({ id })
      return person;
    } catch (error) {
      throw new HttpException('Person not found', HttpStatus.NOT_FOUND);
    }
  }

  async editPerson(id: number, dto: CreatePersonDto) {
    try {
      const person = await this.personRepository.findOneByOrFail({ id })
      person.group = dto.groupId ? await this.groupService.getGroupById(dto.groupId) : null
      person.firstName = dto.firstName;
      person.secondName = dto.secondName;
      person.lastName = dto.lastName;
      person.description = dto.description;
      person.gender = dto.gender;
      await this.personRepository.save(person);
      return person;
    } catch (error) {
      throw new HttpException('Person not found', HttpStatus.NOT_FOUND);
    }
  }
}
