// app.js

const http = require("http");
const Markov = require("js-markov");

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { "Content-Type": "text/html" });

  // Create a new Markov Chain
  // By default, its type is text
  var markov = new Markov();

  // Add some states
  markov.addStates([
    "Today is sunny",
    "Today is rainy",
    "The weather is sunny",
    "The weather for today is sunny",
    "The weather for tomorrow might be rainy",
  ]);

  // Train the Markov Chain
  markov.train();

  // Generate an output
  const foo = markov.generateRandom();

  console.log(foo);

  // Send back a response and end the connection
  res.end(`<h1>HELLLOOO </h1>Markov!\n$}`);
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
