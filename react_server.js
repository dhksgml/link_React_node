const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, function()
{
    console.log("listening on 8080");
})

app.use(express.static(path.join(__dirname, './react4/do-it-example/build')));

app.get('/', function(res, req){
    req.sendFile(path.join(__dirname, './react4/do-it-example/build/html'));
})