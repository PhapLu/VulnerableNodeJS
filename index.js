const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

// Route that uses lodash
app.get('/filter', (req, res) => {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  const result = _.filter(data, (item) => item.age > 30);
  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
