import { request } from '@test/init'
import * as Debug from 'debug'
const debug = Debug('test:api:articles:list')

describe('GET /v1/articles', () => {
  it('should return 200 and return articles', async () => {
    let response = await request().get('/v1/articles')

    debug('articles %j', response.body)
    expect(response.status).toBe(200)
    expect(response.body.data).toBeArray()
  })
})
