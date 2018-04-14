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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// // Parse JSON
app.use(bodyParser.json({limit: "50mb"}));
// // Parse url-encoded
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
// app.use(bodyParser.json())

// passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
// app.use(passport.session());

// Load routes
const users = require('./routes/users');
const posts = require('./routes/posts');
const application = require('./routes/applications');


// Home Page
app.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'

    res.send(message);
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));

// use routes
app.use('/user',users);
app.use('/post',posts);
app.use('/application',application);


