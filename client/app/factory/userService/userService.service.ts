/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class UserController {
    constructor() {
    }
  }

  angular.module('twClientApp')
    .factory('userService', [
      ()=>{ return new UserController() }] );
}



