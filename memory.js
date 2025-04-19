const { memoryUsage } = require("process");

const used = memoryUsage();
console.log("🧠 Memory Usage:");
console.log(`Heap Used: ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`);