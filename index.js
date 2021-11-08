const express = require("express");
const cors = require("cors");
const fs = require('fs');
const { response } = require("express");
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will become a master programmer",
					 "The Node.js king will knight you",
					 "Today will be bug free for you",
           "You will eat cookies rather than be tracked by them",
           "You will remember the entire Javascript syntax by tonight",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.put("/api/language", (req, res) => {
  console.log(req.body)
  res.send({link: `https://www.google.com/search?q=${req.body.language}+resource`})
})
app.put("/api/name", (req, res) => {
  console.log(req.body)
  fs.writeFileSync('name.json', JSON.stringify(req.body));
  res.send(200)

})
app.put("/api/square", (req, res) => {
  console.log(req)
  let number = req.body.number
  console.log(number)
  sq = number**2

  res.send({message: `Your squared number is ${sq}`})
  
});
app.listen(4000, () => console.log("Server running on 4000"));
