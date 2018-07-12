var path = require("path");
var bodyParser = require('body-parser');
var Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

var express = require('express');
var app = express();
var router = express.Router();



app.use(express.static(path.join(__dirname, '..', '/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'asfasfasl'}));
app.use(Passport.initialize());
app.use(Passport.session());

app.use('', router);

router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

router.post('/login', Passport.authenticate('local',
  { successRedirect: '/home#/product-list', failureRedirect: '/member/login', failureFlash: true }
));

Passport.use(new LocalStrategy((username,password,done)=>{
    const userRecord = username === "test" ? username : null;
    if(userRecord && password === 'test')
    {
        return done(null,userRecord);
    }
    else{
        return done(null,false);
    }
}));

Passport.serializeUser((username,done)=>{
    done(null,username);
})

var server = app.listen(8081);