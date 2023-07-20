import '../scss/style.scss';
import modular from 'modujs';
import * as modules from './modules';

const html = document.documentElement;
const app = new modular({
    modules: modules
});

window.onload = (event) => {
    sign();
    init();
   
    //initAnimations();
};

function init() {
    html.classList.add('is-loaded');
    html.classList.add('is-ready');
    html.classList.add('is-started');
    app.init(app);
   
}


/////////  LOG
function sign() {
    console.log('%c Made by Clair et Net. / Paris ', 'background: #ff5d00; color: #FFF;font-weight: 500;padding: 5px;');
    console.log('%c http://www.clair-et-net.com', 'color: #ff5d00;font-weight: 500;');
}



