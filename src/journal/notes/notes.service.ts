import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductivitiesService } from 'src/other/productivities/productivities.service';
import { SmilesService } from 'src/other/smiles/smiles.service';
import { Repository } from 'typeorm';
import { DiariesService } from '../diaries/diaries.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './notes.entity';

@Injectable()
export class NotesService {

  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
    private productivityServise: ProductivitiesService,
    private smileServise: SmilesService,
    private diaryService: DiariesService,
  ) { }


  async createNote(dto: CreateNoteDto) {
    // ! TEMP
    const diary = await this.diaryService.getDyaryByUserId();
    const productivity = await this.productivityServise.getProductivityById(dto.prodictivityId);
    const smile = await this.smileServise.getSmileById(dto.smileId);
    const newNote = new Note()
    newNote.diaryId = diary
    newNote.prodictivityId = productivity
    newNote.smileId = smile
    newNote.title = dto.title
    newNote.text = dto.text
    
    const note = await this.noteRepository.save(newNote);
    return note;
  }

  async getAllNotes() {
    const notes = await this.noteRepository.find();
    return notes;
  }

  async getNoteById(id: number) {
    try {
      const note = await this.noteRepository.findOneByOrFail({ id })
      return note;
    } catch (error) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
  }

  async editNote(id: number, dto: CreateNoteDto) {
    try {
      const note = await this.noteRepository.findOneByOrFail({ id })
      const diary = await this.diaryService.getDyaryByUserId();
      const productivity = await this.productivityServise.getProductivityById(dto.prodictivityId);
      const smile = await this.smileServise.getSmileById(dto.smileId);
      note.diaryId = diary
      note.prodictivityId = productivity
      note.smileId = smile
      note.title = dto.title
      note.text = dto.text
      await this.noteRepository.save(note);
      return note;
    } catch (error) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
  }
}
