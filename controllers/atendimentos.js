module.exports = (app) => {
    app.get('/atendimentos', ( _, response) => {
        response.send('Servidor rodando');
    });

    app.post('/atendimentos', ( request, response) => {
        console.log('request ===> ', request.body);

        response.send('Servidor rodando');
    });
}