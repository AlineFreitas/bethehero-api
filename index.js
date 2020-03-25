const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({
    message: "Hello World!"
  });
});

const port = 3333;

app.listen(port)