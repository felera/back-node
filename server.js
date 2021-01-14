const express = require('express')
const app = express()
const port = 8080




app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/hello/:nombre', function(req, res) {
    var nombre = req.params.nombre;
    console.log(req.params)
    res.send('hola ' + nombre);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
