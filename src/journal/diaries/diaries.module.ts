import { Module } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { DiariesController } from './diaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diary } from './diaries.entity';
import { User } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diary, User])],
  providers: [DiariesService],
  controllers: [DiariesController],
  exports: [DiariesService]
})
export class DiariesModule {}
