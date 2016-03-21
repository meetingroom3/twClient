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
    expect(1).toBe(1);
  });

  it('should get serviceId', function(){
    expect(userService.getOauthIoServiceId()).toBe("6OFU2066w0wF8Nwh2i9-5k1GZ6o");
  });

});

