import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Article)
    private articleRepositiry: Repository<Article>
  ) { }

  async createArticle(dto: CreateArticleDto) {
    const article = await this.articleRepositiry.save(dto);
    return article;
  }

  async getArticles() {
    const articles = await this.articleRepositiry.find();
    return articles;
  }

  async getById(id: number) {
    try {
      const article = await this.articleRepositiry.findOneByOrFail({id})
      return article;
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async editArticle(id: number, dto: CreateArticleDto) {
    try {
      const article = await this.articleRepositiry.findOneByOrFail({id})
      article.text = dto.text;
      article.title = dto.title;
      article.created_at = new Date(Date.now()).toISOString();
      await this.articleRepositiry.save(article);
      return article;
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

}
