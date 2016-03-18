/// <reference path="../typings/tsd.d.ts"/>
'use strict';
angular.module('twClientApp', [
    'twClientApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])
    .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');
    $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map