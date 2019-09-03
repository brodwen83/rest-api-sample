const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

const quotes = [
  {
    id: 1,
    quote: "The best is yet to come",
    author: "Unknown",
    year: 2000
  },
  {
    id: 2,
    quote: "This is a quote",
    author: "First Last",
    year: 1930
  },
  {
    id: 3,
    quote: "This is another quote",
    author: "First2 Last2",
    year: 1910
  },
  {
    id: 4,
    quote: "This is another quote 2",
    author: "First2 Last2",
    year: 1910
  }
];

app.listen(port, () => {
  console.log("Now listening to port: ", port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, Amigo");
});

app.get("/quotes", (req, res) => {
  console.log("Get a list of all quotes as json");

  if (req.query.year) {
    console.log("Return a list of quotes from the year: " + req.query.year);
    const filterYear = quotes.filter(q => q.year == req.query.year);

    res.send(filterYear);
  } else res.json(quotes);
});

app.get("/quotes/:id", (req, res) => {
  console.log("Parameter id: ", req.params.id);

  res.send(quotes.filter(q => q.id == req.params.id));
});

app.post("/quotes", (req, res) => {
  console.log(`Insert a new quote: ${req.body.quote}`);

  res.json(req.body);
});
