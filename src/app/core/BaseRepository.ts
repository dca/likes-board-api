import { Repository } from 'typeorm'
import { NotFoundError } from 'routing-controllers'

export class BaseRepository<T> extends Repository<T> {
  //
  public async ensureExist (id: number): Promise<T> {
    if (Number.isInteger(id) === false) {
      throw new NotFoundError()
    }

    const record = await this.findOne(id)
    if (!record) {
      throw new NotFoundError()
    }
    return record
  }
}
