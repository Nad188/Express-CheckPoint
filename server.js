const express = require("express");
const app = express();
const date = new Date();
const day = date.getDay();
const hour = date.getHours();

const logger = (req, res, next) => {
  if ((day != 6 || 7) && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(
      "welcome to Devoloper in your hand we would inform you that our website is closed during weekend and from 17pm to 9am.thank you for your understanding"
    );
  }
};
app.use(logger);

app.use(express.static(__dirname + "/public"));

const port = process.env.Port || 7777;
app.listen(port, (err) => {
  err
    ? console.log("there is an error")
    : console.log(`the server is running on http://localhost:${port}`);
});
