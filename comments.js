//create web server
const express = require('express'); //import express  

const app = express(); //create express object

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// When you visit http://localhost:3000/comments in your browser, you will see the text This is the comments page.