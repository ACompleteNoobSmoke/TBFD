var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var connectionString = 'mysql://root:codingroot1!@localhost:3306/moviedbsql?charset=utf8_general_ci&timezone=-0700';

var connection = mysql.createPool(connectionString);

var returningperson = [];
var loggingIn = null;

function saveToDatabase(loggingIn) {

    connection.getConnection(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "Select * from UserAccounts Where  Username = '" + loggingIn.Username + "' And Password ='" + loggingIn.Password + "';";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record retrived");
            getPerson(result);
        });
    });
}

function getPerson(result) {
    returningperson = result;
}


router.get('/', (req, res, next) => {

    console.log("This should print " + returningperson);
    res.status(200).json({
        message: "Handling GET request to /newusers",
        User: returningperson
    })
})


router.post('/', (req, res, next) => {
    var user = {
        Username: req.body.username,
        Password: req.body.password
    }
    loggingIn = user;
    console.log("This should post " + user.Username);
    res.status(200).json({
        message: "Handling POST request to /newusers",
        OldUser: user
    })

    saveToDatabase(loggingIn)
});



/*
router.get('/:newuserusername', (req, res, next) => {
    const username = req.params.newuserusername;
    if (username === 'special') {
        res.status(200).json({
            message: 'You have discovered THE BASEDONE',
            username: username
        });
    } else {
        res.status(200).json({
            message: 'You passed a username'
        });
    }
});

router.patch('/:newusersusername', (req, res, next) => {
    res.status(200).json({
        message: "Updated User Information"
    });
});

*/


module.exports = router;