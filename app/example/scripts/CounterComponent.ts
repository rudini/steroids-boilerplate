import {Component} from '../../decorators'
var counterTemplate: string = require('./CounterComponent.tpl.html');

@Component({
  controllerAs: 'ctrl',
  template: counterTemplate
  // template: `
  //   <pre>{{ctrl}}</pre>
  //   <div>
  //     <input type="text" ng-model="ctrl.count">
  //     <button type="button" ng-click="ctrl.decrement() ">-</button>
  //     <button type="button" ng-click="ctrl.increment() ">+</button>
  //   </div>
  // `
})
export class CounterTest {
  count = 0
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
}