"use strict";
exports.__esModule = true;
exports.createServer = void 0;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var createServer = function () {
    var app = (0, express_1["default"])();
    app
        .disable("x-powered-by")
        .use((0, morgan_1["default"])("dev"))
        .use((0, body_parser_1.urlencoded)({ extended: true }))
        .use((0, body_parser_1.json)())
        .use((0, cors_1["default"])())
        .get("/message/:name", function (req, res) {
        return res.json({ message: "hello ".concat(req.params.name) });
    })
        .get("/healthz", function (req, res) {
        return res.json({ ok: true });
    });
    return app;
};
exports.createServer = createServer;
