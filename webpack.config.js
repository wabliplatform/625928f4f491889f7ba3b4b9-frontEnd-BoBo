const path = require('path');

module.exports = {
  entry: {
	'Login' : './javascript/Login.js',
	'Page2' : './javascript/Page2.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};