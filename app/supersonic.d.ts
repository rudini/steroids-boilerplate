// Declare all type definitions of steroids ambient
declare var supersonic: sc.ISupersonicStatic;


declare interface supersonic {
  logger: sc.ILogger,
  ui: sc.IUi,
  device: sc.IDevice
}

declare namespace sc {
  
  interface IData {
    model: (modelName: string) => void
  }
  
  interface ISupersonicStatic {
    data: IData
  }

  interface ILogger {
    log: (message: string) => void
  }

  interface IDialog {
    alert: (message: string) => void
  }
  
  interface IModal {
    hide: () => void
  }
  
  interface ILayers {
    pop: () => void
  }

  interface IUi {
    dialog: IDialog,
    modal: IModal,
    views: IViews,
    layers: ILayers
  }
  
  interface IParams {
    onValue: (callback: (values: any) => void) => void
  }
  
  interface IView {
    whenVisible: (callback: () => void) => void
    params: IParams
  }

  interface IViews {
    current: IView
  }

  interface IPosition {

  }

  interface IGeolocation {
    getPosition: () => ng.IPromise<IPosition>
  }

  interface IDevice {
    geolocation: IGeolocation
    ready: IReady
  }

  interface IReady {
    then: (callback: Function) => void
  }
}