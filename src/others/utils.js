'use strict';
const path = require('path');
const _root = path.resolve(__dirname, '../..');

exports.absolutePath = function (src) {
    return path.join(_root, src);
};
