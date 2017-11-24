const config = require("../config.json");

const configExports = {};

configExports.getServerPort = function() {
    return config.port;
};

configExports.getMapBoxKey = function() {
    return config["map-box-api"];
};

module.exports = configExports;