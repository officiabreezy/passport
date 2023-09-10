const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const dotenv = require('dotenv').config();
const passportSetup = require('./config/passport-setup');
const connectDB = require('./db/database');
const session = require('express-session')
//const cookieSession = require('cookie-session');
const passport = require('passport')

connectDB ();

const app = express();

app.use(session({
  secret: 'process.env.keys',
//secret: 'keyboard cat',
 resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,}
 //cookie: { secure: true }
}))

app.set('view engine', 'ejs');

//app.use(cookieSession({
//  maxAge: 24 * 60 * 60 * 1000,
  //keys: ['process.env.keys']
//}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
 
app.get('/', (req, res) => {
  res.render('home',{user: req.user});
}); 
//app.get('/login', (req, res) => {
// res.render('login');
//});

app.listen(2100,() =>{
  console.log('listening on port 2100');
})