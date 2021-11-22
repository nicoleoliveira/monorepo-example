import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    typescript({ typescript: require('typescript') }), 
    terser()
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];


const input = 'src/button.ts';

export default {
  input,
  output: {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },
  plugins,
  external,
};