export class IndexController {

  superheros: any
  showSpinner: boolean

  /* @ngInject */
  constructor($scope: ng.IScope, Superhero: any, supersonic: supersonic) {

    let ctrl = this
    ctrl.superheros = null
    ctrl.showSpinner = true

    Superhero.all().whenChanged((superheros: any) => {
      $scope.$apply(() => {
        steroids.logger.log('Data loaded!')
        ctrl.superheros = superheros
        ctrl.showSpinner = false
      })
    })
  }
}