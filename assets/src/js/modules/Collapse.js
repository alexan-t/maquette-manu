import { module as moduleJs } from 'modujs';
import { gsap, Power3 } from 'gsap';
export default class extends moduleJs {
    constructor(m) {
        super(m);

        this.events = {
            click: {
                btncollapse: 'toggleSection'
            }
        }
    }

    init() {
        let main = document.querySelector('#collapse-1');
        let selectedMain = document.querySelector('[data-collapseid="1"]');
        main.classList.add('is-open')
        selectedMain.classList.add('selected')
    }



    toggleSection(e) {
        const target = e.currentTarget;
        const id = target.dataset.collapseid;
        const next = document.getElementById('collapse-' + id);
        const selected = document.querySelector(`[data-collapseid="${id}"]`)
        const openEls = document.querySelectorAll('.collapse-item.is-open, .collapse-body.is-open');
        const selectEls = document.querySelectorAll('.selected');

        openEls.forEach(el => {
            el.classList.remove('is-open');
            el.setAttribute('aria-expanded', false);
        });
        selectEls.forEach(elem => {
            elem.classList.remove('selected');
            elem.setAttribute('aria-expanded', false);
        });
        this.$('main .is-open').forEach(el => {
            console.log(el)
            el.classList.remove('is-open');
            el.setAttribute('aria-expanded', false)
        });
        this.$('ul .is-open').forEach(el => {
            el.classList.remove('is-open');
            el.setAttribute('aria-expanded', false);
        }, 1000);

        selected.classList.add('selected');
        next.classList.add('is-open');
        target.classList.add('is-open');
        target.setAttribute('aria-expanded', true);
        
        this.animChildren(next)
        //next.addEventListener(fadeOutEffect);
    }

    animChildren(el) {
        let maincontent = el.querySelector('.collapse-inner');
        console.log(maincontent.children)

        gsap.fromTo(maincontent.children, {
            'will-change': 'opacity, transform',
            opacity: 0,
            y: 200,
            },{
                opacity: 1,
                y: 0,
                delay:.1,
                stagger: .1,
                easing: Power3.easeInOut,
        });
    }

}
