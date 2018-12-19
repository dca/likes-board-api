import { Service } from 'typedi'
import { BaseEntity, FindConditions } from 'typeorm'
import { BaseRepository } from '@src/app/core/BaseRepository'

@Service()
export abstract class BaseService<T extends BaseEntity, K extends BaseRepository<T>> {
  protected abstract repository: K

  /**
   * create entity
   */
  public async create (data: object): Promise<T> {
    const record: T = this.repository.create(data)
    return record.save()
  }

  public async findAll (): Promise<T[]> {
    return this.find()
  }

  public async find (conditions?: FindConditions<T>): Promise<T[]> {
    return this.repository.find(conditions)
  }

  public async findOne (id: number): Promise<T> {
    return this.repository.ensureExist(id)
  }

  public async updateOne (record: T, data: any): Promise<T> {
    record = this.repository.merge(record, { ...data })
    return record.save()
  }

  public async update (id: number, data: any): Promise<T> {
    console.log('update', id, data)
    let record = await this.findOne(id)
    return this.updateOne(record, data)
  }

  public async trash (id: number): Promise<T> {
    let record = await this.findOne(id)
    return this.updateOne(record, { trashedAt: new Date() })
  }
}
