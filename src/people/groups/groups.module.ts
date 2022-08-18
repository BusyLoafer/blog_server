import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from '../persons/persons.module';
import { GroupsController } from './groups.controller';
import { Group } from './groups.entity';
import { GroupsService } from './groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupsService],
  controllers: [GroupsController],
  exports: [GroupsService]
})
export class GroupsModule {}
