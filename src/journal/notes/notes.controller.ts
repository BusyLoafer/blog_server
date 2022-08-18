import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './notes.entity';
import { NotesService } from './notes.service';

@ApiTags("Записи")
@Controller('notes')
export class NotesController {

  constructor(private noteService: NotesService) { }


  @ApiOperation({summary: "Создание записи"})
  @ApiResponse({status: 200, type: Note})
  @Post()
  create(@Body() dto: CreateNoteDto) {
    return this.noteService.createNote(dto);
  }
  
  @ApiOperation({summary: "Получение всех записей"})
  @ApiResponse({status: 200, type: Note})
  @Get()
  getAll() {
    return this.noteService.getAllNotes();
  }

  @ApiOperation({summary: "Получение определённого продукта"})
  @ApiResponse({status: 200, type: [Note]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.noteService.getNoteById(id);
  }

  @ApiOperation({summary: "Редактирование продукта"})
  @ApiResponse({status: 200, type: [Note]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateNoteDto) {
    return this.noteService.editNote(id, dto);
  }

}
