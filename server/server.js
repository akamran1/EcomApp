"use strict";
exports.__esModule = true;
var getac_1 = require("./ac/getac");
var getvm_1 = require("./vm/getvm");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use("/ac", getac_1["default"]);
app.use("/vw", getvm_1["default"]);
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("server started");
});
