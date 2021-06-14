const express = require('express')
const app = express()
const port = 3000
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

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
app.get('/search', (req, res) => { 
    if (req.query.s!= null)
    {    
    const response= {                 
         status:200, message: "ok ",data:req.query.s
        };     
        res.send(response);
    }
    else {
        const response= {                 
            status:500, error : true,  message:"you have to provide a search"
           };     
           res.send(response);   
    }
})
app.get('/movies/add', (req, res) => {     
})
app.get('/movies/read', (req, res) => {
    const response= {

        status:200, data:movies
    };
    res.send(response);
})
app.get('/movies/edit', (req, res) => {     
})
app.get('/movies/delete', (req, res) => {     
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})
