const express = require('express')
const app = express()
const port = 2004

app.get('/',(req,res) => {
  res.sendFile("./public/home.html",{root: __dirname})
}
)
app.listen(port,() => {
  console.log(`http://localhost:${port}/`);
  
}
)