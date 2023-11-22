const ts = require('typescript');
const fs = require('fs');

ts.transpileModule(
    fs.readFileSync('./testfile.ts', 'utf8'),
    {
      compilerOptions: {
        strictFunctionTypes: true,
      },
    });
