const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// const fetching = require('./fetching.js');

const port = 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // get req url
    // fetching(req url)
    // res results
});

app.listen(port, () => {
    console.log('Server started...');
    console.log(`Listening on port ${port}`);
});