/// <reference path="../../_all.d.ts" />

define(function () {
    console.log('core loaded...')
    var core = angular.module('core', ['ngRoute']);

    // Config setup
    var Config = function ($routeProvider) {
        var templateDir = 'app/core/templates';

        $routeProvider
            .when('/', {
                templateUrl: templateDir + '/home.view.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/home', {
                templateUrl: templateDir + '/home.view.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });
    }
    Config.$inject = ['$routeProvider'];

    var deps = [
        'controllers/homeController'
    ];

    require(deps, function () {
        angular.bootstrap(document, ['core']);
    });
    core.config(Config);

});