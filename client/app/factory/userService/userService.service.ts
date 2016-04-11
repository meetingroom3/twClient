/// <reference path="../../../typings/tsd.d.ts"/>
/// <reference path="user.ts"/>

namespace twClientApp {

  'use strict';

  export class UserService {
    static $inject = ['user'];
    // private user;
    constructor(public user:User) {
      // this.user = user;
    };

    public getUser() {
      if (localStorage.getItem("user_id") != null) {
        this.user.setUserId(localStorage.getItem("user_id"));
        this.user.setScreenName(localStorage.getItem("screen_name"));
        this.user.setOAuthToken(localStorage.getItem("o_auth_token"));
      }
      return this.user;
    };

    public setUser(user:User) {
      localStorage.setItem("user_id", this.user.getUserId());
      localStorage.setItem("screen_name", this.user.getScreenName());
      localStorage.setItem("o_auth_token", this.user.getOAuthToken());
    };
  }


  angular.module('twClientApp').factory(
    'userService',
    (user)=>{
      return new UserService(user)
    }
  );
}
