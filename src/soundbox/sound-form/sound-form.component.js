class SoundFormController {
    constructor () {}

    submit(form, sound){
        console.log(sound);
        if (form.$invalid) return;
        if(sound.name === '' || sound.name === null){
            sound.name = sound.url;
        }
        this.onSubmit({
            $event: sound
        });
    }

}

export const SoundForm = {
    bindings : {
        sound: '<',
        onSubmit: '&'
    },

    template: require('./sound-form.component.html'),

    controller: SoundFormController

};