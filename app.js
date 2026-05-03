if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodoverride = require('method-override');
const initializePassport = require('./config/passport');
const mongoose = require('mongoose');
const collection = require('./models/schema');

const app = express();

initializePassport(passport);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(methodoverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/home', checkAuthenticated, (req, res) => {
  res.render('home.ejs');
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const d = {
      id: Date.now().toString(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPass
    };

    const existsuser = await collection.findOne({ email: d.email });

    if (existsuser) {
      res.send(`<center><h2>User Already Exists...!</h2><br><h3>Please Try again with different Email Id..</h3></center>`);
    } else {
      const userdata = await collection.insertMany(d);
      console.log(userdata);
      res.redirect('/login');
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

app.use('*', (req, res) => {
  res.send(`<br><center><h2>Page You are Looking For Not Found....</h2><h3>Try Again...!</h3></center>`);
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/home');
  }
  next();
}

const port = process.env.Port;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DB...');
    app.listen(port, () => {
      console.log('Server running on Port : ' + port);
    });
  })
  .catch((err) => { console.error(err); });
