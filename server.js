const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
// const PORT = process.env.PORT || 3001;

const PORT = 3001


app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname,'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname,'public/index.html'))
);


// app.get('/api', (req, res) => {
//     res.json({
//         term: "Test Title",
//         description : "Test text"
//     });
// });

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);

