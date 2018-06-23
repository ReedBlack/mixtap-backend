exports.up = function (knex, Promise) {
    return knex.schema.createTable("favmixes", table => {
        table.increments('id')
        table.text('DJ')
        table.text('Title')
        table.text('Mixlink')
        table.text('Tags')
        table.boolean('Heard')
        table.integer('Likes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('favmixes')
};