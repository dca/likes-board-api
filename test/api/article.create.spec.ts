import { request } from '@test/init'
import * as Debug from 'debug'
const debug = Debug('test:api:articles:create')

describe('POST /v1/articles', () => {
  it('should return 200 and return new article', async () => {
    let response = await request().post('/v1/articles')
      .send({
        title: 'title',
        content: 'content'
      })

    debug('article %j', response.body)
    expect(response.status).toBe(200)
    expect(response.body.data).toBeObject()
  })
})
