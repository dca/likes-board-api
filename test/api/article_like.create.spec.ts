import { request } from '@test/init'
import * as Debug from 'debug'
const debug = Debug('test:api:articles_like:create')

describe('POST /v1/articles', () => {
  let article: any

  beforeAll(async () => {
    let response = await request().post('/v1/articles')
      .send({
        title: 'title',
        content: 'content'
      })

    article = response.body.data
  })

  it('should return 200 and return new article', async () => {
    if (!article || !article.id) {
      throw new Error('no article')
    }

    let response = await request().post(`/v1/articles/${article.id}/like`)

    debug('article %j', response.body)
    expect(response.status).toBe(200)
    expect(response.body.data).toBeTruthy()
  })
})
