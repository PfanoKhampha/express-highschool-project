var express = require ("express");
var app = express();
var port = 8000;

app.get('/', (req, res) => {
    response.send('<h3> Hello World</h3>');
})

app.get('/api/v1/categories', (req, res) => {
    var categories = ['aerobic', 'strength', 'balance', 'flexibility'];
    response.send(categories);
}); 

app.listen(port, () => {
    console.log(`server listening on  ${port}`)
})