/// <reference path="../../../_all.d.ts" />

define(function () {

    var core = angular.module('core');

    var HomeController = function () {
        var vm = this;
        vm.title = 'This is fun';
    }

    core.controller('homeController', HomeController);
});