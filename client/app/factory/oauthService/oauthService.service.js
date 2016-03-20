'use strict';

class OauthController {
  constructor(APP_CONF) {
    this.APP_CONF = APP_CONF;
  }

  execute (){
      OAuth.initialize(this.APP_CONF.oauthServiceId);
      OAuth.popup('twitter').done(function (result) {
        console.log(result);
        // do some stuff with result
    });
  };
}

angular.module('twClientApp')
  .factory('oauthService', ['appConfig',
      (APP_CONF) => { return new OauthController(APP_CONF); }]);
