const express = require('express');
const app = express();

app.use(express.json())

app.listen(3000,()=>{
  console.log('Listening On 3000')
})

app.post("/register",(req,res)=>{
  res.status(201).send(req.body)
})