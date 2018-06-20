const express = require('express');

const app = express();

app.get('/', (req,res,next) => {
  res.send("Welcome to our page");
})

app.listen(3000);
