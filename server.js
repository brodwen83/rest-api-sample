const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express app listening on port: ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello, World!");
});
