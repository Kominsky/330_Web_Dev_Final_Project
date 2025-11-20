const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

//enable CORS for all routes
app.use(cors());

//serve static files
app.use(express.static(path.join(__dirname, '..')));

//serve the cards data
app.get('/cards-data.json', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'cards-data.json'));
});

//serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Open your browser and navigate to http://localhost:${PORT}');
});



