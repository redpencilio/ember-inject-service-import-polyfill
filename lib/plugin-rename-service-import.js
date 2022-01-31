'use strict';

module.exports = function () {
  return {
    name: 'plugin-rename-service-import',
    visitor: {
      ImportSpecifier(path) {
        let { node: importSpecifier, parent: importDeclaration } = path;

        if (
          isEmberServiceModuleImport(importDeclaration) &&
          isNewImportName(importSpecifier)
        ) {
          renameServiceImportToInject(importSpecifier);
        }
      },
    },
  };
};

function isEmberServiceModuleImport(importDeclaration) {
  return importDeclaration.source.value === '@ember/service';
}

function isNewImportName(importSpecifier) {
  return importSpecifier.imported.name === 'service';
}

function renameServiceImportToInject(importSpecifier) {
  importSpecifier.imported.name = 'inject';
}
