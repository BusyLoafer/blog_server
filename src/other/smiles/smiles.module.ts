import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmilesController } from './smiles.controller';
import { Smile } from './smiles.entity';
import { SmilesService } from './smiles.service';


@Module({
  imports: [TypeOrmModule.forFeature([Smile])],
  providers: [SmilesService],
  controllers: [SmilesController],
  exports: [SmilesService]
})
export class SmilesModule {}
