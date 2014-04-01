'use strict';

require.config({
    paths: {
        PATH_TO_LIB: './lib'
    },
    shim: {
    },
    deps: ['app', './lib/requirejs-config.js'] // second one is needed to run in browser, see the file
});