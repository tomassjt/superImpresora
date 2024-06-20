import usb from 'usb';

export class USB {
  private device: usb.Device;
  private endpoint: usb.Endpoint | undefined;

  constructor() {
    // Aquí puedes inicializar tu dispositivo USB
    // Por ejemplo, encontrar y establecer el dispositivo
    const devices = usb.getDeviceList();
    this.device = devices[0]; // Aquí puedes ajustar la lógica para encontrar tu impresora específica
  }

  public async open(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.device.open();
      const iface = this.device.interface(0);
      iface.claim();
      this.endpoint = iface.endpoint(0);

      resolve();
    });
  }

  public async write(data: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.endpoint) {
        reject(new Error('Endpoint no disponible'));
        return;
      }
    
      this.endpoint.transfer(Buffer.from(data), (error: any) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  public async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.device.close();
      resolve();
    });
  }
}
