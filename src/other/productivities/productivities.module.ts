import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductivitiesController } from './productivities.controller';
import { Productivity } from './productivities.entity';
import { ProductivitiesService } from './productivities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Productivity])],
  providers: [ProductivitiesService],
  controllers: [ProductivitiesController],
  exports: [ProductivitiesService]
})
export class ProductivitiesModule {}
