const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();

// test for jest/supertest
app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
  });

app.get('/test', (req, res) => {
res.status(200).json({ message: 'Test for super test' });
});

require('./database');
app.use(bodyParser.json());
app.use(cors());

// API
const users = require('./api/users');
app.use('/api/users', users);
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// test for jest/supertest
module.exports = app;