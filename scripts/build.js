const path = require('path');
const esbuild = require('esbuild');

esbuild.build({}).catch(() => process.exit(1));
