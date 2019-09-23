const express = require('express');
const request = require('request');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.post('/', (req, res) => {
    res.send("OK!")
    // request(
    //     { url: 'https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand' },
    //     (error, response, body) => {
    //         if (error || response.statusCode !== 200) {
    //             return res.status(500).json({ type: 'error', message: err.message });
    //         }
    //         console.log("here's body", body)
    //         res.send(body);
    //     }
    // )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));