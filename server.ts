const express = require('express');
import { DeviceDescriptor, usb } from 'usb';

const app = express();
const port = 3000;

// Endpoint para obtener lista de dispositivos USB
app.get('/usb-devices', (req: any, res: { json: (arg0: { deviceDescriptor: DeviceDescriptor; deviceAddress: number; busNumber: number; }[]) => void; }) => {
  const devices = usb.getDeviceList();
  res.json(devices.map(device => ({
    deviceDescriptor: device.deviceDescriptor,
    deviceAddress: device.deviceAddress,
    busNumber: device.busNumber
  })));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
