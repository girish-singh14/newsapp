const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');



/** mongoose models for managing data**/

const Article = require("./article_model");
const User = require("./user_model");



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));


/** 
 * 
 * monogo db connection string
 */

var mongoDBConnectionUrl = 'mongodb://127.0.0.1/newsapp';

mongoose.connect(mongoDBConnectionUrl, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get("/newsapp", (req, res) => {
    res.send("not here Mike")
});

app.get('/newsapp/articles', async (req, res) => {
    let condition = {};
    let articles = [];

    const {category, author, sort} = req.query;
    if (category) {
        condition.category = {
            "$in": category
        }
    }
    if (author) {
        condition.author = {
            "$in": author
        }
    }

    console.log(condition);
    if (sort) {
        articles = await Article.find(condition).sort({"publishedAt": sort});
    } else {
        articles = await Article.find(condition);
    }

    res.status(200).json(articles);
});

app.post('/newsapp/profile', async(req, res) => {


    let doc = "";
    if (req.body.id) {

        var isValid = mongoose.Types.ObjectId.isValid(req.body.id); //true
        if (isValid) {
            doc = await User.findById(req.body.id);

            if (req.body.id && doc && doc._id instanceof mongoose.Types.ObjectId) {
                doc.username = req.body.username;
                doc.email = req.body.email;
                doc.phone = req.body.phone;
                doc.password = req.body.password;
                doc.gender = req.body.gender;
                doc.language = req.body.language;
                doc.maritial_status = req.body.maritial_status;
                doc.dob = req.body.dob;
                doc.tob = req.body.tob;
            } else {
                return res.status(404).json({message: "No User Found For id " + req.body.id});
            }
        } else {
            return res.status(404).json({message: "Not Valid Id"});
        }

    } else {
        doc = {};
        doc.username = req.body.username;
        doc.email = req.body.email;
        doc.phone = req.body.phone;
        doc.password = req.body.password;
        doc.gender = req.body.gender;
        doc.language = req.body.language;
        doc.maritial_status = req.body.maritial_status;
        doc.dob = req.body.dob;
        doc.tob = req.body.tob;
    }



    console.log(doc);
    let user = new User(doc);
    user.save(doc).then(savedDoc => {
        return res.status(200).json(savedDoc);
    }).catch(error => {

        console.log(error);

        if (error.name === "ValidationError") {
            let errors = {};
            if (error.errors) {
                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                });
            }
            return res.status(500).send(errors);
        } else {
            return res.status(500).send({"message": "Something Went Wrong"});
        }
    });
});


/** start application only if db is connected ***/

db.once("open", function () {

    app.listen("8040", function () {
        console.log("News app started on 8040")
    });
});





