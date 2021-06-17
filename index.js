const { response } = require('express')
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
/** Writing test in the url will return ok */
app.get('/test', (req, res) => {
    const response={
        status:200, message:"ok"
    };
  res.send(response);
})
/** Writing time in the url will return the current time */

app.get('/time', (req, res) => {     
    let date = new Date() 
        const response= {                 
             status:200, message:date.getHours() +":"+date.getMinutes()     
            };     
            res.send(response);
})
/** writing hello/ will return hello */

app.get('/hello', (req, res) => {     
        const response= {                 
             status:200, message: "hello" 
            };     
            res.send(response);
})
/** writing hello/(any id) will return hello + id */
app.get('/hello/:id', (req, res) => {     
        const response= {                 
             status:200, message: "hello"+ "" + req.params.id
            };     
            res.send(response);
})
/** writing search/(any data) will return ok + data entered */

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
    let title = req.query.title;
    let year = req.query.year;
    let rating = req.query.rating;

    if (!title == true || (!year == true || isNaN(year)==true || year.length != 4)){
        const response= {                 
            status:403, error : true,  message:"you cannot create a movie without providing a title and a year "
           };     
           res.send(response);   
    }
    else if (!rating == true){
        rating = 4;
        year = parseInt(year)
        movies.push({title,year,rating})
        const response= {                 
            status:200,  message:"movie added successfully" 
           };     
           res.send(response);   
    }
    else {
        year = parseInt(year)
        rating = parseFloat(rating)
        movies.push({title,year,rating})
        const response= {                 
            status:200,  message:"movie added successfully" 
           };     
           res.send(response);   
    }
})

app.get('/movies/get', (req, res) => {
    const response= {

        status:200, data:movies
    };
    res.send(response);
})
app.get('/movies/edit/:id', (req, res) => {
        let id = req.params.id;
        let title = req.query.title;
        let year = req.query.year;
        let rating = req.query.rating;
    
        if (movies.length >= id) {
          if (title === undefined || title === "") {
            title = movies[id].title;
          }
    
          if (year === undefined || year === "" || !(/^\d{4}$/).test(year)) {
            year = movies[id].year;
          }
    
          if (rating === undefined || rating === "") {
            rating = movies[id].rating;
          }
          movies.push({title,year,rating})
          const response= {                 
              status:200,  message:"movie updated successfully" 
             };     
             res.send(response);  
            } 
          else {
            const response= {                 
            error: true, message: `the movie ${id} does not exist`,
          };
          res.status(404)
          res.send(response)
        }    
    })

app.get('/movies/delete/:id', (req, res) => {    
    if (req.params.id < movies.length && req.params.id > 0) {
     for (var i=0 ; i < movies.length ; i++){
         if (movies[i].title == movies[req.params.id].title){
             movies.splice(i,1);
             const response= {                 
                status:200,error:false, message:"movie deleted successfully" 
                             };     
       }
   }
   res.send(response);  

}
    else {           
          const response= {                 
        status:404, error:true, message:"the movie" + req.params.id + "does not exist" 
       };     
       res.send(response);  
  }
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
