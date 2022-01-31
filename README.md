ember-inject-service-rename-polyfill
==============================================================================

This repo was an attempt at allowing older apps (and addons that support older versions) to use the "new" service import syntax.

It uses a babel plugin that converts the new import name back to the old version:

Input: `import { service } from '@ember/service';`<br>
Output: `import { inject as service } from '@ember/service';`

Due to [technical reasons](https://github.com/ember-cli/babel-plugin-ember-modules-api-polyfill/issues/133#issue-680250806) it's not viable to get this to work in Ember <3.27 because of the way ember-cli-babel is implemented. Only supporting 3.27 and 3.28 isn't really interesting since the feature is available in Ember 4.1 already and because it only provides a minor benefit, investing more time isn't really worth it either.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
