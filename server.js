
// Module imports
const express = require('express');
const fs = require('fs');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware

// parse incoming JSON data
app.use(express.json());

// rel paths to routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API erver now on port ${PORT}`)
});


