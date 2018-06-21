const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended:false }));
app.set('view engine', 'pug');

app.get('/', (req,res,next) => {
  res.render('index');
})

app.get('/cards', (req,res) => {
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", colors});
})

app.get('/hello', (req,res) => {
  res.render('hello');
})

app.post('/hello', (req,res) => {
  res.render('hello', { name: req.body.username });
})

app.listen(3000);
