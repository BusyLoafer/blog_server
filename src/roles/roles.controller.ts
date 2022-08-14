import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';

@ApiTags("Роли")
@Controller('roles')
export class RolesController {

  constructor(private roleService: RolesService) { }

  @ApiOperation({summary: "Создание роли"})
  @ApiResponse({status: 200, type: Role})
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({summary: "Получение всех ролей"})
  @ApiResponse({status: 200, type: [Role]})
  @Get()
  getAll() {
    return this.roleService.getRoles();
  }

}
