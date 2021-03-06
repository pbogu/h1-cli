'use strict';

const Cli = require('lib/cli');

const logger = require('lib/logger');
const interactive = require('lib/interactive');
const config = require('lib/config');

const active_user = config.get_active_user();

const options = {
    username: {
        description: 'Your username',
        type: 'string',
        required: !active_user,
    },
    password: {
        description: 'Password',
        type: 'string',
    },
};

const handler = async args => {
    let p;
    const username = args.username || active_user;
    if (args.password) {
        p = args.helpers.api.getApiKey(username, { password: args.password });
    } else {
        p = args.helpers.api.getApiKeySSH(username)
            .catch(err => {
                if (err.message.includes('host fingerprint verification failed')) {
                    throw Cli.error.serverError(err.message);
                }

                return interactive.prompt('Password', {
                    type: 'password',
                    name: 'value',
                    validate: input => input.length === 0 ? 'Incorrect password' : true,
                })
                    .then(password => args.helpers.api.getApiKey(username, { password: password.value }));
            });
    }

    return p
        .then(async () => {
            return logger('info', 'You successfully logged and stored your session identifier in config file');
        }).catch(e => {
            if (e.status === 404 || e.status === 401) {
                return logger('error', `Your login or password is incorrect (${e.status})`);
            }
            throw e;
        });
};

module.exports = Cli.createCommand('login', {
    dirname: __dirname,
    description: 'Obtain your apiKey',
    plugins: [
        require('../_plugins/api'),
    ],
    priority: 10,
    options: options,
    handler: handler,
});
