(function(angular, undefined) {
'use strict';

angular.module('twClientApp.messages', [])
  .constant('messageConfig', {
    login: 'hello',
    logout: 'bye bye'
  });
})(angular);
