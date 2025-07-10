const express = require('express')
const app = express()
const port = 3000
const addon = require("../privmanager.node")
app.get('/', (req, res) => {
    const result  = addon.sum(2,3)
  res.send(`Using the function from RUST! and the sum is :${result}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
