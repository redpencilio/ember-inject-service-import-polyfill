'use strict';

const pluginTester = require('babel-plugin-tester').default;
const renameServiceImportPlugin = require('../../lib/plugin-rename-service-import');

pluginTester({
  plugin: renameServiceImportPlugin,
  pluginName: 'plugin-rename-service-import',
  tests: {
    'it renames `service` to `inject`': {
      code: `import { service } from '@ember/service';`,
      output: `import { inject as service } from '@ember/service';`,
    },
    'it supports import renaming': {
      code: `import { service as test } from '@ember/service';`,
      output: `import { inject as test } from '@ember/service';`,
    },
    "it doesn't rename `service` if it is a renamed import": `import { inject as service } from '@ember/service';`,
    "it doesn't rename `service` imports from other modules": `import { service } from 'somewhere-else';`,
    "it doesn't modify other imports from the `@ember/service` module": {
      code: `import Service, { service, inject } from '@ember/service';`,
      output: `import Service, { inject as service, inject } from '@ember/service';`,
    },
    "it doesn't rename variable names": 'let service;',
  },
});
