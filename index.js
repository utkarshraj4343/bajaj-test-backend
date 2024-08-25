// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const routes = require('./routes/routes');
app.use('/bfhl', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
