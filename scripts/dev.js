import EsbuildServer from 'esbuild-serve';
import Esbuild from 'esbuild';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

EsbuildServer(
  {
    bundle: true,
    // platform: 'node',
    logLevel: 'info',
    inject: ['dev/react-shim.js'],
    // entryPoints: ['src/index.jsx'],
    entryPoints: ['src/app.js'],
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

