import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from './articles.entity';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@ApiTags("Статьи")
@Controller('articles')
export class ArticlesController {

  constructor(private articleService: ArticlesService) { }

  @ApiOperation({summary: "Создание статьи"})
  @ApiResponse({status: 200, type: Article})
  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(dto);
  }

  @ApiOperation({summary: "Получение всех статей"})
  @ApiResponse({status: 200, type: [Article]})
  @Get()
  getAll() {
    return this.articleService.getArticles();
  }

  @ApiOperation({summary: "Получение определённой статьи"})
  @ApiResponse({status: 200, type: [Article]})
  @Get(':id')
  getById(@Param('id') id) {
    return this.articleService.getById(id);
  }

  @ApiOperation({summary: "Редактирование статьи"})
  @ApiResponse({status: 200, type: [Article]})
  @Put(':id')
  editArticle(@Param('id') id, @Body() dto: CreateArticleDto) {
    return this.articleService.editArticle(id, dto);
  }

}
