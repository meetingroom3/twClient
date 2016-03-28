'use strict';

describe('Service: userService', function () {

  // load the service's module
  beforeEach(module('twClientApp'));

  // instantiate service
  var userService;
  beforeEach(inject(function (_userService_) {
    userService = _userService_;
  }));

  it('should do something', ()=>{
    expect(!!userService).toBe(true);
  });

});

