// Middlewares and Authentication:-

const express = require('express');

const app = express();

app.get("/health-checkup", function(req, res) {
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const userName = req.headers.userName;
    const password = req.headers.password;


    // inputs checks:-
    if( userName != "harkirat" || password != "pass") {
        res.status(400).json({
            "msg": "Something up with your inputs"
        })
        return;
    }

    if( kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            "msg": "Something up with your inputs"
        })
        return;
    }

    res.json({
        msg: "Your kidney is fine!"
    })

});

app.listen(3000);

