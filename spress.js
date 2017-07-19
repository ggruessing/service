var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [
{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
},
{
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
},
{
    routeName: "grapas",
    name: "A rather small bunch of Grapes",
    role: "Mentor, role model",
    age: 1,
    forcePoints: 9000

},
{ 
  routeName: "sink",
  name: "The Kitchen Sink",
  role: "To be added to soups mostly",
  age: 3,
  forcePoints: 1
}
]

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// app.get("/yoda", function(req, res) {
//   res.json(yoda);
// });

// app.get("/darthmaul", function(req, res) {
//   res.json(darthmaul);
// });

app.get("/:characters?",function(req,res){
  var chosen = req.params.characters
  console.log(chosen)
  if (chosen){
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    // return res.send("No character found")
    return res.json(characters)
  }

  // res.end()
})

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//
// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});