import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmilesModule } from 'src/other/smiles/smiles.module';
import { PersonsModule } from '../persons/persons.module';
import { ContactsController } from './contacts.controller';
import { Contact } from './contacts.entity';
import { ContactsService } from './contacts.service';
import { TypeContactModule } from './typeContact.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), PersonsModule, SmilesModule, TypeContactModule],
  providers: [ContactsService],
  controllers: [ContactsController],
  exports: [ContactsService]
})
export class ContactsModule {}
