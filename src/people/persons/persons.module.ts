import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from '../contacts/contacts.module';
import { GroupsModule } from '../groups/groups.module';
import { GroupsService } from '../groups/groups.service';
import { PersonsController } from './persons.controller';
import { Person } from './persons.entity';
import { PersonsService } from './persons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), GroupsModule],
  providers: [PersonsService],
  controllers: [PersonsController],
  exports: [PersonsService]
})
export class PersonsModule {}
