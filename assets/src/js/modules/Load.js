import { module as moduleJs } from 'modujs';
import modularLoad from 'modularload';


export default class extends moduleJs {
    constructor(m) {
        super(m);
    }

    init() {
        const load = new modularLoad({
            enterDelay: 0,
        });

        load.on('loading', (transition, oldContainer) => {
            this.call('closeMenu', "", 'Menu');
            this.call('stopScroll', oldContainer, 'Page');
            


        });

        load.on('loaded', (transition, oldContainer, newContainer) => {

            this.call('destroy', oldContainer, 'app');
            this.call('update', newContainer, 'app');
            
            //
        });
    }
}