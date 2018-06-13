const database = require("./database-connection");

module.exports = {
    list() {
        return database("mixtable").select();
    },
    read(id) {
        return database("mixtable")
            .select()
            .where("id", id)
            .first();
    },
    create(mixtable) {
        return database("mixtable")
            .insert(mixtable)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, mixtable) {
        return database("mixtable")
            .where("id", id)
            .update(mixtable, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("mixtable").where("id", id).del()
    }
};