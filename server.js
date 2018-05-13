const express = require('express');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const cors = require('cors');


// database to connect - local or cloud 
const db = require('./config/database');

// connect to mongoose
mongoose.connect(db.mongoURI)
.then(()=>  console.log('MongoDB Connected..'))
.catch(err=> console.log(err));

// Initialize app
const app = express();

// // // Parse JSON
// app.use(bodyParser.json({limit: "50mb"}));
// // // Parse url-encoded
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  // parse application/json
  app.use(bodyParser.json());


app.use(busboyBodyParser({ limit: '50mb' }));
// bodyParser.extend(app,{
//     upload:true
// });

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// express-session middleware
app.enable('trust proxy'); 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge : 360000 // one hour in millis
    }
  }));

// passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// Globals
app.use(function(req,res,next){
    res.locals.user = req.user || null;
    next();
});


// Load routes
const users = require('./routes/users');
const posts = require('./routes/posts');
const application = require('./routes/applications');
const election = require('./routes/elections');


// Home Page
app.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'

    res.send(message);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));

// use routes
app.use('/user',users);
app.use('/post',posts);
app.use('/application',application);
app.use('/election',election);