import Lenis from '@studio-freight/lenis';
import {
    gsap
} from 'gsap';
import {
    ScrollTrigger
} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class ScrollAnim {
    constructor() {

        this.lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true
        });
        // let btnmenu = document.querySelector('.menu-toggle');
        // this.lenis.on('scroll', (e) => {
        //     if (e.animatedScroll > 100) {
        //         btnmenu.classList.add('is-fixed')
        //     } else {
        //         btnmenu.classList.remove('is-fixed')
        //     }
        //     ScrollTrigger.update();
        // });
        let _this = this;
        const scrollFn = (time) => {
            _this.lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

        this.init();

        if (window.location.hash) {
            _this.lenis.scrollTo(window.location.hash);
        } else {
            _this.lenis.scrollTo('top', {
                immediate: true
            });
        }

    }

    init() {
        this.animMenu();
        this.animParallax();
        this.animScroll();
        this.animScrollText();
        this.bgParralax();
    }


    animMenu() {
        const btnOFF = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        btnOFF.addEventListener('click', function () {
            gsap.fromTo(menu, {
                'will-change': 'opacity transform',
                y: -50,
                opacity: 0,
            }, {
                ease: 'none',
                y: 0,
                opacity: 1,
                duration: 0.3,
            });
        });
    }

    bgParralax() {
        const parralaxBgs = document.querySelectorAll('[data-bg-parallax]');
        parralaxBgs.forEach(parallaxBg => {
            if (parallaxBg) {
                gsap.set(parallaxBg, {
                    y: 100
                });
                gsap.to(parallaxBg, {
                    y: -90,
                    scrollTrigger: {
                        scrub: true,
                        trigger: parallaxBg,
                    }
                })
            }
        });
    }

    animParallax() {
        let parallaxEls = document.querySelectorAll('[data-anim-parallax]');
        parallaxEls.forEach(parallaxEl => {
            if (parallaxEl) {
                gsap.set("[data-anim-parallax]", {
                    y: '100'
                });
                gsap.to('[data-anim-parallax]', {
                    y: '-20%',
                    scrollTrigger: {
                        scrub: true,
                        trigger: '.home-media',
                    }
                })
            }
        });
    }


    animScroll() {
        const elements = document.querySelectorAll('[data-anim]');

        elements.forEach(element => {
            const animType = element.getAttribute('data-anim');

            switch (animType) {
                case 'fadeup':
                    gsap.fromTo(element, {
                        'will-change': 'opacity, transform',
                        opacity: .7,
                        y: 200,
                    }, {
                        opacity: 1,
                        y: 0,
                        stagger: .1,
                        scrollTrigger: {
                            scrub: true,
                            trigger: element,
                            // markers: true,
                            start: 'top bottom',
                            end: 'top center',
                        }
                    });
                    break;
                case 'section-selected':
                    gsap.fromTo(element, {
                        'will-change': 'opacity',
                        color: "rgb(255 255 255)",
                        opacity: 0.7,
                    }, {
                        color: "var(--color-primary)",
                        opacity: 1,
                        scrollTrigger: {
                            scrub: true,
                            trigger: element,
                            //markers: true,
                            start: 'top 70%',
                            end: 'top 30%',
                        }
                    });
                    break;
                case 'fade':
                    gsap.fromTo(element, {
                        'will-change': 'opacity',
                        opacity: 0,
                    }, {
                        opacity: 1,
                        scrollTrigger: {
                            scrub: true,
                            trigger: element,
                            //markers: true,
                            start: 'top bottom',
                            end: 'top center',
                        }
                    });
                    break;
                default:
                    break;
            }
        });
    }



    animScrollText() {
        const animText1 = [...document.querySelectorAll('[data-anim-text-1]')];
        if (animText1) animText1.forEach(title => {
            const chars = title.querySelectorAll('.char');
            chars.forEach(char => gsap.set(char.parentNode, {
                perspective: 1000
            }));
            gsap.fromTo(chars, {
                'will-change': 'opacity, transform',
                opacity: 0
            }, {
                ease: 'none',
                opacity: 1,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: true,
                }
            });
        });

        ////// Titre h2
        const animText2 = [...document.querySelectorAll('[data-anim-text-2]')];
        if (animText2) animText2.forEach(title => {
            const chars = title.querySelectorAll('.word');
            chars.forEach(char => gsap.set(char.parentNode, {
                perspective: 1000
            }));
            gsap.fromTo(chars, {
                'will-change': 'opacity transform',
                opacity: 0,
                y: 100,
                rotationZ: 40
            }, {
                ease: 'none',
                opacity: 1,
                y: 0,
                rotation: 0,
                stagger: 0.03,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: true,
                    marker: true,
                }
            });
        });
    }
}




export default ScrollAnim;