import angular from 'angular';
import ngRoute from 'angular-route';
import rating from 'angular-ui-bootstrap/src/rating';

import { EldestFilter } from './eldest.filter';
import { UsersController } from './users.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DtaGravatar } from './dta-gravatar/dta-gravatar.component';
import { DtaUser } from './dta-user/dta-user.component';

export default angular.module('UserModule', [
    ngRoute, rating
])

.controller('UsersController', UsersController)
.controller('UserController', UserController)

.filter('eldest', EldestFilter)

.service('UserService', UserService)

.component('dtaGravatar', DtaGravatar)
.component('dtaUser', DtaUser)

.config(function($routeProvider, $locationProvider){

    $routeProvider
    .when('/users', {
      template: require('./users.html'),
      controller: 'UsersController',
      controllerAs: 'ctrl'
    })
    .when('/user/:id?', {
      template: require('./user.html'),
      controller: 'UserController',
      controllerAs: 'ctrl'
    });

})
.name;