import { Service } from 'typedi'
import { EntityRepository, Repository, Connection } from 'typeorm'
import { InjectConnection } from 'typeorm-typedi-extensions'
import { Article } from '@src/entity/Article'
import { BaseRepository } from '@src/app/core/BaseRepository'

@Service()
@EntityRepository(Article)
export class ArticleRepository extends BaseRepository<Article> {

  @InjectConnection()
  private connection: Connection

}
