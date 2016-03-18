/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class OauthController {
    static $inject = ['appConfig'];
    constructor(public APP_CONF) {
      console.log(APP_CONF.oauthServiceId);
    }
  }

  angular.module('twClientApp')
    .factory('oauthService', [
      'appConfig',
      (APP_CONF)=>{ return new OauthController(APP_CONF) }] );
}



