const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({hi:'there'});
});

app.get('/home',(req,res) => {
    res.send({hi:'home'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
