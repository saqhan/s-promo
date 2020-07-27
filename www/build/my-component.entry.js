import { r as registerInstance, h } from './index-54bf13c8.js';

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
            id: "skills",
            name: "Навыки",
        },
        {
            id: "portfolio",
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
    socilaLinks: [
        {
            name: 'vkontakte',
            class: 'fab fa-vk',
            links: 'https://vk.com/saqhan'
        },
        {
            name: 'instagram',
            class: 'fab fa-instagram',
            links: 'https://www.instagram.com/saqhan/'
        },
        {
            name: 'github',
            class: 'fab fa-github',
            links: 'https://github.com/saqhan'
        },
    ],
};
/*
 * Данные для блока Обо мне
 * */
const aboutMe = {
    title: "Обо мне",
    subTitle: "познакомимся по ближе",
    aboutMe: {
        title: "Немного о себе",
        text: "Сайхан, 26 лет. " +
            "Занимаюсь разработкой сайтов с нуля, под ключ. Специалист по CMS WordPress. Выполняю верстку и программирование сайтов. Добавляю весь необходимый функционал на сайт. Делаю адаптивную верстку на Bootstrap, таким образом Ваш сайт будет отлично выглядеть на всех устройствах. Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, или связаться со мной для сотрудничества.",
    },
    img: "http://saqhan.ru/img/pre-stage/saqhan.jpg",
    contacts: {
        name: "Сайхан Абаев",
        text: "Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress, программирование на PHP, JavaScript. ",
        phone: "+ 7 (965) 954 00 34",
        email: "saqhan1@mail.ru",
    },
    socilaLinks: [
        {
            name: 'vkontakte',
            class: 'fab fa-vk',
            links: 'https://vk.com/saqhan'
        },
        {
            name: 'instagram',
            class: 'fab fa-instagram',
            links: 'https://www.instagram.com/saqhan/'
        },
        {
            name: 'github',
            class: 'fab fa-github',
            links: 'https://github.com/saqhan'
        },
    ],
};
const portfolio = {
    portfolioCard: [
        {
            id: 1,
            title: "Module Chat",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 2,
            title: "Mobile Chat",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 3,
            title: "Contacts",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/react.jpg",
            category: "react",
        },
        {
            id: 4,
            title: "Приложение no-twitter.",
            linkGithub: "https://github.com/saqhan/no-twitter/",
            linkApp: "https://saqhan.github.io/no-twitter/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 9,
            title: "Министерство автомобильных дорог",
            linkGithub: "",
            linkApp: "https://www.minavtodor-chr.ru/",
            img: "http://saqhan.ru/img/pre-stage/minavtodor.jpg",
            category: "wordpress",
        },
        {
            id: 5,
            title: "Todo приложение нa Angular",
            linkGithub: "https://github.com/saqhan/ng-todo/",
            linkApp: "https://saqhan.github.io/ng-todo/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 6,
            title: "Chat приложение нa React",
            linkGithub: "https://github.com/saqhan/chat",
            linkApp: "https://saqhan.github.io/chat/",
            img: "http://saqhan.ru/img/pre-stage/react.jpg",
            category: "react",
        },
        {
            id: 7,
            title: "Интернет магазин детских товаров",
            linkGithub: "",
            linkApp: "https://wowchild.ru/",
            img: "http://saqhan.ru/img/pre-stage/kids.jpg",
            category: "wordpress",
        },
        {
            id: 8,
            title: "Префектура Ленинского района ЧР",
            linkGithub: "",
            linkApp: "https://prefect-len.ru/",
            img: "http://saqhan.ru/img/pre-stage/len-pre.jpg",
            category: "wordpress",
        },
    ],
    categoriesPortfolio: [
        {
            id: "all",
            name: "Все",
        },
        {
            id: "angular",
            name: "Angular",
        },
        {
            id: "react",
            name: "React",
        },
        {
            id: "wordpress",
            name: "WordPress",
        },
    ],
};
const skills = [
    {
        name: 'HTML',
        percent: 75,
    },
    {
        name: 'CSS',
        percent: 70,
    },
    {
        name: 'JS',
        percent: 35,
    },
    {
        name: 'Angular',
        percent: 37,
    },
    {
        name: 'React',
        percent: 45,
    },
    {
        name: 'Wordpress',
        percent: 80,
    },
    {
        name: 'JQuery',
        percent: 65,
    },
    {
        name: 'Photoshop',
        percent: 50,
    },
];

const myComponentCss = ".sc-my-component-h{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("cnt-flexy-view-saqhan-promo-header-wrapper-1_01", { categories: header }), h("cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01", { payload: aboutMe }), h("cnt-flexy-view-saqhan-promo-skils-wrapper-1_01", { payload: skills }), h("cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01", { payload: portfolio }), h("cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01", { payload: aboutMe }), h("cnt-flexy-view-saqhan-promo-footer-wrapper", { categories: header })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
