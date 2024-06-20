"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var usb_1 = require("usb");
var app = express();
var port = 3000;
// Endpoint para obtener lista de dispositivos USB
app.get('/usb-devices', function (req, res) {
    var devices = usb_1.usb.getDeviceList();
    res.json(devices.map(function (device) { return ({
        deviceDescriptor: device.deviceDescriptor,
        deviceAddress: device.deviceAddress,
        busNumber: device.busNumber
    }); }));
});
app.listen(port, function () {
    console.log("Servidor escuchando en http://localhost:".concat(port));
});
