export interface IModule extends ng.IModule {
  component: (options: ng.IComponentOptions) => ng.IModule
}

// replace angular.module
let moduleFunction = angular.module
angular.module = (name: string, requires?: string[], configFn?: Function) => {
  let module = <IModule>moduleFunction(name, requires, configFn)
  let registerComponent: (name: string, options: ng.IComponentOptions) => ng.IModule = module.component;
  module.component = (component: IComponent) => {
    return registerComponent(component.selector, <ng.IComponentOptions>component)
  }
  return module;
}

export interface IComponent extends ng.IComponentOptions {
  selector: string
}

export const Component = function (options: IComponent): Function {
  return (controller: Function) => {
    return _.assign(options, { controller }, { selector: _.camelCase(options.selector) })
  }
}