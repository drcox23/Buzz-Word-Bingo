const express = require("express");
const app = express();
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({ extended: true }));

// let newBuzz = {
//   buzzwords: String,
//   points: Number
// };

const buzzwords = [
  // {
  //   buzzwords: "Aloha",
  //   points: 10
  // }
];

let totalScore = 0;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/buzzwords", (req, res) => {
  res.json(buzzwords);
  console.log("total score: ", totalScore);
});

app.post("/buzzwords", (req, res) => {
  console.log("req.body: ", req.body);
  let buzzObject = req.body;
  if (buzzwords.includes(buzzObject.buzzwords)) {
    res.send("buzzword already exists");
    console.log("buzzwords: ", buzzwords);

    return false;
  } else if (
    buzzwords.length < 5 &&
    typeof (buzzObject.buzzwords === "string")
  ) {
    let newBuzz = {};
    newBuzz.buzzwords = buzzObject.buzzwords;
    newBuzz.points = buzzObject.points;
    buzzwords.push(newBuzz);
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

app.put("/buzzwords", (req, res) => {
  console.log("req.body: ", req.body);
  let buzzObject = req.body;
  buzzObject.points = req;
  buzzwords.push(buzzObject);
});

// app.delete("/buzzwords". (req, res) => {
//   let filteredBuzz = buzzwords.forEach(obj => obj.buzzwords === Object.values(req.body)[0])

//   });
// })

app.listen(PORT, () => {
  console.log(`Application is CONNECTED to PORT: ${PORT}`);
});
