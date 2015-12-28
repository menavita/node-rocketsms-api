'use strict';

var request  = require('request');
var translit = require('translit-be2ascii');
var deferred = require('deferred');

function RocketSMS (credential) {
  // Сохраняем реквизиты для авторизации
  this.credential = credential;
}

RocketSMS.prototype.send = function(phone, text, latin, cb)
{
  var message = {
    username: this.credential.username,
    password: this.credential.password,
    phone: phone,
    text: latin ? translit.toASCII(text) : text
  };

  if(!cb) var d = deferred();
  var req = request.post({url:'http://api.rocketsms.by/json/send', form: message}, function(err, res, body) {
    if (err) console.log('Error:' + err);
    
    console.log(body);
    if (body) console.log(JSON.parse(body));

    if (d) return err ? d.reject(err) : d.resolve({res: res, body: body});
    if (cb) return cb.call(null, err, body);
    return null;
  });

  return d ? d.promise : req;
};


module.exports = RocketSMS;