const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

// Google Map API
const mapDetails = require('../controllers/mapAPI');

// Authentication API
const auth = require('../authentication/auth');

// Tower API
const apiValidation = require('../middleware/apiValidation');

//testing API 
app.get('/',  (req, res) => {
   res.send({
      status:200,
      message:'Backend API Endpoint is stable !!'
   })
})

// Google map adding custom markers
app.post('/map/custom-markers', [apiValidation.mapDataValidation], (req, res) => {
    mapDetails.insertCustomMarker(req, res);
});

module.exports = app;