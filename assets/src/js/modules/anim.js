import anime from 'animejs/lib/anime.es.js';
import Splitting from "splitting";
Splitting();

class Anim {
    constructor() {
        console.log('dddd')

    }
    init() {
        this.dom = {
            elements: document.querySelectorAll('[data-anim]'),
            window_height: window.innerHeight
        };
        this.initAnimElmt();
    }

    initAnimElmt() {
        if (!this.dom.elements) return;
        let _this = this;
        [...this.dom.elements].forEach((el) => {
            el.animated = false;
            el.delay = el.getAttribute('data-anim-delay') ? el.getAttribute('data-anim-delay') : 100;
            el.anim = el.getAttribute('data-anim') ? el.getAttribute('data-anim') : 'up';
            el.val = el.getAttribute('data-anim-val') ? el.getAttribute('data-anim-val') : '100%';

            let observer;

            let options = {
                root: null,
                rootMargin: "0px"
            };

            observer = new IntersectionObserver(_this.animate, options);
            observer.observe(el);

        })
        this.animate();
    }

    animate(entries, observer) {
        if (entries) entries.forEach((entry) => {
            let el = entry.target;
            if (el && entry.isIntersecting && !el.animated) {
                el.style.opacity = "0";
                if (el.anim == 'up' || el.anim == 'fadeUp') {
                    anime({
                        targets: el,
                        duration: 1200,
                        opacity: [0, 1],
                        translateY: [el.val, 0],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });
                }

                if (el.anim == 'down' || el.anim == 'fadeDown') {

                    anime({
                        targets: el,
                        duration: 1200,
                        opacity: [0, 1],
                        translateY: [-50, 0],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });
                }
                if (el.anim == 'left') {
                    anime({
                        targets: el,
                        duration: 2000,
                        opacity: [0, 1],
                        translateX: [el.val, 0],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });

                }
                if (el.anim == 'right') {
                    console.log('right')
                    anime({
                        targets: el,
                        duration: 1800,
                        opacity: [0, 1],
                        translateX: [-el.val, 0],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });

                }

                if (el.anim == 'fade') {

                    anime({
                        targets: el,
                        duration: 2000,
                        opacity: [0, 1],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });

                }

                if (el.anim == 'scale') {
                    anime({
                        targets: el,
                        duration: 2000,
                        opacity: [0, 1],
                        scale: [1.5, 1],
                        easing: "cubicBezier(0,1,.3,1)",
                        delay: el.delay
                    });
                }

                el.animated = true;
            }
        });
    }





}

export default Anim;



