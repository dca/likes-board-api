
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
export class Article extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  // 名稱
  @Column({ type: 'varchar', length: 50 })
  title: string

  // 內文
  @Column({ type: 'varchar', length: 500 })
  content: string

  // 按讚數
  @Column({ type: 'int', default: 0 })
  likes: number

  // 建立時間
  @CreateDateColumn()
  createdDate: Date

  // 更新時間
  @UpdateDateColumn()
  updatedDate: Date

  // 假刪除欄位
  @Column({ type: 'timestamp', default: null })
  trashedAt: Date | null
}
