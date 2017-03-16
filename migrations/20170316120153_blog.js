exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('posts', table => {
      table.increments('id').primary()
      table.string('title').notNull()
      table.string('image')
      table.timestamps()
      table.integer('catagory_id').notNull()
      table.text('post_text')
    }),
    knex.schema.createTable('post_tags', table => {
      table.integer('post_id').notNull()
      table.integer('tag_id').notNull()
    }),
    knex.schema.createTable('tags', table => {
      table.increments('id').primary()
      table.string('name').notNull()
    }),
    knex.schema.createTable('catagories', table => {
      table.increments('id').primary()
      table.string('name')
    })
  ])

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('posts'),
    knex.schema.dropTable('post_tags'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('catagories')
  ])
