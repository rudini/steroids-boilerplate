// angular
//   .module('example')
//   .controller('LearnMoreController', function($scope, supersonic) {

//     $scope.navbarTitle = "Learn More";

//   });

export class LearnMoreController {
  
  /* @ngInject */
  constructor($scope: Navbar, supersonic: supersonic) {
    $scope.navbarTitle = "Learn a lot More";
  }
  
}