'use stict';

const path = require('path');
const os = require('os');
const fs = require('fs');

const logger = require('./logger');
const _ = require('lodash');

const plugins = [];
let config;

const name = require('package.json').name;

const configPath = path.join(os.userInfo().homedir, `.${name}`);
const configFilePath = path.join(configPath, 'conf.json');
const pluginsPath = path.join(configPath, 'plugins');

const store = () => {
    const data = JSON.stringify(config, null, 2);
    fs.writeFileSync(configFilePath, data, 'utf8');
};

if (!fs.existsSync(configPath)) {
    fs.mkdirSync(configPath);
}

if (fs.existsSync(configFilePath)) {
    config = require(configFilePath);
} else {
    logger('warn', 'Config file not found. Creating one in your home directory.');
    config = {};
    store();
}

if (fs.existsSync(pluginsPath)) {
    fs.readdirSync(pluginsPath).forEach(name => {
        plugins.push(require(path.join(pluginsPath, name)));
    });
}

exports.get = (key, defaultValue) => _.get(config, key, defaultValue);
exports.set = (key, value) => _.set(config, key, value);
exports.unset = key => _.unset(config, key);
exports.plugins = plugins;

exports.store = store;