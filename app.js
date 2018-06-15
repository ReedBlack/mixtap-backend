require("dotenv").load();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
const mixes = require("./routes/mixes");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require("multer");
const queries = require("./queries");

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())
app.use("/mixes", mixes);

const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    region: "us-east-1",
    credentials: {
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        accessKeyId: process.env.ACCESS_KEY_ID
    }
});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: "mixtap-mixes",
        key: (request, file, next) => {
            next(null, `${Date.now()}_${file.originalname}`);
        }
    })
});

app.get("/upload", (request, response, next) => {
    response.json({
        message: "Testing out the upload route"
    });
});

app.post("/upload",

    upload.array("audio", 1), (request, response) => {
        console.log(request)
        response.json({
            audioUrl: `${request.files[0].location}`
        });
    });

app.get("/mixes", (request, response, next) => {
    queries
        .list()
        .then(mixes => {
            response.json({
                mixes
            });
        })
        .catch(next);
});

app.post("/mixes", (request, response, next) => {
    console.log("body is   ", request.body);
    queries
        .create(request.body)
        .then(mix => {
            response.status(201).json({
                mix
            });
        })
        .catch(next);
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;