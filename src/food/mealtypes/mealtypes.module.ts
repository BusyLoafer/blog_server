import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealtypesController } from './mealtypes.controller';
import { MealType } from './mealtypes.entity';
import { MealtypesService } from './mealtypes.service';

@Module({
  imports: [TypeOrmModule.forFeature([MealType])],
  controllers: [MealtypesController],
  providers: [MealtypesService]
})
export class MealtypesModule {}
