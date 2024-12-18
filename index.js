require('dotenv').config();

const express = require('express')

//variable to include all of express functions
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Hello Twitter")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login in my Page</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})