import {Component} from '../../decorators';

@Component({
  controllerAs: 'ctrl',
  template: `
    <pre>{{ctrl}}</pre>
    <div>
      <input type="text" ng-model="ctrl.count">
      <button type="button" ng-click="ctrl.decrement();">-</button>
      <button type="button" ng-click="ctrl.increment();">+</button>
    </div>
  `
})
export class CounterTest {
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}