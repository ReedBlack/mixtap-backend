exports.up = function (knex, Promise) {
    return knex.schema.createTable("mixtable", table => {
        table.increments('id')
        table.text('DJ')
        table.text('Title')
        table.text('Mixlink')
        table.text('Tags')
        table.integer('Likes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('mixtable')
};