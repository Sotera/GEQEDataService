var mongoAddr = process.env.MONGO_PORT_27017_TCP_ADDR||"localhost";
var mongoPort = process.env.MONGO_PORT_27017_TCP_PORT||"27017";
var fs = require('fs');

// create datasources for docker deployments
var fileContents = fs.readFileSync(__dirname + '/datasources_template.json', 'utf8');
fileContents = fileContents.replace(/MONGO_HOST_ADDR/g, '"' + mongoAddr + '"');
fileContents = fileContents.replace(/MONGO_HOST_PORT/g, '"' + mongoPort + '"');
fs.writeFileSync(__dirname + '/datasources.json', fileContents);

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
