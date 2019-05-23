'use strict';
const text = require('lib/text');
const Cli = require('lib/cli');

module.exports = (resource) => {
    return Cli.createCommand('stop', {
        description: `${text.toTitleCase('stop')} ${resource.title}`,
        dirname: __dirname,
        resource: resource,
        options: {
            [resource.name]: {
                description: `${text.toTitleCase(resource.title)} ID or name`,
                type: 'string',
                required: true,
            },
        },
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions/stop`, {})
            .then(result => args.helpers.sendOutput(args, result)),
    });
};

