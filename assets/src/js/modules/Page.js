import {
    module as moduleJs
} from 'modujs';
import Splitting from "splitting";
import {
    gsap,
    Power3
} from 'gsap';
import ScrollAnim from './scrollanim';
export default class extends moduleJs {
    constructor(m) {
        super(m);
        Splitting();
        this.lead = document.querySelector('.background-text');
        this.menu = document.querySelector('.menu');
        this.backgroundImg = this.el.querySelector('.background img');
        this.background = this.el.querySelector('.preview-img');
    }

    init() {
        this.scrollanim = new ScrollAnim();

        if (this.background) {
            gsap.fromTo(this.background, {
                'will-change': ' opacity',
                opacity: 1,
            }, {
                opacity: 1,
                duration: 2,
                ease: Power3.easeOut,
            });
        }

        if (this.backgroundImg) {
            gsap.fromTo(this.backgroundImg, {
                'will-change': 'opacity',
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                ease: Power3.easeIn,
            });
        }

        if (this.menu) {
            gsap.fromTo(
                this.menu, {
                    'will-change': 'opacity',
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: Power3.easeIn
                }
            );
        }



        if (this.lead) {
            gsap.fromTo(
                this.lead, {
                    'will-change': 'opacity transform',
                    opacity: 0,
                    y: 50,
                }, {
                    y: 0,
                    opacity: 1,
                    delay: .8,
                    duration: 1.2,
                    ease: Power3.easeOut
                }
            );
        }




        //     if (this.backgroundKeys.length>0) gsap.fromTo((this.backgroundKeys), {
        //         'will-change': 'opacity transform',
        //         opacity: 0,
        //         y: 40,
        //         rotation: 3,
        //     },
        //         {
        //             opacity: 0.7,
        //             delay: .8,
        //             rotation: 0,
        //             y: 0,
        //             stagger: 0.3,
        //             duration: 1,
        //             ease: 'power4',
        //         });
    }

    onLeave() {
        this.gototop()
        setTimeout(() => {
            if (this.background) {
                gsap.to(this.background, {
                    y: -700,
                    x: -10,
                    opacity: 1,
                    rotation: -3,
                    duration: 0.8,
                    ease: Power3.easeOut,

                });
                gsap.to(this.backgroundText, {
                    opacity: 0,
                    y: 10
                });
            }

            if (this.backgroundImg) {
                gsap.to(this.backgroundImg, {
                    y: -700,
                    x: -10,
                    opacity: 0,
                    rotation: -3,
                    duration: 0.8,
                    ease: Power3.easeOut,

                });
                gsap.to(this.backgroundText, {
                    opacity: 0,
                    y: 10
                });
            }

            if (this.lead) {
                gsap.to(
                    this.lead, {
                        'will-change': 'opacity transform',
                        opacity: 0,
                        y: 50,
                    }
                );
            }

        }, 1000);
    }

    stopScroll() {
        this.scrollanim.lenis.stop()
    }

    startScroll() {
        this.scrollanim.lenis.start()
    }


    gototop() {
        this.scrollanim.lenis.scrollTo('top', {
            immediate: true
        })
    }
}