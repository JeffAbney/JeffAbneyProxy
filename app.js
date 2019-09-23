const express = require('express');
const request = require('request');
var cors = require('cors')

const app = express();


app.options('*', cors());
app.use(cors());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


app.head("/", cors(), (req, res) => {
    console.info("HEAD /simple-cors");
    res.sendStatus(204);
  });
app.get('/', cors(), (req, res) => {
  request(
    { url: 'https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      console.log("here's body", body)
      res.send(body);
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));