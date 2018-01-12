var mocha = require('mocha');
var should = require('should');
var RocketSMS = require('..');

var sms = new RocketSMS({ username: 'username', password: 'password' });

describe('RocketSMS', function() {
  it('should send message', function() {
    return sms.send('375299999999', 'Привет, тестовая смска', false)
      .then(function(res) {
        console.log(res);
        res.should.have.property('id');
        res.should.have.property('status');
        res.should.have.property('cost');
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });

  it('should return message status', function() {
    return sms.status(34305153)
      .then(function(res) {
        console.log(res);
        res.should.have.property('id');
        res.should.have.property('status');
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });

  it('should return balance', function() {
    return sms.balance()
      .then(function(res) {
        console.log(res);
        res.should.have.property('credits');
        res.should.have.property('balance');
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });

  it('should return senders', function() {
    return sms.senders()
      .then(function(res) {
        console.log(res);
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });

  it('should add new sender', function() {
    return sms.addSender('testsender')
      .then(function(res) {
        console.log(res);
        res.should.have.property('status', 'OK');
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });

  it('should return templates', function() {
    return sms.templates()
      .then(function(res) {
        console.log(res);
      })
      .catch(function(e) {
        console.log(e);
        throw new Error(e);
      });
  });
});
