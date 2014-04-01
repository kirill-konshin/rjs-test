'use strict';

require.config({
    paths: {
        'crypto-js/aes': './crypto/aes', // paths has to be relative to ../main.js!!!
        'crypto-js/sha256': './crypto/sha256',
        'crypto-js/mode-ecb': './crypto/mode-ecb'
    },
    shim: {
        'crypto-js/mode-ecb': {
            deps: ['crypto-js/aes']
        }
    }
});

// Runtime definition for use in browser with no build
// Does not affect "grunt requirejs:stub"
// Also used by "grunt requirejs:stub_working"
define('crypto-js/core', ['crypto-js/aes', 'crypto-js/sha256', 'crypto-js/mode-ecb'], function() { return CryptoJS; });
