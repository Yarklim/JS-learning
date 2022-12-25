const magicBtn = document.querySelector('.js-magic__btn');

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.cats__img');
  imageEl.src = './img/cat2.jpg';
  imageEl.alt = 'cat2';

  const catsTitleEl = document.querySelector('.cats__title');
  catsTitleEl.textContent = 'Cat 2';
});

// const navItem = document.querySelectorAll('.site-nav__item');
// console.log(navItem);

// Добавление, замена и удаление классов
// const navLinksEl = document.querySelector('.site-nav__link');
// navLinksEl.classList.add('new-class');
// navLinksEl.classList.remove('new-class');
// navLinksEl.classList.toggle('new-class');
// navLinksEl.classList.replace('new-class', 'qwerty');
// Проверка есть ли класс
// navLinksEl.classList.contains('new-class'); // возвращает true или false

// Добавление стилей CSS
const currentPageUrl = '/about';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]` // Нашли элемент
);
linkEl.classList.add('site-nav__link--current'); // Добавляет класс

// Навигация по DOM
const navEl = document.querySelector('.site-nav');
const firstNavItemEl = navEl.firstElementChild;
const lastNavItemEl = navEl.lastElementChild;
const childrenNavEl = navEl.children;

console.log(firstNavItemEl);
console.log(lastNavItemEl);
console.log(childrenNavEl);

// Создание элементов (заголовок и картнка - соседи)
const miamiEl = document.querySelector('.miami-section');
const miamiBtnEl = document.querySelector('.miami-btn');

const titleEl = document.createElement('h2');
titleEl.classList.add('page-title');
titleEl.textContent = 'This is Miami';

const imageNewEl = document.createElement('img');
imageNewEl.src = './img/miami.jpg';
imageNewEl.alt = 'miami';
imageNewEl.width = 200;

miamiBtnEl.addEventListener('click', () => {
  miamiEl.append(titleEl, imageNewEl);
});

// Создание элементов (список и ссылка - гроздь елементов)
const newNavItemEl = document.createElement('li');
newNavItemEl.classList.add('site-nav__item');

const newNavLinkEl = document.createElement('a');
newNavLinkEl.classList.add('site-nav__link');
newNavLinkEl.textContent = 'Personal Info';
newNavLinkEl.href = '/personal';

newNavItemEl.appendChild(newNavLinkEl);

const newNavEl = document.querySelector('.site-nav');

// newNavEl.appendChild(newNavItemEl); // последним эелементом
// newNavEl.insertBefore(newNavItemEl, newNavEl.firstElementChild); // первым эелементом
// newNavEl.insertBefore(newNavItemEl, newNavEl.lastElementChild); // перед последним эелементом
newNavEl.insertBefore(newNavItemEl, newNavEl.children[1]); // вместо второго эелемента

// Сщздание коллекции элементов
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#F4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const elements = colorPickerOptions.map((option) => {
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

colorPickerContainerEl.append(...elements);
