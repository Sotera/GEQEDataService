module.exports = function(server) {
    var ds = server.dataSources.MongoDatabase;
    ds.autoupdate(null, function () {
    });
};
