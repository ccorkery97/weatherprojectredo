const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});