'use strict';

module.exports = {
    commands: ['list', 'show', 'delete']
  , options: {}
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , extraCommands: []
};