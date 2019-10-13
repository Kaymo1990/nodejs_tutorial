const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.get('/example', (req, res)=> {
    res.send('hitting example route');
});

app.get('/example/:name/:age',(req, res)=> {
    res.send(`${req.params['name']} is ${req.params['age']} years old and is learning node.js`);
});

app.listen(3000);