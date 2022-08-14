import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@ApiTags("Пользователи")
@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) { }

  @ApiOperation({summary: "Создание пользователя"})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({summary: "Получение всех пользователей"})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getUsers();
  }

}
