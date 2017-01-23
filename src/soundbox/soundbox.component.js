class SoundBoxController {
    constructor() {}

    $onInit() {
        this.sounds = [
            { url: 'http://darkadia-studio.com/ddn/10.mp3', title: 'Pub masse paf 1', miniature:'' },
            { url: 'http://darkadia-studio.com/ddn/3.mp3', title: 'Pub chiantos', miniature:''  },
            { url: 'http://darkadia-studio.com/ddn/4.mp3', title: 'Pub crevetola', miniature:''  }
        ];
    }

    saveSound(sound){
        this.sounds.push(sound);
    }

    delete(sound) {
        this.sounds = this.sounds.filter(s => s !== sound);
    }
}

export const SoundBox = {
    template: require('./soundbox.html'),
    controller: SoundBoxController
}