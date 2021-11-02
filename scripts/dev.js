import esbuildServer from 'esbuild-serve';

esbuildServer(
  {
    bundle: true,
    platform: 'node',
    logLevel: 'info',
    inject: ['dev/react-shim.js'],
    entryPoints: ['src/index.jsx'],
    outfile: 'www/bundle/index.js',
    define: { 'process.env.NODE_ENV': "'development'" },
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

