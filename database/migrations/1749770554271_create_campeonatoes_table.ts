import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campeonatoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodTrofeo')

      table.string('nombre_trofeo', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}