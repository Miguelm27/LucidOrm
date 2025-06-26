import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entrenadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_entren') // PK
      table.string('entrenador', 100).notNullable()
      table.date('fecha_nacimiento')
      table.string('poblacion', 100)
      table.string('provincia', 100)
      
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}