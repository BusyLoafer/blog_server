import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepositiry: Repository<User>
  ) { }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepositiry.save(dto);
    return user;
  }

  async getUsers() {
    const users = await this.userRepositiry.find();
    return users;
  }

}
