const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const response={
        status:200, message:"ok"
    };
  res.send(response);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})