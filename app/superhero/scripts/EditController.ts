export class EditController {

  superhero: any
  showSpinner: boolean
  submitForm: () => void
  cancel: () => void

  /* @ngInject */
  constructor($scope: ng.IScope, Superhero: any, supersonic: supersonic) {

    let ctrl = this

    ctrl.superhero = null
    ctrl.showSpinner = true

    // Fetch an object based on id from the database
    Superhero.find(steroids.view.params.id).then((superhero: any) => {
      $scope.$apply(() => {
        ctrl.superhero = superhero
        ctrl.showSpinner = false
      })
    })

    ctrl.submitForm = () => {
      ctrl.showSpinner = true
      ctrl.superhero.save().then(() => {
        supersonic.ui.modal.hide()
      })
    }

    ctrl.cancel = () => {
      supersonic.ui.modal.hide()
    }
  }
}