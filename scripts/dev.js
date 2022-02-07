import CssModulesPlugin from 'esbuild-css-modules-plugin';

import { EsbuildServer } from '../dev/server.js';

EsbuildServer(
  {
    bundle: true,
    platform: 'node',
    logLevel: 'info',
    inject: ['dev/react-shim.js'],
    entryPoints: ['src/index.jsx'],
    outfile: 'www/bundle/index.js',
    define: { 'process.env.NODE_ENV': "'development'" },
    plugins: [
      CssModulesPlugin(),
    ],
  },
  {
    port: 8000,
    root: 'www',
  },
)
  .then(() => {})
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });

