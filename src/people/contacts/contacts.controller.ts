import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './contacts.entity';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@ApiTags('Контакты')
@Controller('contacts')
export class ContactsController {

  constructor(private contactService: ContactsService) { }

  
  @ApiOperation({summary: "Создание встречи"})
  @ApiResponse({status: 200, type: Contact})
  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.createContact(dto);
  }

  @ApiOperation({summary: "Получение всех встречей"})
  @ApiResponse({status: 200, type: [Contact]})
  @Get()
  getAll() {
    return this.contactService.getAllContacts();
  }

  @ApiOperation({summary: "Получение определённого встречи"})
  @ApiResponse({status: 200, type: [Contact]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.contactService.getContactById(id);
  }

  @ApiOperation({summary: "Редактирование встречи"})
  @ApiResponse({status: 200, type: [Contact]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateContactDto) {
    return this.contactService.editContact(id, dto);
  }
}

