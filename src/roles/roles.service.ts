import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private roleRepositiry: Repository<Role>
  ) { }

  async createRole(dto: CreateRoleDto) {
    const user = await this.roleRepositiry.save(dto);
    return user;
  }

  async getRoles() {
    const users = await this.roleRepositiry.find();
    return users;
  }

}
