import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_club') // llave primaria

      table.string('club')
      table.string('nombre').notNullable()
      table.string('direccion').notNullable()
      table.string('poblacion')
      table.string('provincia')
      table.string('cos_postal')
      table.string('telefono')
      table.string('colores')
      table.string('himno')
      table.string('fax')
      table.integer('anio_fundacion')
      table.float('presupuesto')
      table.string('presidente')
      table.string('vicepresidente')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
