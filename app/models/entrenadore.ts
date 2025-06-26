import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Entrenadore extends BaseModel {
  @column({ isPrimary: true })
  declare codEntren: number

  @column() declare entrenador: string
  @column() declare fechaNacimiento: Date
  @column() declare poblacion: string | null
  @column() declare provincia: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
