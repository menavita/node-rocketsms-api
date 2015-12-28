var expect = require('expect.js'),
    nodeRocketsmsApi = require('..');

describe('node-rocketsms-api', function() {
  it('should say hello', function(done) {
    expect(nodeRocketsmsApi()).to.equal('Hello, world');
    done();
  });
});
