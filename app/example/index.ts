import {LearnMoreController} from './scripts/LearnMoreController'
import {SettingsController} from './scripts/SettingsController'

var app = angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic'
])

app.controller('LearnMoreController', LearnMoreController)
app.controller('SettingsController', SettingsController)