//? ===============  Всплытие событий =================
/*
 * event.target - целевоц (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   innerChild: document.querySelector('#inner-child'),
// };

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// function onParentClick(event) {
//   console.log('onParentClick');
//   console.log('onParentClick -> event.target', event.target);
//   console.log('onParentClick -> event.currentTarget', event.currentTarget);
// }

// function onChildClick(event) {
//   console.log('onChildClick');
//   console.log('onChildClick -> event.target', event.target);
//   console.log('onChildClick -> event.currentTarget', event.currentTarget);
// }

// function onInnerChildClick(event) {
//   console.log('onInnerChildClick');
//   console.log('onInnerChildClick -> event.target', event.target);
//   console.log('onInnerChildClick -> event.currentTarget', event.currentTarget);
// }
//? =============================================================================

//? ================ Делегирование событий ================
/*
 * - Общий слушатель
 * - Фильтр цели клика
 */

// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(event.target.textContent);
// }

// /*
//  * Код добавления кнопок
//  */
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Button ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }
//? ==========================================================

//? =============== Практика =================
/*
 * - один из многих
 * - несколько из многих и Set
 */

//? Ыфбор только одной кнопки - одна из многих

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove('tags__btn--active');
//   //   }

//   // (?) - это заменяет if. Это только при доступе к свойству!
//   currentActiveBtn?.classList.remove('tags__btn--active');

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

//? Выбор нескольких кнопок - несколько из многих

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set(); // Set для хранения выделенных тегов

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  // Определяем есть ли класс у тега
  const tag = e.target.dataset.value;
  const isActive = e.target.classList.contains('tags__btn--active');

  // Если класс есть - удаляем тег из Set, если класса нет - добавляем в Set
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  e.target.classList.toggle('tags__btn--active');

  console.log(selectedTags);
}

// Colorpicker
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#ff9800', rgb: '255,152,0' },
];

const paletteContainerEl = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainerEl.addEventListener('click', onPaletteContainerClick);

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
	<div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
	`;
    })
    .join('');
}

function onPaletteContainerClick(e) {
  if (!e.target.classList.contains('color-swatch')) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

//? ======================================
/*
* - Chatty events (болтливые события)
* - Приёмы throttle и debounce с lodash
* - Ленивая загрузка изображений:
	- Нативная с атрибутом loading
	- Библиотека lazysizes
*/

// Mousemove и throttle

// const coordsOutputEl = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

// function onMouseMove(e) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputEl.textContent = `
// 	Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
// 	X: ${e.clientX},
// 	Y: ${e.clientY}
// 	`;
// }

// Input и debounce

const inputEl = document.querySelector('.js-input');
const outputEl = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputEl.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(e) {
  inputCbInvocationCounter += 1;

  outputEl.textContent = `
Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
Значение: ${e.target.value}
`;
}

//? ========= Function Debounce ============
// function debounce(func, timeout = 300) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }

// function saveInput() {
//   console.log('Saving data');
// }

// const processChanges = debounce(() => saveInput());
//? ========================================

// Search
/*
 * Рендерим разметку элементов списка
 * Слушаем изменения фильтра
 * Фильтруем и рендерим новые элементы
 */
const tech = [
  { label: 'HTML' },
  { label: 'CSSL' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Redux' },
  { label: 'Vue' },
  { label: 'GraphQL' },
  { label: 'React Native' },
  { label: 'Next.js' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);

populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join('');
}

function onFilterChange(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );
  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

//? 'Пушистый' поиск - Fuse.js

//? ================ Lazy-loading =====================
//? =========== Animation on load img =================
// const lazyImages = document.querySelectorAll('img[data-src]');

// lazyImages.forEach((image) => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(event) {
//   console.log('Img loaded');
//   event.target.classList.add('appear');
// }

//? Чтобы работало в Сафари - нужна библиотека Lazysizes
//? Проверка на поддержку ленивой загрузки, если не поддерживается выполняется else!

if ('loading' in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.querySelector('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script);
}
