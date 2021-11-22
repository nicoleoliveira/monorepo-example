import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const input = 'src/app.js';

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [nodeResolve()]
  },
];
