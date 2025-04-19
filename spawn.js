// file: spawn-example.js

const { spawn } = require('child_process');

// Windows users:
const child = spawn('cmd', ['/c', 'dir']);

// Linux/Mac users ke liye use this line instead:
// const child = spawn('ls');

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

child.on('close', (code) => {
  console.log(`Process closed with code: ${code}`);
});
