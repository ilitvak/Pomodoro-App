var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// Asset paths first
app.get('./app/js/:file', serveFile.bind(null, 'dist/js'));
app.get('/app/css/:file', serveFile.bind(null, 'dist/css'));
app.get('/app/img/:file', serveFile.bind(null, 'dist/img'));
app.get('/app/templates/:file', serveFile.bind(null, 'dist/templates'));

// Anything else is sent to index.html to support SPA routing
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist' });
});

// Start the server!
var server = app.listen(port, serverStarted);

function serverStarted() {
    console.log("Bloc Base Project is running on port " + port);
}

function serveFile( root, req, res ) {
    res.sendFile(req.params.file, { root: root });
}

