export const Component = function(options: ng.IComponentOptions): Function {
  return (controller: Function) => {    
    return _.assign(options, {controller}, selector: _.camelCase(options.selector))
  }
}