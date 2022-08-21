import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Smile } from './smiles.entity';
import { SmilesService } from './smiles.service';

@ApiTags("Другое")
@Controller('smiles')
export class SmilesController{
  constructor(private smileService: SmilesService) { }

  
  @ApiOperation({summary: "Получение всех видов смайлов"})
  @ApiResponse({status: 200, type: Smile})
  @Get()
  getAll() {
    return this.smileService.getAll();
  }
}
