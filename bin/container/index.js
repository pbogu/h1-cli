'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const text = require('lib/text');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:id, name:name, type:flavour, image:image, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'container',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    title: 'Container',
    extraCommands: ['log', 'start', 'stop'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./recreate')(resource));

const childDefault = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    // dirname: __dirname,
});

category.addChild(require('./attach')(childDefault));
category.addChild(require('./process')(childDefault));

const actionDefault = Object.assign({}, resource, childDefault, {
    dirname: `${__dirname}/action`,
});

category.addChild(genericAction(actionDefault, 'restart'));

module.exports = category;
