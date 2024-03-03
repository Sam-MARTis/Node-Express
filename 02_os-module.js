const os = require('os');

console.log(os.userInfo());

const OSInfo = {
    "OS Type": os.type(),
    "OS Platform": os.platform(),
    "OS Architecture": os.arch(),
    "OS Release": os.release(),
    "OS Uptime": os.uptime(),
    "OS Hostname": os.hostname(),
    "OS Load Average": os.loadavg(),
    "OS Total Memory": os.totalmem(),
    "OS Free Memory": os.freemem(),
    "OS CPU Cores": os.cpus(),
    "OS Network Interfaces": os.networkInterfaces()
}
console.log(OSInfo);