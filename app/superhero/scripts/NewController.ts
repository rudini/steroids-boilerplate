export class NewController {

  superhero: any
  submitForm: () => void
  showSpinner: boolean
  newsuperhero: any
  cancel: () => void

  /* @ngInject */
  constructor(Superhero: any, supersonic: supersonic) {

    let ctrl = this

    ctrl.superhero = {}

    ctrl.submitForm = () => {
      ctrl.showSpinner = true
      let newsuperhero = new Superhero(ctrl.superhero)
      newsuperhero.save().then(() => {
        supersonic.ui.modal.hide()
      })
    }

    ctrl.cancel = () => supersonic.ui.modal.hide()
  }
} 