import angular from 'angular';
import ngRoute from 'angular-route';

import UserModule from './user';
import SoundBox from './soundbox';

import { ExclamationFilter } from './exclamation.filter';

angular.module('app', [
  ngRoute,
  UserModule,
  SoundBox
])
.filter('exclamation', ExclamationFilter)
.value('Version', '1.0.0')

.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      template: '<h1>Bienvenue {{ ctrl.name }}</h1>',
      controller: function () {
        this.name = 'Nivvdiy';
      },
      controllerAs: 'ctrl'
    })
    .when('/about', {
      template: '<h1>About</h1>'
    })

    .otherwise('/');

})

.run(function() {
  console.log('PizzaYOLO !');
});