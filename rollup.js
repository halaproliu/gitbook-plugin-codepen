var rollup = require('rollup')
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel')

rollup
  .rollup({
    entry: 'src/plugin.js',
    plugins: [resolve(), babel()]
  })
  .then(function(bundle) {
    bundle.write({
      dest: 'assets/plugin.js',
      format: 'umd'
    })
  })
