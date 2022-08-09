const express = require('express')
const app = express()
const port = 5000;

const themoviedb = require("./services/themoviedb")

app.get("/trending", async (req, res) => {
  const data = await themoviedb.trending()
  res.json(data)
})

app.get("/search/:q", async (req, res) => {
  const q = req.params.q
  const data = await themoviedb.search(q)
  console.log("Search got")
  res.json(data)
})

app.get("/video/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({})
})

app.listen(port, () => {
  console.log(`MNTv server is running on ${port}`)
});