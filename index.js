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
app.get('/movies/get', (req, res) => {
    const response= {

        status:200, data:movies
    };
    res.send(response);
})
app.get('/movies/edit', (req, res) => {     
})
app.get('/movies/delete', (req, res) => {     
})
app.get('/movies/get/by-date', (req, res) => {
    const response= {
        status:200, data:movies.sort((a,b) => (a.year > b.year)? 1 : -1)
    };
    res.send(response);
})

app.get('/movies/get/by-rate', (req, res) => {
    const response= {
        status:200, data:movies.sort((a,b) => (a.rating < b.rating)? 1 : -1)
    };
    res.send(response);
})
app.get('/movies/get/by-title', (req, res) => {
    const response= {
        status:200, data:movies.sort((a,b) => (a.title > b.title)? 1 : -1)
    };
    res.send(response);
})
app.get('/movies/get/id/:id', (req, res) => {
    if (movies[req.params.id]==null){
        const response= {

            status:404, error:true, message:'the movie '+req.params.id+' does not exist'}

        res.status(404);
        res.send(response);
    }else{
    const response= {

        status:200, data:movies[req.params.id]}
    res.send(response);
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})
