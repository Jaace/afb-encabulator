// app.js

const http = require("http");
const Markov = require("js-markov");

// Create an instance of the http server to handle HTTP requests.
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response.
  res.writeHead(200, { "Content-Type": "text/html" });

  // Create a new Markov Chain.
  // By default, its type is text.
  var markov = new Markov();

  // Add some states.
  markov.addStates([
    "Nothing like cold steel on a hot day.",
    "Ruck up its time to move out",
    "Get ready to stitch 'em up",
    "Lock and load, rinse, repeat. It’s that simple.",
    "Time to put some lead downrange.",
    "I've put the time in, I've earned my stripes.",
    "Pop the smoke make 'em broke.",
    "(Sniff - Sniff) Spent gunpowder... smells like victory.",
    "If you can't keep up you're straight out of luck.",
    "We'll win this thing together. Semper Fi or die.",
    "Real men use ironsights? Heh, I use heavy artillery.",
    "Clips are what civvies use in their hair, this is called a magazine.",
    "Safeties off, weapons free.",
    "Time to see if all those drills have paid off.",
    "Amateur hour's over, time for the big leagues.",
    "Ready up, it’s go time",
    "I came here to party, let's rock.",
    "Tap, rack, and clear. I'm ready.",
    "No Cluster Foxtrots in my unit, let's run this.",
    "We got this round squared away",
    "Looks like aiming isn't your strong suit.",
    "Bad effect on target, rook.",
    "On this field you gotta be prepared for anything.",
    "You can't dodge heavy artillery. You know that right?",
    "Did you think the trigger would pull itself?",
    "Don't knock yourself. I put my time in long ago.",
    "Dropped, shocked, and rocked. Say hello to the four-oh first.",
    "First one through the door is usually the first one in a body bag.",
    "Good initiative, bad judgment. Try again.",
    "I got the best of you today.",
    "Care package touching down. They usually carry rare platforms.",
    "You sure you didn't just make it out of basic training?",
    "Kill confirmed. Gonna add you to the list.",
    "Like a deer in the headlights. And I'm the headlights.",
    "No substitute for real steel.",
    "You're not even worth the chalk to tally.",
    "Not your day, shooter.",
    "You played dead like a pro.",
    "Rate of fire means nothing when you miss all the time.",
    "What happened? Recoil hit you in the face?",
    "[sniffs] So that's what fear smells like.",
    "Take a breather. You lost this one.",
    "First you lose your cool, then you lose your head.",
    "Too slow on the draw.",
    "Training dummies move faster than you.",
    "Hold on tight! It’s time to drop, shock, and rock!",
    "Hit the jets! We're dropping hot.",
    "That'll show you for trying to go hand-and-hand with the best around."
  ]);

  // Train the Markov Chain.
  markov.train();

  // Generate an output of random variable length (15-500 characters).
  const generatedText = markov.generateRandom(Math.floor(Math.random() * (500 - 16) + 15));

  const reloadButton = '<button onClick="window.location.reload();">Hell yeah!</button>';

  // Send back a response and end the connection.
  res.end(`<h1>Randomly generated Bangofact</h1>\n<p>${generatedText}</p><p>${reloadButton}</p>`);
});

// Start the server on port 3000.
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
