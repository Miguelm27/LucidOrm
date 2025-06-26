import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column , type BelongsTo} from '@adonisjs/lucid/orm'
import Paise from './paise.js'


export default class Jugadore extends BaseModel {
  @column({ isPrimary: true })
  declare cod_jugador: number

  @column() declare club: string
  @column() declare jugador: string
  @column() declare dorsal: number
  @column() declare cod_pais: number
  @column() declare cod_dem: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @belongsTo(()=>Paise,{
    foreignKey:'cod_pais',
  })
  declare paises:BelongsTo<typeof Paise>
}
