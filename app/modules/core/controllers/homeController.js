/// <reference path="../../../_all.d.ts" />


define(function () {
    var app = angular.module('core');

    var homeController = function () {
        var vm = this;

        vm.title = 'Home';
    }
    
    app.controller('homeController', homeController);
})