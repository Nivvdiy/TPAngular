import md5 from 'md5';

class DtaGravatarController{
    constructor(){}

    $onChanges(){
        this.md5 = md5(this.email);
    }

    highlight(){
        this.highlighted = !this.highlighted;
    }

    deact(){
        this.onDeactivate();
    }
}

export const DtaGravatar = {
    bindings : {
        email: '<',
        onDeactivate: '&'
    },
    
    template: require('./dta-gravatar.component.html'),
    controller: DtaGravatarController
};