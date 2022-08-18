import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './groups.entity';

@Injectable()
export class GroupsService {

  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>
  ) { }


  async createGroup(dto: CreateGroupDto) {
    const group = await this.groupRepository.save(dto);
    return group;
  }

  async getGroups() {
    const groups = await this.groupRepository.find();
    return groups;
  }

  async getGroupById(id: number) {
    try {
      const group = await this.groupRepository.findOneByOrFail({ id })
      return group;
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  async editGroup(id: number, dto: CreateGroupDto) {
    try {
      const group = await this.groupRepository.findOneByOrFail({ id })
      group.title = dto.title;
      group.description = dto.description;
      await this.groupRepository.save(group);
      return group;
    } catch (error) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
  }
}
