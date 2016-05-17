export class ShowController {

  superhero: any
  showSpinner: boolean
  dataId: any
  remove: (id: any) => void

  /* @ngInject */
  constructor($scope: ng.IScope, Superhero: any, supersonic: supersonic) {

    let ctrl = this

    ctrl.superhero = null
    ctrl.showSpinner = true
    ctrl.dataId = undefined

    var _refreshViewData = function () {
      Superhero.find(ctrl.dataId).then(function (superhero: any) {
        $scope.$apply(() => {
          ctrl.superhero = superhero
          ctrl.showSpinner = false
        })
      })
    }

    supersonic.ui.views.current.whenVisible(function () {
      if (ctrl.dataId) {
        _refreshViewData()
      }
    })

    supersonic.ui.views.current.params.onValue(function (values) {
      ctrl.dataId = values.id
      _refreshViewData()
    })

    ctrl.remove = function (id) {
      ctrl.showSpinner = true
      ctrl.superhero.delete().then(function () {
        supersonic.ui.layers.pop()
      })
    }
  }

}