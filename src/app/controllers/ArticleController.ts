import { Get, JsonController, Param, QueryParams, Post, Body } from 'routing-controllers'
import { Inject, Service } from 'typedi'
import { IsNumberString, IsEmail, IsString } from 'class-validator'
import { ArticleService } from '@src/service/ArticleService'
import { Article } from '@src/entity/Article'

export class ArticleQuery {
  @IsNumberString() public limit: string = '20'
  @IsNumberString() public offset: string = '0'
}

export class ArticleBody {
  @IsString()
  public title: string

  @IsString()
  public content: string
}

@Service()
@JsonController('/v1/articles')
export class UsersController {

  @Inject()
  private articleService: ArticleService

  @Get('/')
  public async index (@QueryParams() query: ArticleQuery): Promise<{ data: Article[]; }> {
    const data = await this.articleService.find()
    return { data }
  }

  @Post('/')
  public async post (@Body() data: ArticleBody): Promise<{ data: Article }> {
    const article = await this.articleService.create(data)
    return { data: article }
  }

  @Post('/:id/like')
  public async like (@Param('id') id: number): Promise<{ data: Article }> {
    let article = await this.articleService.findOne(id)
    article.likes++
    article = await article.save()
    return { data: article }
  }
}
