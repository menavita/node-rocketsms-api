# node-rocketsms-api

RocketSMS sms-gateway API.

[![build status](https://secure.travis-ci.org/staronka/node-rocketsms-api.png)](http://travis-ci.org/staronka/node-rocketsms-api)

## Installation

This module is installed via npm:

``` bash
$ npm install node-rocketsms-api
```

## Example Usage
```js
var RocketSMS = require('node-rocketsms-api');

var sms = new RocketSMS({username: '999999999', password: 'XXXXXXXX'});
```
### Create message
``` js
sms.send('375999999999', 'Привет, мир!', true)
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  };
```
### Message status
```js
sms.status(34305153)
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  })
```
### Account balance
```js
sms.balance()
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  })
```
### Alfa-numbers list
```js
sms.senders()
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  })
```
### Add alfa-number
```js
sms.addSender('99999999999')
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  })
```
### Templates list
```js
sms.templates()
  .then(function(res) {
    ...
  })
  .catch(function(err) {
    ...
  })
```
## License
3-clause BSD © [Egor Kuryanovich](http://sontan.name/)