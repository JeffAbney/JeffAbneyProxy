const express = require('express');
const request = require('request');

const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
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