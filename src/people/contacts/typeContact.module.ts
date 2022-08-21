import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeContact } from './typeContact.entity';
import { TypeContactsService } from './typeContact.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeContact])],
  providers: [TypeContactsService],
  exports: [TypeContactsService]
})
export class TypeContactModule {}
