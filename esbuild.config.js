const path = require('path');
require('dotenv').config();

require('esbuild')
  .build({
    entryPoints: ['application.js'],
    bundle: true,
    outdir: path.join(process.cwd(), 'app/assets/builds'),
    absWorkingDir: path.join(process.cwd(), 'app/javascript'),
    watch: process.argv.includes('--watch'),
    loader: {
      '.js': 'jsx',
      '.png': 'file',
      '.svg': 'file',
    },
    define: {
      'VARIABLE': JSON.stringify(process.env.VARIABLE)
    },
  })
  .catch(() => process.exit(1));
