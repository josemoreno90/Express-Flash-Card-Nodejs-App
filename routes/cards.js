const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  const hint = "He bears his name"
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", hint});
})

module.exports = router;
