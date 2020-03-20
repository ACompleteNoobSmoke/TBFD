var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var connectionString = 'mysql://root:codingroot1!@localhost:3306/moviedbsql?charset=utf8_general_ci&timezone=-0700';

var connection = mysql.createPool(connectionString);

var newperson = null;

function saveToDatabase(newperson) {

    connection.getConnection(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "Insert into UserAccounts values (" + "'" + newperson.FirstName + "', " + "'" + newperson.LastName + "', " + "'" + newperson.Username +
            "', " + "'" + newperson.Password + "', " + "'" + newperson.Email + "');";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}


router.get('/', (req, res, next) => {

    console.log("This should print " + newperson);
    res.status(200).json({
        message: "Handling GET request to /newusers",
        NewUser: newperson
    })
})


router.post('/', (req, res, next) => {
    var user = {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password
    }
    newperson = user;
    console.log("This should post " + user.LastName);
    res.status(200).json({
        message: "Handling POST request to /newusers",
        NewUser: user
    })

    saveToDatabase(newperson)
});




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


module.exports = router;