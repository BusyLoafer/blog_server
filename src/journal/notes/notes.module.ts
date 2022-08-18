import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Note } from './notes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productivity } from 'src/other/productivities/productivities.entity';
import { Smile } from 'src/other/smiles/smiles.entity';
import { Diary } from '../diaries/diaries.entity';
import { SmilesModule } from 'src/other/smiles/smiles.module';
import { ProductivitiesModule } from 'src/other/productivities/productivities.module';
import { DiariesModule } from '../diaries/diaries.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Productivity, Smile, Diary]),
    SmilesModule,
    ProductivitiesModule,
    DiariesModule
  ],
  providers: [NotesService],
  controllers: [NotesController]
})
export class NotesModule { }
