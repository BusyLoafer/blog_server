import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './persons.entity';
import { PersonsService } from './persons.service';

@ApiTags('Контакты')
@Controller('persons')
export class PersonsController {

  constructor(private personService: PersonsService) { }

  
  @ApiOperation({summary: "Создание персонажа"})
  @ApiResponse({status: 200, type: Person})
  @Post()
  create(@Body() dto: CreatePersonDto) {
    return this.personService.createPerson(dto);
  }

  @ApiOperation({summary: "Получение всех персонажей"})
  @ApiResponse({status: 200, type: [Person]})
  @Get()
  getAll() {
    return this.personService.getAllPersons();
  }

  @ApiOperation({summary: "Получение определённого персонажа"})
  @ApiResponse({status: 200, type: [Person]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.personService.getPersonById(id);
  }

  @ApiOperation({summary: "Редактирование персонажа"})
  @ApiResponse({status: 200, type: [Person]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreatePersonDto) {
    return this.personService.editPerson(id, dto);
  }
}
