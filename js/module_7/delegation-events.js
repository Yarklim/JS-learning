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
const tagsContainer = document.querySelector('.js-tags');

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');
  }

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('tags__btn--active');
}
