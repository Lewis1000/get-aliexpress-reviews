const express = require('express');
const app = express();

// Fetching Function
const fetching = require('./fetching.js');

// Port
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/results', (req, res) => {
    // get req url
    fetching(/* Input req url */ );
    res //file with response
});

app.listen(port, () => {
    console.log('Server started...');
    console.log(`Listening on port ${port}`);
});