const express = require('express');
const router = express.Router();

const queries = require('../queries_favmixes');

router.get("/", (request, response, next) => {
    queries.list().then(myFavMixes => {
        response.json({
            myFavMixes
        });
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(favmixes => {
        favmixes
            ?
            response.json({
                favmixes
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(favmixes => {
        response.status(201).json({
            favmixes: favmixes
        });
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(favmixes => {
        response.json({
            favmixes: favmixes[0]
        });
    }).catch(next);
});

module.exports = router;