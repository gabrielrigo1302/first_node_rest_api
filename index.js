const express = require('express');

const app = express();
const port = 3000;

app.listen(port);

app.get('/', ( _, response) => {
    response.send("Servidor rodando")
});