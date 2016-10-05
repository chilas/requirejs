/// <reference path="../_all.d.ts" />

requirejs.config({
    baseUrl: 'app/modules',
    paths: {
        'angular': '../node_modules/angular/angular.min',
        'angular-route': '../node_modules/angular/angular-route.min',
        'jquery': '../node_modules/jquery/dist/jquery.min'
    },
    deps: {
        'angular-route': ['angular'],
        'core': ['angular', 'jquery']
    }
})