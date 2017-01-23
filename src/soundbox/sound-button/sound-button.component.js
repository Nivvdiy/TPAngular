class SoundButtonController {
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onChanges (changes) {
        if (changes.sound && changes.sound.currentValue) {
            this.audio = new Audio(changes.sound.currentValue.url);
            this.title = changes.sound.currentValue.title;

            console.log(this.audio.ImageData);

            this.audio.onended = () => {
                this.$scope.$apply();
            }
        }
    }

    play () {
        if(this.audio.paused){
            this.audio.play();
        }
    }

    pause(){
        if(!this.audio.paused){
            this.audio.pause();
        }
    }
    
    stop(){
        if(this.audio.currentTime!==0){
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    delete(){
        this.onDelete();
    }

}

export const SoundButton = {
    bindings : {
        sound: '<',
        onDelete: '&'
    },

    template: require('./sound-button.component.html'),

    controller: SoundButtonController

};