const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1) + parseFloat(n2);
    response.json({result});
});

app.post('/results', (request, response) => {
    const {n1, n2} = request.body;
    const result = parseFloat(n1)*parseFloat(n2);
    response.json({result});
});

app.put('/results', (request, response) => {
    const {n1, n2} = request.body;
    const result = parseFloat(n1)/parseFloat(n2);
    response.json({result});
});

app.patch('/results', (request, response) => {
    const {n1, n2} = request.body;
    const result = Math.pow(parseFloat(n1), parseFloat(n2));
    response.json({result});
});

app.delete('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1)-parseFloat(n2);
    response.json({result});
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
