'use strict';

const genericResource = require('bin/generic');


module.exports = parent => {
    const resource = {
        name: 'access',
        plugins: parent.plugins,
        description: `Manage your ${parent.name} access`,
        defaultQuery: '[].{id:id,method:method,path:path}',
        url: args => `${parent.url(args)}/access`,
        params: parent.params,
        options: parent.options,
        commands: ['list', 'show', 'delete'],
        title: 'access rule',
        context: {
            deleteParams: '--project my-project --token my-token --access my-access-id',
            listParams: '--project my-project --token my-token --access my-access-id',
        },
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};

