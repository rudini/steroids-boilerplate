declare var steroids: sd.ISteroidsStatic;

declare namespace sd {

    interface ISteroidsStatic {
        view: IView,
        logger: ILogger
    }

    interface ILogger {
        log: (message: string) => void
    }

    interface IView {
        params: sd.IParams
    }

    interface IParams {
        id: any
    }
}