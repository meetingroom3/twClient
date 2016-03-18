/// <reference path="../../typings/tsd.d.ts"/>
'use strict';
angular.module('twClientApp')
    .config(function ($stateProvider) {
    $stateProvider
        .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html'
    });
});
//# sourceMappingURL=main.js.map