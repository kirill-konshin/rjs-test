(function() {

    module.exports = function(grunt) {

        grunt.initConfig({
            clean: {
                main: {
                    src: [
                        './build'
                    ]
                }
            },
            requirejs: {
                two_configs: {
                    options: {
                        name: '../../lib/almond', // relative to last config file
                        mainConfigFile: ['./two-configs/dir1/requirejs-config.js', './two-configs/dir2/requirejs-config.js'],
                        include: ['module1', 'module2'],
                        optimize: 'none',
                        out: './build/build-two-configs.js',
                        wrap: true
                    }
                },
                stub: {
                    options: {
                        name: '../lib/almond', // relative to last config file
                        mainConfigFile: ['./stub/lib/requirejs-config.js', './stub/main.js'],
                        cjsTranslate: true,
                        insertRequire: ['app'],
                        rawText: {
                            'crypto-js/core': 'define(["crypto-js/aes", "crypto-js/sha256", "crypto-js/mode-ecb"], function() { return CryptoJS; });',
                        },
                        optimize: 'none',
                        out: './build/build-stub.js',
                        wrap: true
                    }
                },
                stub_working: {
                    options: {
                        name: '../lib/almond', // relative to last config file
                        mainConfigFile: ['./stub/lib/requirejs-config.js', './stub/main.js'],
                        insertRequire: ['app'],
                        cjsTranslate: true,
                        optimize: 'none',
                        out: './build/build-stub-working.js',
                        wrap: true,
                        deps: ['./lib/requirejs-config.js'] // will work after that, no rawText needed anymore since 'crypto-js/core' is defined in requirejs-config.js
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-requirejs');
        grunt.loadNpmTasks('grunt-contrib-clean');

        grunt.registerTask('default', [
            'clean',
            'requirejs'
        ]);

    };

})();