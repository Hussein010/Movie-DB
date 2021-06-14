const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const response={
        status:200, message:"ok"
    };
  res.send(response);
})
app.get('/test', (req, res) => {
    const response={
        status:200, message:"ok"
    };
  res.send(response);
})
app.get('/time', (req, res) => {     
    var date = new Date() 
        const response= {                 
             status:200, message:date.getHours() +":"+date.getMinutes()     
            };     
            res.send(response);
})
app.get('/hello', (req, res) => {     
        const response= {                 
             status:200, message: "hello" 
            };     
            res.send(response);
})
app.get('/hello/:id', (req, res) => {     
        const response= {                 
             status:200, message: "hello"+ "" + req.params.id
            };     
            res.send(response);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})
