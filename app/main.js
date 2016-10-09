/// <reference path="../_all.d.ts" />

require.config({
    baseUrl: 'app/core',
    paths: {
        'angular': '/node_modules/angular/angular',
        'angular-route': '/node_modules/angular-route/angular-route',
        'bootstrap': '/node_modules/bootstrap/dist/js/bootstrap.min',
        'jquery': '/node_modules/jquery/dist/jquery.min',

        // load the modules
        'core': 'core',
    },

    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'core': {
            deps: ['angular-route', 'bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        }
    }

});