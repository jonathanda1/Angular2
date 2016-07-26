var express = require('express')
var app =  express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})


var news_feed = [
    { 
        author: "Kedar Iyer", 
        content: "I ate Subway for lunch", 
        image: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/Scitech/876/493/Subway.jpg?ve=1&tl=1",
        like: false,
        comments: [
            { author: "Hannah Howard", content: "No one cares" }
        ]
    },
    {
        author: "Mike Wong",
        content: "I'm doing productive things",
        like: false,
        comments: [
            { author: "Kedar Iyer", content: "Like what?" },
            { author: "Mike Wong", content: "..." }
        ]
    },
    {
        author: "Hannah Howard", 
        content: "Express sucks! Rails all day!",
        image: "http://www.jamesfend.com/wp-content/uploads/2012/01/ruby-rails.jpg",
        like: false,
        comments: [
            { author: "Edward Yu", content: "Can't we all just get along?" },
            { author: "Adam Wilbert", content: "I bow to the wishes of the Chinese government" }
        ]
    }
]

app.get('/news_feed', function (req, res, next) {
    res.json(news_feed)
})

app.get('/post/like/:index', function (req, res, next) {
    news_feed[req.params.index].like = true
    res.send("Liked")
})

app.listen(3000)
