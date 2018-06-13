exports.up = function (knex, Promise) {
    return knex.schema.createTable("mixTable", table => {
        table.increments('id')
        table.text('DJ')
        table.text('Title')
        table.text('File')
        table.text('Tags')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('mixTable')
};