const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get('/channels/getUserInfo', (request, response) => {
    const getData = require('./mockdata/index');
    response.status(200).jsonp(getData().test);
})

server.listen(port, () => {
    console.log(`JSON Server is running at port ${port}`)
});