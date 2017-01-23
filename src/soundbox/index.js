import angular from 'angular';

import { SoundButton } from './sound-button/sound-button.component';
import { SoundBox } from './soundbox.component';
import { SoundForm } from './sound-form/sound-form.component';

export default angular.module('SoundBox', [])

.component('soundButton', SoundButton)
.component('soundForm', SoundForm)
.component('soundBox', SoundBox)

.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/sound', {
      template: `<sound-box></sound-box>`
    })

})

.name;