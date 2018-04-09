const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const nev = require('email-verification')(mongoose);


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

// email-verification configure 
require('./models/User')
const User = mongoose.model('User');
nev.configure({
    verificationURL: 'http://localhost:5000/user/verify${URL}',
    persistentUserModel: User,
    tempUserCollection: 'Voleon_tempusers',
 
    transportOptions: {
        service: 'Outlook',
        auth: {
            user: '19100176@lums.edu.pk',
            pass: '0344Telenor'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <19100176@lums.edu.pk>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
});

nev.generateTempUserModel(User,(temp) => {
    console.log('Temp User created');
});

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


