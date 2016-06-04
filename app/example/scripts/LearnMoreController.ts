declare var cordova: any

export class LearnMoreController {

  navbarTitle: string

  /* @ngInject */
  constructor(supersonic: supersonic) {
    let ctrl = this;
    ctrl.navbarTitle = "Learn a lot More"

    supersonic.device.ready.then(() => {
      alert('Try getting phone number')

      let telephoneNumber = cordova.require('cordova/plugin/telephonenumber')
      telephoneNumber.get((result: any) => {
        alert('tel result = ' + result)
        return
      }, () => {
        alert('error - cant get phone number')
        return
      })
    })
  }
}