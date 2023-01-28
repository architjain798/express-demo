const express = require("express");
const app = express();

const PORT = process.env.PUBLIC_PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/movies", (req, res) => {
  let arr = [
    {
      name: "abcd",
      date: new Date(),
    },
    {
      name: "xyz",
      date: new Date(),
    },
  ];
  res.send({ movies: arr });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
