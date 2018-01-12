var request = require('request');
var translit = require('translit-be2ascii');
var Q = require('q');
var crypto = require('crypto');

function RocketSMS(credential) {
  // Сохраняем реквизиты для авторизации
  this.credential = credential;
}

RocketSMS.prototype.send = function(phone, text, latin) {
  var d = Q.defer();

  var message = {
    username: this.credential.username,
    password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
    phone: phone,
    text: latin ? translit.toASCII(text) : text,
  };

  request.post({
    url: 'https://api.rocketsms.by/simple/send',
    form: message,
  }, function (err, res, body) {
    if (err) d.reject(err);

    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  });

  return d.promise;
};

RocketSMS.prototype.status = function(id) {
  var d = Q.defer();

  request.get({
    url: 'https://api.rocketsms.by/simple/status',
    qs: {
      id: id,
      username: this.credential.username,
      password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
    },
  }, function (err, res, body) {
    if (err) d.reject(err);

    console.log(body);
    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  });

  return d.promise;
};

RocketSMS.prototype.balance = function() {
  var d = Q.defer();

  request.get({
    url: 'https://api.rocketsms.by/simple/balance',
    qs: {
      username: this.credential.username,
      password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
    }
  }, function (err, res, body) {
    if (err) d.reject(err);
    console.log(body);

    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  })

  return d.promise;
}

RocketSMS.prototype.senders = function() {
  var d = Q.defer();

  request.get({
    url: 'http://api.rocketsms.by/simple/senders',
    qs: {
      username: this.credential.username,
      password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
    }
  }, function (err, res, body) {
    if (err) d.reject(err);

    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  })

  return d.promise;
}

RocketSMS.prototype.addSender = function(sender) {
  var d = Q.defer();

  reuest.post({
    url: 'https://api.rocketsms.by/simple/senders/add',
    form: {
      username: this.credential.username,
      password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
      sender: sender,
    }
  }, function (err, res, body) {
    if (err) d.reject(err);

    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  })

  return d.promise;
}

RocketSMS.prototype.templates = function() {
  var d = Q.defer();

  request.get({
    url: 'https://api.rocketsms.by/simple/templates',
    qs: {
      username: this.credential.username,
      password: crypto.createHash('md5').update(this.credential.password).digest('hex'),
    }
  }, function (err, res, body) {
    if (err) return d.reject(err);

    var parsed = JSON.parse(body);

    if (!parsed.error) {
      d.resolve(parsed);
    } else {
      d.reject(parsed);
    }
  })

  return d.promise;
}

module.exports = RocketSMS;
