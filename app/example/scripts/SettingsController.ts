// angular
//   .module('example')
//   .controller('SettingsController', function($scope, supersonic) {
//     $scope.navbarTitle = "Settings";
//   });

export class SettingsController {
  
  /* @ngInject */
  constructor($scope: Navbar, supersonic: supersonic) {
    $scope.navbarTitle = "Settings and more..."
  }
}