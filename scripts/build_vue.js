module.exports = function (context) {
  console.log('before build running');

  var Q = context.requireCordovaModule('q');
  var deferral = new Q.defer();

  var path = require('path');
  var childProcess = require('child_process');

  var bash = childProcess.spawn('bash');
  bash.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
  bash.stderr.on('data', (data) => {
    process.stdout.write(data);
  });
  bash.on('close', (code) => {
    if (code !== 0) {
      console.log('bash process exited with code ' + code);    
      return;
    }
    deferral.resolve();
  });
  bash.stdin.write(`cd ${path.resolve(__dirname, '../src/')}\n`);
  bash.stdin.write('npm run build\n');
  bash.stdin.end();


  return deferral.promise;
}