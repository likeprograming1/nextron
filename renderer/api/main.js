const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.json({
    message : "Test"
  })
})

app.listen(port, () => {
  console.log(`start server ${port}`);
})