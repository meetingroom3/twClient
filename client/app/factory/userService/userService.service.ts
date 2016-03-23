/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class UserController {
    static $inject = ['appConfig'];
    constructor(public APP_CONF) {
    }

    public getUserServiceId():string {
      return this.APP_CONF.userServiceId;
    }
  }

  angular.module('twClientApp')
    .factory('userService', [
      'appConfig',
      (APP_CONF)=>{ return new UserController(APP_CONF) }] );
}



