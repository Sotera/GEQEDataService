module.exports = function(server) {
    var ds = server.dataSources.MongoDB;
    ds.autoupdate(null, function () {
    });
};
