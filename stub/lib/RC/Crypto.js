'use strict';

(function() {

    var RC = require('../RC');

    require('crypto-js/aes');
    require('crypto-js/sha256');
    require('crypto-js/mode-ecb');

    RC.Crypto = require('crypto-js/core');

})();