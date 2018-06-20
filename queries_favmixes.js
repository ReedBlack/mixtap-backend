const database = require("./database-connection");

module.exports = {
    list() {
        return database("favmixes").select();
    },
    read(id) {
        return database("favmixes")
            .select()
            .where("id", id)
            .first();
    },
    create(favmixes) {
        return database("favmixes")
            .insert(favmixes)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, favmixes) {
        return database("favmixes")
            .where("id", id)
            .update(favmixes, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("favmixes").where("id", id).del()
    }
};