'use strict';

describe('Service: testService', function () {

  // load the service's module
  beforeEach(module('twClientApp'));

  // instantiate service
  var testService;
  beforeEach(inject(function (_testService_) {
    testService = _testService_;
  }));

  it('should do something', ()=>{
    expect(1).toBe(1);
  });

  it('should get serviceId', function(){
    expect(testService.getOauthIoServiceId()).toBe("6OFU2066w0wF8Nwh2i9-5k1GZ6o");
  });

});

