import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/products.entity';
import { ProductsService } from 'src/products/products.service';
import { EntityManager, Repository } from 'typeorm';
import { Dish } from './dishes.entity';
import { CreateDishFullDto } from './dto/create-dish-full.dto';

type NewDish = {
  id?: number,
  title: string,
  description: string,
  resipe: string,
  products: Product[] | number[]
}

@Injectable()
export class DishesService {

  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    private productService: ProductsService
  ) { }

  
  async createDish(dto: CreateDishFullDto) {
    // const newDish: NewDish = {...dto};
    const newDish = new Dish();
    newDish.description = dto.description;
    newDish.title = dto.title;
    newDish.resipe = dto.resipe;

    newDish.products = await this.productService.findByIds(dto.products)

    console.log("newDish", newDish)

    const dish = await this.dishRepository.save(newDish);

    return dish;
  }

  // async getArticles() {
  //   const articles = await this.articleRepository.find();
  //   return articles;
  // }

  // async getById(id: number) {
  //   try {
  //     const article = await this.articleRepository.findOneByOrFail({id})
  //     return article;
  //   } catch (error) {
  //     throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  //   }
  // }

  // async editArticle(id: number, dto: CreateArticleDto) {
  //   try {
  //     const article = await this.articleRepository.findOneByOrFail({id})
  //     article.text = dto.text;
  //     article.title = dto.title;
  //     article.created_at = new Date(Date.now()).toISOString();
  //     await this.articleRepository.save(article);
  //     return article;
  //   } catch (error) {
  //     throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  //   }
  // }

}
