const { execFile } = require('child_process');

execFile('node', ['-v'], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log(`Output from execFile: ${stdout}`);
});
