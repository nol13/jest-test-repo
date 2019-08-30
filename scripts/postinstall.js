var shell = require('shelljs');
var os = require('os');

// node_modules/generic-names/index.js doesn't exist on build server,
// but only need to run this on windows anyway :/
if (os.platform() !== 'win32') shell.exit();

shell.rm('-f', 'node_modules/babel-plugin-css-modules-transform/node_modules/generic-names/index.js');
shell.cp('-f', 'node_modules/generic-names/index.js', 'node_modules/babel-plugin-css-modules-transform/node_modules/generic-names/index.js');
