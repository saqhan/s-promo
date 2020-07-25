/*
 * данные для первого блока и меню
 * */
export const header = {
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
export const aboutMe = {
  title: "Обо мне",
  subTitle: "познакомимся по ближе",
  aboutMe: {
    title: "Немного о себе",
    text:
      "Сайхан, 26 лет. " +
      "Занимаюсь разработкой сайтов с нуля, под ключ. Специалист по CMS WordPress. Выполняю верстку и программирование сайтов. Добавляю весь необходимый функционал на сайт. Делаю адаптивную верстку на Bootstrap, таким образом Ваш сайт будет отлично выглядеть на всех устройствах. Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, или связаться со мной для сотрудничества.",
  },
  img: "http://saqhan.ru/img/saqhan.jpg",
  contacts: {
    name: "Сайхан Абаев",
    text:
      "Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress, программирование на PHP, JavaScript. ",
    phone: "+ 7 (965) 954 00 34",
    email: "saqhan1@mail.ru",
  },
};

export const portfolio = [
  {
    id:1,
    title: 'Module Chat',
    linkGithub: 'https://github.com/saqhan/contacts',
    linkApp:'https://saqhan.github.io/contacts/',
    img:'http://saqhan.ru/img/portfolio/angular.jpg',
    category: 'angular'
  },
  {
    id:2,
    title: 'Mobile Chat',
    linkGithub: 'https://github.com/saqhan/contacts',
    linkApp:'https://saqhan.github.io/contacts/',
    img:'http://saqhan.ru/img/portfolio/angular.jpg',
    category: 'angular'
  },
  {
    id:3,
    title: 'Contacts',
    linkGithub: 'https://github.com/saqhan/contacts',
    linkApp:'https://saqhan.github.io/contacts/',
    img:'http://saqhan.ru/img/portfolio/react.jpg',
    category: 'react'
  },
  {
    id:4,
    title: 'Приложение no-twitter.',
    linkGithub: 'https://github.com/saqhan/no-twitter/',
    linkApp:'https://saqhan.github.io/no-twitter/',
    img:'http://saqhan.ru/img/portfolio/angular.jpg',
    category: 'angular'
  },
  {
    id:5,
    title: 'Todo приложение нa Angular',
    linkGithub: 'https://github.com/saqhan/ng-todo/',
    linkApp:'https://saqhan.github.io/ng-todo/',
    img:'http://saqhan.ru/img/portfolio/angular.jpg',
    category: 'angular'
  },
  {
    id:6,
    title: 'Chat приложение нa React',
    linkGithub: 'https://github.com/saqhan/chat',
    linkApp:'https://saqhan.github.io/chat/',
    img:'http://saqhan.ru/img/portfolio/react.jpg',
    category: 'react'
  },
];
