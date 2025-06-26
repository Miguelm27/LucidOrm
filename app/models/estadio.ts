import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, type BelongsTo} from '@adonisjs/lucid/orm'
import Clube from './clube.js'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare cod_estadios: number

  @column()
  declare estadio:string

  @column()
  declare direccion: string

  @column()
  declare cod_postal:string

  @column()
  declare poblacion:string

  @column()
  declare provincia : string

  @column()
  declare capacidad : number

  @column()
  declare sentados:number

  @column()
  declare inauguracion:Date

  @column()
  declare dimensiones:string

  @column()
  public cod_club: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @belongsTo(()=>Clube,{
    foreignKey:'cod_club',
  })
  declare clubes:BelongsTo<typeof Clube>
  
}