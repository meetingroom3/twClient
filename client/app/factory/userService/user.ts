/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class User {

    private user_id;
    private screen_name;
    private o_auth_token;

    constructor() {
    }
  }

  angular.module('twClientApp')
  .factory(
    'user', [
      ()=>{
        return new User()
      }
    ]
  );
}
