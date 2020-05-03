require('./config.js');
const express = require('express')
const app = express()

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario/:id', function(req, res) {
    let id = req.params.id

    res.json({
        id
    })
})

app.post('/usuario', function(req, res) {
    let data = req.body;
    if (data.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El campo nombre es obligatorio'
        });
    } else {
        res.json({
            usuario: data
        })
    }

})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id

    res.json({
        id
    })
})

app.delete('/', function(req, res) {
    res.json('Delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`);
})