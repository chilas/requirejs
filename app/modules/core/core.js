/// <reference path="../../../_all.d.ts" />

define(['angular'], function () {
    var core = angular.module('core', ['ngRoute']);

    var Config = function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'app/modules/core/templates/home.view.html',
                controllerAs: 'vm'
            })
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'app/modules/core/templates/home.view.html',
                controllerAs: 'vm'
            })
    }

    core.config(Config);

    deps = ['homeController'];

    require(deps, function () {
        angular.bootstrap('document', 'core');
    })

})