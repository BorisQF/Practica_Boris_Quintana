const mongoose = require('mongoose');
//Import config (URL_DB);
require('./index');
//Database connection
mongoose.connect(process.env.URL_DB, { useNewUrlParser: true })
    .then(() => {
        console.log("Successful database connection");
    })
    .catch((err) => {
        console.log(`Connection error to the DB: ${err}`);
    });

// para quitar el warning de obsoleto
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);