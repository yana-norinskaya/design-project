const parentproject = document.querySelector('.project__list');
const btnMore = document.querySelector('.project__more');
class AddProject {
    constructor(src, title, style, squere, alt) {
        this.src = src;
        this.title = title;
        this.style = style;
        this.alt = alt;
        this.squere = squere;
    }
    renderPage() {
        const list = document.createElement('div');
        list.classList.add("project__list-item");
        list.innerHTML = `
            <div class='project__list-img'>
            <img src='${this.src}' alt='${this.alt}'>
            </div>
            <p>${this.title}</p>
            <p>${this.style}</p>
            <span>${this.squere}</span>
            `
        parentproject.append(list);
    }
}
const itemOne = new AddProject(
    './img/project1.png',
    'Квартира на Академической',
    'Стиль - Лофт',
    '130 м2',
    '.project__list'
).renderPage();
const itemTwo = new AddProject(
    './img/project2.png',
    'Квартира на Рижской',
    'Стиль - Скандинавский',
    '94 м2',
    '.project__list'
).renderPage();
const itemThree = new AddProject(
    './img/project3.png',
    'Квартира на Чистых прудах',
    'Стиль Лофт',
    '68 м2',
    '.project__list'
).renderPage();
const itemFour = new AddProject(
    './img/project4.png',
    'Квартира на Рижской',
    'Стиль - Скандинавский',
    '94 м2',
    '.project__list'
).renderPage();
const itemFive = new AddProject(
    './img/project5.png',
    'Квартира на Чистых прудах',
    'Стиль - Лофт',
    '85 м2',
    '.project__list'
).renderPage();
const itemSix = new AddProject(
    './img/project6.png',
    'Квартира на Академической',
    'В стиле Лофт',
    '108 м2',
    '.project__list'
).renderPage();

btnMore.addEventListener('click', e => {
    const item7 = new AddProject(
        './img/project4.png',
        'Квартира на Рижской',
        'Стиль - Скандинавский',
        '94 м2',
        '.project__list'
    ).renderPage();
    const item8 = new AddProject(
        './img/project5.png',
        'Квартира на Чистых прудах',
        'Стиль - Лофт',
        '85 м2',
        '.project__list'
    ).renderPage();
    const item9 = new AddProject(
        './img/project6.png',
        'Квартира на Академической',
        'В стиле Лофт',
        '108 м2',
        '.project__list'
    ).renderPage();
}, { once: true })