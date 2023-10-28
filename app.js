const express = require('express');
const port = 3000
const app = express();
// ke routing
const router = require('./routes');

//panggil middleware agar dapat nilai bentuk json

app.use(express.json());
app.use(express.urlencoded({ extended: false} ))

// set prefix api
app.use('/api/v1', router);

if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
        console.log(`port running on http://localhost:${port}`)
    })
}


module.exports = app; 