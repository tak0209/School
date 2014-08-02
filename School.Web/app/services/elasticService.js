// Create the es service from the esFactory
app.service('es', function (esFactory) {
    return esFactory({ host: 'localhost:9200' });
});