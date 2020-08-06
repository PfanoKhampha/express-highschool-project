var express = require ("express");
var app = express();
var port = 8000;
var data = require('data.js');

app.listen(port, () => {
    console.log(`server listening on  ${port}`)
})

app.get('/', (req, res) => {
    response.send('<h3> Hello World</h3>');
})

app.get('/api/classes', (req, res) => {
    var categories = ['id', 'slot', 'subject', 'group', 'classroom'];
    response.send(classes);
}); 

app.get('/api/teachers', (req, res) => {
    var categories = ['id', 'name', 'email', 'password', 'classes'];
    response.send(teachers);
}); 

app.get('/api/learners', (req, res) => {
    var categories = ['id', 'name', 'classes'];
    response.send(learners);
}); 


