'use strict';

const { hasPlugin, addPlugin } = require('ember-cli-babel-plugin-helpers');
const { resolve } = require('path');
const VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: require('./package').name,

  included(parent) {
    this._super.included.apply(this, arguments);

    if (this.shouldPolyfillServiceImport()) {
      let pluginPath = resolve(__dirname, './lib/plugin-rename-service-import');

      if (!hasPlugin(parent, pluginPath)) {
        addPlugin(parent, pluginPath);
      }
    }
  },

  shouldPolyfillServiceImport() {
    let checker = new VersionChecker(this.project);

    // https://github.com/emberjs/ember.js/pull/19776/commits/12b89c42d1987fd782d06f1f170eb7ce25612558
    return checker.for('ember-source').lt('v4.1.0-alpha.5');
  },
};
