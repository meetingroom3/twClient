/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class userController {
    static $inject = ['appConfig'];
    constructor(public APP_CONF) {
    }

    public getOauthIoServiceId():string {
      return this.APP_CONF.oauthServiceId;
    }
  }

  angular.module('twClientApp')
    .factory('testService', [
      'appConfig',
      (APP_CONF)=>{ return new UserController(APP_CONF) }] );
}



