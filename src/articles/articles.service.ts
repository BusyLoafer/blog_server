import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) { }

  async createArticle(dto: CreateArticleDto) {
    const article = await this.articleRepository.save(dto);
    return article;
  }

  async getArticles() {
    const articles = await this.articleRepository.find();
    return articles;
  }

  async getById(id: number) {
    try {
      const article = await this.articleRepository.findOneByOrFail({id})
      return article;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

  async editArticle(id: number, dto: CreateArticleDto) {
    try {
      const article = await this.articleRepository.findOneByOrFail({id})
      article.text = dto.text;
      article.title = dto.title;
      article.created_at = new Date(Date.now()).toISOString();
      await this.articleRepository.save(article);
      return article;
    } catch (error) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
  }

}
