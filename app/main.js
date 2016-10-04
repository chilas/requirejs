/// <reference path="../_all.d.ts" />

require.config({
    baseUrl: 'app/core',
    paths: {
        'angular': '/node_modules/angular/angular',
        'angular-route': '/node_modules/angular-route/angular-route',

        // load the modules
        'core': 'core',
    },

    shim: {
        'core': {
            deps: ['angular-route']
        },
        'angular-route': {
            deps: ['angular']
        }
    }

});