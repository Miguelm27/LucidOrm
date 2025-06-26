import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_jugador') // PK

      table.string('club')
      table.string('jugador')
      table.integer('dorsal')
      table.integer('cod_pais').notNullable().references('cod_pais').inTable('paises').onDelete('CASCADE')
      table.integer('cod_dem').notNullable().references('cod_dem').inTable('demarcacions')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
