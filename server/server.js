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
    var classes = ['id', 'slot', 'subject', 'group', 'classroom'];
    response.send(classes);
}); 

app.get('/api/teachers', (req, res) => {
    var teachers = ['id', 'name', 'email', 'password', 'classes'];
    response.send(teachers);
}); 

app.get('/api/learners', (req, res) => {
    var learners = ['id', 'name', 'classes'];
    response.send(learners);
}); 

app.get('/api/classes/:name', function (request, response) {
    var classes = null;
    for (var i = 0; i < data.classes.length; i++) {
    if (data.classes[i].name === request.params.name) {
    room = data.classes[i];
    response.json(data.classes[i]);
    }
    }
    if (classes == null) {
    response.status(404).json("Sorry! No classes named '" +
    request.params.name + "' found.");
    }
    });
