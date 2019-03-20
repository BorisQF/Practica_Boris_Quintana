//Import configurations.
require('./config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Import routes
app.use(require('./routes'));

//Import mongoDB connection
require('./config/connectionDB');


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started on port: ${process.env.PORT}`);
});