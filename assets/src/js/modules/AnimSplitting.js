import anime from 'animejs/lib/anime.es.js';
import Splitting from "splitting";
Splitting();

class AnimSplitting {
    init() {
        this.dom = {
            elements: document.querySelectorAll('[data-splitting]'),
            window_height: window.innerHeight
        };

        this.initAnimElmt();
    }

    initAnimElmt() {
        if (!this.dom.elements) return;

        let _this = this;
        [...this.dom.elements].forEach((el) => {
            el.animated = false;
            let observer;
            let options = {
                root: null,
                rootMargin: "0px"
            };
            // let split = Splitting({ target: el });
            // el.lines = split && split.length ? split[0].lines : "";
            // 
            observer = new IntersectionObserver(_this.animate, options);
            observer.observe(el);


        })
        this.animate();
    }

    animate(entries, observer,) {

        // if (entries) entries.forEach((entry) => {
        //     let el = entry.target;
        //     console.log('entry')
        //     if (el && entry.isIntersecting && !el.animated) {
        //         let chars = el.querySelectorAll('.char');
        //         anime({
        //             targets: chars,
        //             duration: 400,
        //             opacity: [0, 1],
        //             translateY: ['100%', 0],
        //             easing: "easeOutQuad",
        //             delay: anime.stagger(100)
        //         });
        //         el.animated = true;
        //     }
        // });
    }




}

export default AnimSplitting;



