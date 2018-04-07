const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');


// database to connect - local or cloud 
const db = require('./config/database');

// connect to mongoose
mongoose.connect(db.mongoURI)
.then(()=>  console.log('MongoDB Connected..'))
.catch(err=> console.log(err));

// Initialize app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
// app.use(passport.session());


// Load routes
const users = require('./routes/users');

// Home Page
app.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'

    res.send(message);
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));

// use routes
app.use('/user',users);


