const os = require('os');

export default class OsConfigurator {

  getHostName() {
    return os.hostname();
  }

  getOperationSystemName() {
    return os.type();
  }

  getOperationSystemVersion() {
    return os.release();
  }

  getTotalMemory() {
    return os.totalmem();
  }

  getCpuInformation() {
    return os.cpus();
  }

  get avgLoad() {
    return os.loadavg();
  }
}
