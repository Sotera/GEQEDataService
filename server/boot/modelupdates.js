module.exports = function(server) {
    var ds = server.dataSources.MongoDBs;
    ds.autoupdate(null, function () {
    });
};
