const database = require("./database-connection");

module.exports = {
    list() {
        return database("mixTable").select();
    },
    read(id) {
        return database("mixTable")
            .select()
            .where("id", id)
            .first();
    },
    create(mixTable) {
        return database("mixTable")
            .insert(mixTable)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, mixTable) {
        return database("mixTable")
            .where("id", id)
            .update(mixTable, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("mixTable").where("id", id).del()
    }
};