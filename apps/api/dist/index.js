"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var logger_1 = require("logger");
var port = process.env.PORT || 5000;
var server = (0, server_1.createServer)();
server.listen(port, function () {
    (0, logger_1.log)("api running on ".concat(port));
});
