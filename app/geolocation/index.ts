import {IndexController} from './scripts/IndexController'

var app = angular.module('geolocation', [
  // Declare any module-specific AngularJS dependencies here
  'common'
]);

app.controller('IndexController', IndexController)
