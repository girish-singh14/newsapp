const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    urlToImage: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const Article = mongoose.model("articles", ArticleSchema);

module.exports = Article;
