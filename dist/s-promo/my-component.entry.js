import { r as registerInstance, h } from './index-8eb9d8b9.js';

/*
 * данные для первого блока и меню
 * */
const header = {
    stickyTop: [
        {
            id: "about-me",
            name: "Обо мне",
        },
        {
            id: "reviews",
            name: "Отзывы",
        },
        {
            id: "portfoloi",
            name: "Портфолио",
        },
        {
            id: "contacts",
            name: "Контакты",
        },
    ],
    headerTitle: "Профессиональная разработка сайтов",
    headerBtnTitle: "отправить завку",
    logoMain: "http://saqhan.ru/img/logo.png",
};
/*
 * Данные для блока Обо мне
 * */
const aboutMe = {
    title: "Обо мне",
    subTitle: "познакомимся по ближе",
    aboutMe: {
        title: "Немного о себе",
        text: "Сайхан. 25 лет\n" +
            "Занимаюсь разработкой сайтов с нуля, под ключ. Специалист по CMS WordPress, OpenCart, Elgg. Выполняю верстку и программирование сайтов. Добавляю весь необходимый функционал на сайт. Делаю адаптивную верстку на Bootstrap, таким образом Ваш сайт будет отлично выглядеть на всех устройствах. Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, или связаться со мной для сотрудничества.",
    },
    img: "http://saqhan.ru/img/saqhan.jpg",
    contacts: {
        name: "Сайхан Абаев",
        text: "Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress, OpenCart, Elgg, программирование на PHP, JavaScript",
        phone: "+ 7 (965) 954 00 34",
        email: "saqhan1@mail.ru",
    },
};

const myComponentCss = ".sc-my-component-h{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("cnt-flexy-view-saqhan-promo-header-1_01", { categories: header }), h("cnt-flexy-view-saqhan-promo-about-me-1_01", { payload: aboutMe })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
