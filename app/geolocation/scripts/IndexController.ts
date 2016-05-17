export class IndexController {

  position: sc.IPosition;
  getPosition: () => void

  /* @ngInject */
  constructor(supersonic: supersonic) {
    var ctrl = this;

    ctrl.position = undefined;

    ctrl.getPosition = () => {
      //supersonic.ui.dialog.alert("Interstellar!");
      supersonic.device.geolocation.getPosition().then((position: sc.IPosition) =>
        ctrl.position = position)
    }
  }
}