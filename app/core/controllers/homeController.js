/// <reference path="../../../_all.d.ts" />

define(function () {

    var core = angular.module('core');

    var HomeController = function () {
        var vm = this;
        vm.title = 'Nerd Experiments';
    }

    core.controller('homeController', HomeController);
});