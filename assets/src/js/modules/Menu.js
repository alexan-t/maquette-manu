import { module as moduleJs } from 'modujs';
export default class extends moduleJs {
    constructor(m) {
        super(m);
        this.events = {
            click: {
                btnopen: 'toggleMenu'
            }
        }
        this.isOpen = false
    }
    init() {
        let _this = this;
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && _this.el.classList.contains('is-open'))
                _this.closeMenu();
        });

    }

    toggleMenu(e) {
        this.isOpen ? this.closeMenu() : this.openMenu();
        this.call('gototop', "", 'Page');

    }

    openMenu() {
        this.$('btnopen')[0].setAttribute('aria-expanded', true);
        this.el.classList.add('is-open');
        document.body.style.overflowY = "hidden";
        this.isOpen = true;
    }

    closeMenu() {
        this.$('btnopen')[0].setAttribute('aria-expanded', false);
        this.el.classList.remove('is-open');
        document.body.style.overflowY = "visible";
        this.isOpen = false;
    }

    
}
