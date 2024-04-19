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

// end
require('./database');
app.use(bodyParser.json());
app.use(cors());

/**
 * Junlin
 * routes
 */

app.use("/auth",require("./routes/auth"));


app.use(express.static(path.join(__dirname, '../build')))
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../build', 'index.html');  //Change from Ming to solve server error
    //if (!url.startsWith('/app/')) // since we're on local windows
    //  url = url.substring(1);
    res.sendFile(url);

    // res.sendFile(path.resolve(__dirname, '../build', 'index.html')); // From Ming
  });

  /**
 * Junlin
 * connect to database
 */
require("./models/User")

  /**
 * Ming
 * connect to database
 */
require("./models/Resource")


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


module.exports = app;
