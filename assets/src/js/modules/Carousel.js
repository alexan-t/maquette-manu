import { module as moduleJs } from 'modujs';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default class extends moduleJs {
    constructor(m) {
        super(m);


    }
    init() {
        let hasarrow = this.getData('arrow') ? true : false;
        let slidetype = this.getData('loop') ? 'loop' : 'slides';
        let dragtype = this.getData('dragfree') ? 'free' : true;
        this.option = {
            type: slidetype, pagination: false, arrows: hasarrow, autoWidth: false, lazyLoad: 'nearby', drag: dragtype, autoScroll: {
                speed: 1,
            }
        };
        if (window.screen.width >= 1024) this.option.autoWidth = true;
        let optionPages = this.getData('perpage');
        let autoplay = this.getData('autoplay') ?? false;
        if (optionPages) {
            this.option.perPage = Number(optionPages);
            this.option.autoWidth = false;
        }


        if (autoplay) {
            this.option.autoplay = 'play';
            this.option.type = 'fade';
            this.option.rewind = true,
                this.option.interval = '3000'
        }

        this.autoscroll = this.getData('autoscroll') ? { AutoScroll } : {}

        this.option.i18n = {
            prev: 'Diapositive précédente',
            next: 'Diapositive suivante',
            slideLabel: '%s sur %s',
            slide: 'diapositive'
        };
        this.mountSlider();
    }

    mountSlider() {

        this.splide_diapo = new Splide(this.el.querySelector('.splide'), this.option).mount(this.autoscroll);
    }


}