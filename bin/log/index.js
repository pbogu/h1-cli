'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'log',
    defaultQuery: '[].{id:_id,name:name,retention:retention,sizeUsed:sizeUsed,state:state,processing:processing}',
    commands: ['show', 'delete', 'rename', 'list', 'history', 'tag', 'service', 'transfer'],
    plugins: genericDefaults.plugins,
    url: () => 'logArchive',
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'log archive',
};

const category = genericResource(resource);

const credential_type = ['password'];

category.addChild(require('./create')(resource));
category.addChild(require('./stream')(resource));
category.addChild(require('./logger')(resource));
category.addChild(require('../generic/credential')(resource, credential_type));

module.exports = category;