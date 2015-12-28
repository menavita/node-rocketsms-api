# node-rocketsms-api

RocketSMS sms-gateway API.

[![build status](https://secure.travis-ci.org/staronka/node-rocketsms-api.png)](http://travis-ci.org/staronka/node-rocketsms-api)

## Installation

This module is installed via npm:

``` bash
$ npm install node-rocketsms-api
```

## Example Usage

``` js
var RocketSMS = require('node-rocketsms-api');

var sms = new RocketSMS({username: '999999999', password: 'XXXXXXXX'});
sms.send('375999999999', 'Привет, мир!', true, function() { });
```
3-clause BSD © [Egor Kuryanovich](http://sontan.name/)