/// <reference path="../../../typings/tsd.d.ts"/>

namespace twClientApp {

  'use strict';

  export class User {

    private user_id;
    private screen_name;
    private o_auth_token;

    constructor() {
    }

    public getUserId():string {
      return this.user_id;
    }

    public getScreenName():string {
      return this.screen_name;
    }

    public getOAuthToken():string {
      return this.screen_name;
    }

    public setUserId(user_id) {
      this.user_id = user_id;
    }

    public setScreenName(screen_name) {
      this.screen_name = screen_name;
    }

    public setOAuthToken(o_auth_token) {
      this.o_auth_token = o_auth_token;
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
