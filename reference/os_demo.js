const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Total memory
console.log(`Memoria Total: ${os.totalmem()}`);

// Free memory
console.log(`Memoria Libre: ${os.freemem()}`);

console.log(`Memoria restante ${os.totalmem() - os.freemem()}`);

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());