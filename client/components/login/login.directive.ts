/// <reference path="../../typings/tsd.d.ts" />

'use strict';

namespace twClientApp {
   
    export class LoginController {

        static $inject = ['oauthService'];
        constructor(public oauthService) {
        } 
        
        login() {
            console.log('oauth service executing.');
            this.oauthService.execute();
        }
    }

angular.module('twClientApp')
  .component('login', {
      templateUrl: 'components/login/login.html',
      controller: LoginController,
      bindings: {}
    });
}
    