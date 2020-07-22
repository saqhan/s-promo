import { r as registerInstance, h } from './index-8eb9d8b9.js';

const header = {
    stickyTop: [
        {
            id: 'about-me',
            name: 'Обо мне',
        },
        {
            id: 'reviews',
            name: 'Отзывы',
        },
        {
            id: 'portfoloi',
            name: 'Портфолио',
        },
        {
            id: 'contacts',
            name: 'Контакты',
        }
    ],
    headerTitle: 'Профессиональная разработка сайтов',
    headerBtnTitle: 'отправить завку',
    logoMain: 'http://saqhan.ru/img/logo.png'
};

const myComponentCss = ".sc-my-component-h{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, h("cnt-flexy-view-saqhan-promo-header-1_01", { payload: header }));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
