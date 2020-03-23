const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');


const users = require('./routes/users');

const returningUsers = require('./routes/returningusers');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.use('/users', users);
app.use('/returningusers', returningUsers);

//Error Handling
// app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.satus(err.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// })
module.exports = app;