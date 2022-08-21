import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './groups.entity';
import { GroupsService } from './groups.service';

@ApiTags('Контакты')
@Controller('groups')
export class GroupsController {

  constructor(private groupService: GroupsService) { }

  
  @ApiOperation({summary: "Создание группы"})
  @ApiResponse({status: 200, type: Group})
  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.groupService.createGroup(dto);
  }

  @ApiOperation({summary: "Получение всех групп"})
  @ApiResponse({status: 200, type: [Group]})
  @Get()
  getAll() {
    return this.groupService.getGroups();
  }

  @ApiOperation({summary: "Получение определённой группы"})
  @ApiResponse({status: 200, type: [Group]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.groupService.getGroupById(id);
  }

  @ApiOperation({summary: "Редактирование группы"})
  @ApiResponse({status: 200, type: [Group]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateGroupDto) {
    return this.groupService.editGroup(id, dto);
  }
}
