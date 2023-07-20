import { module as moduleJs } from 'modujs';

export default class extends moduleJs {
    constructor(m) {
        super(m);
        this.events = {
            click: 'closeIt'
        }
    }

    init() {
        console.log()
        const _this = this;
        const btns = document.querySelectorAll('.sidedrawercall');
        [...btns].forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.openIt(el.dataset.cnt);

            });
        });
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && _this.el.classList.contains('is-open'))
                _this.el.classList.remove('is-open');
            document.body.style.overflow = "visible";
        });
    }

    openIt(cnt) {
        this.$('cnt')[0].innerHTML = decodeURIComponent((cnt + '')
            .replace(/%(?![\da-f]{2})/gi, function () {
                return '%25'
            })
            .replace(/\+/g, '%20'));
        this.el.classList.add('is-open');
        document.body.style.overflow = "hidden";
        this.call('stopScroll', "", 'Page');
    }

    closeIt(event) {
        if (!event.target.closest('.sidedrawer-close') && !event.target.classList.contains('sidedrawer')) return;
        this.el.classList.remove('is-open');
        document.body.style.overflow = "visible";
        this.call('startScroll', "", 'Page');

    }


}