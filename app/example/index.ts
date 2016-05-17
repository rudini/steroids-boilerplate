import {LearnMoreController} from './scripts/LearnMoreController'
import {SettingsController} from './scripts/SettingsController'
import {CounterTest} from './scripts/CounterComponent'

var app = angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic'
])

app.config(['$compileProvider', function ($compileProvider: ng.ICompileProvider) {
  $compileProvider.debugInfoEnabled(false);
}])

app.controller('LearnMoreController', LearnMoreController)
app.controller('SettingsController', SettingsController)
app.component('testComponent', CounterTest)