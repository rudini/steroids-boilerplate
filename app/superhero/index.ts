import {EditController} from './scripts/EditController'
import {IndexController} from './scripts/IndexController'
import {NewController} from './scripts/NewController'
import {ShowController} from './scripts/ShowController'

import {Superhero} from './scripts/SuperheroModel'

var app = angular.module('superhero', [
  /* Declare any module-specific dependencies here */
  'common'
]);

app.controller('EditController', EditController)
app.controller('IndexController', IndexController)
app.controller('NewController', NewController)
app.controller('ShowController', ShowController)

app.constant('Superhero', Superhero)