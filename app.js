const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const app = express();


app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser())
app.set('view engine', 'pug');

//running middleware for specific routes
app.use('/one', (req, res, next) => {
  // We are able to add to the req object a message and it carries to next middlewares
  req.message = "This message made it!";
  console.log('the only one')
  next();
})

//middleware example runs everytime we make a request
app.use((req, res, next) => {
  console.log("1");
  console.log(req.message)
  next();
})

app.use((req, res, next) => {
  console.log("2");
  console.log(req.message)
  next();
})






app.get('/', (req,res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
})

app.get('/cards', (req,res) => {
  const hint = "He bears his name"
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", hint});
})

app.get('/hello', (req,res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('/');
  } else {
    res.render('hello');
  }
})

app.post('/hello', (req,res) => {
  res.cookie('username', req.body.username)
  res.redirect('/');
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello')
})

app.listen(3000);
