var express = require('express');
var app = new express();
app.get('/user',(req,res)=>
{
    res.send("My first Express code")
}
);
app.listen(2000);
