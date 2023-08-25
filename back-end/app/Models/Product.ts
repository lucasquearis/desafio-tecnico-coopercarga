import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public image_url: string

  @column()
  public type: string

  @column()
  public price: number

  @column()
  public seller: string

  @column({
    prepare: (value: string[]): string => `{${value.join(',')}}`,
    consume: (value: string): string[] => value.slice(1, -1).split(','),
  })
  public available_sizes: string[]

  @column()
  public details: string

  @column()
  public sport: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
