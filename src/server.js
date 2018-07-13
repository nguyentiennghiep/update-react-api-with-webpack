var path = require("path");
var bodyParser = require('body-parser');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const logger = require('morgan');

var express = require('express');
var app = express();
var router = express.Router();


app.use(logger('tiny'));
app.set('views', 'C:/Users/nguyen_tien_nghiep/Desktop/test/react-api-webpack/src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'asfasfasl',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);



router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', passport.authenticate('local', { successRedirect: '/product-list', failureRedirect: '/login' }));

router.get('/product-list', (req, res) => {
    if (req.isAuthenticated()) {
        // res.rend('index');
    }
    else {
        res.redirect('/');
    }

});

passport.use(new LocalStrategy((username, password, done) => {
    var user = { usr: 'test', pwd: 'test' };
    const userRecord = user.usr === username ? username : null;
    if (userRecord && password === user.pwd) {
        return done(null, userRecord);
    }
    else {
        return done(null, false);
    }
}));

passport.serializeUser((name, done) => {
    done(null, name);
});

passport.deserializeUser((name, done) => {
    var user = { usr: 'test', pwd: 'test' };
    if (name === user.usr) {
        return done(null, user);
    }
    else {
        return done(null, false);
    }
});

app.listen(8081);