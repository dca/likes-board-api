import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { NotFoundError } from 'routing-controllers'

import { ArticleRepository } from '@src/repository/ArticleRepository'
import { Article } from '@src/entity/Article'
import { BaseService } from '@src/app/core/BaseService'

@Service()
export class ArticleService extends BaseService<Article, ArticleRepository> {

  @InjectRepository(ArticleRepository)
  protected repository: ArticleRepository

}
