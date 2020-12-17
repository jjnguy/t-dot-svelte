import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/T.svelte',
  output: [
    { file: pkg.module, 'format': 'cjs' },
    { file: pkg.main, 'format': 'umd', name: 'T' }
  ],
  plugins: [
    svelte(),
    resolve()
  ],
};