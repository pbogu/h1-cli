'use strict';

const ProgressBar = require('progress');
const Cli = require('lib/cli');
const fs = require('fs');

const options = {
    disk: {
        description: 'Disk name or ID',
        type: 'string',
        required: true,
    },
    'destination-file': {
        description: 'Path to .vhdx file to save',
        type: 'string',
        required: true,
    },
    'no-progress': {
        description: 'Disable progress bar',
        type: 'boolean',
    },
};


module.exports = resource => Cli.createCommand('download', {
    description: `Download ${resource.title} to a .vhdx file`,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    resource: resource,
    handler: args => new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(args['destination-file']);
        const req = args.helpers.api.download(`${resource.url(args)}/${args.disk}/download`);
        req.on('error', reject);
        req.on('end', resolve);
        req.on('response', response => {
            if (!args['no-progress']) {
                showProgressBar(req, response);
            }
        });
        req.pipe(writeStream);
    }),
});

const showProgressBar = (req, response) => {

    console.log();
    const bar = new ProgressBar('  downloading [:bar] :rate/Bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        total: parseInt(response.headers['content-length']),
        stream: process.stderr,
    });
    response.on('data', chunk => bar.tick(chunk.length));
};
