'use strict';

class OauthController {
  constructor(APP_CONF, $state) {
    this.APP_CONF = APP_CONF;
    this.state = $state;
  }

  execute() {
      OAuth.initialize(this.APP_CONF.oauthServiceId);
      OAuth.popup('twitter').done((result)=>{
        console.log(result);
        this.state.go('index');
        // do some stuff with result
    });
  };
}

angular.module('twClientApp')
  .factory('oauthService', ['appConfig','$state',
      (APP_CONF, $state) => { return new OauthController(APP_CONF, $state); }]);
