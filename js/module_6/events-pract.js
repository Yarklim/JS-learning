/*
* - Именование колбеков для слушателей:
	- handle*: handleSubjectEvent
	- *Handler: subjectEventHandler
	- on*: onSubjectEvent
*/

//? ============= События кнопки ============
const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

function onTargetButtonClick() {
  console.log('Click on target Button');
}

addListenerBtn.addEventListener('click', () => {
  console.log('Click on Add Button');

  targetBtn.addEventListener('click', onTargetButtonClick);
});

removeListenerBtn.addEventListener('click', () => {
  console.log('Remove listener');

  targetBtn.removeEventListener('click', onTargetButtonClick);
});

//? ============ Событие сабмита форм ============
const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('name: ', name);
    console.log('value: ', value);
  });
}

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// Заменяю одним объектом refs все вышенаписанные переменные:

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange); // Не использовать, так как событие происходит во время потери фокуса

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Imput has focus - event focus');
}

function onInputBlur() {
  console.log('Input lost focus - event blur');
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}

//? ------ Сброс формы ---------
/*
HTMLFormElement.reset()
Метод HTMLFormElement.reset() восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.

Если элемент управления формы (такой как кнопка типа reset) имеет имя или идентификатор reset, это маскирует метод HTMLFormElement.reset(). Это не сбрасывает другие атрибуты, такие как disabled.

Синтаксис
HTMLFormElement.reset()
Пример
document.getElementById('myform').reset();
*/

//? ========= Сoбытия клавиатуры ===========
const refsClearBtn = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refsClearBtn.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  refsClearBtn.output.textContent += event.key;
}

function onClearOutput() {
  refsClearBtn.output.textContent = '';
}

//? =========== События мыши ==========
/*
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box-active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box-active');
}

function onMouseMove(event) {
  console.log(event);
}

//? ========== Modal Window ===========
/*
 * 1. Открыть и закрыть по кнопке - onModalOpen и onModalClose
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC : onEscapeKeypress
 *
 * B CSS есть класс show-model, который необходимо добавлять на body при открытии модалки
 */

const refsModal = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);
refsModal.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress); // для установки регистрации закрытия по ESC
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.addEventListener('keydown', onEscKeyPress); // для снятия регистрации закрытия по ESC
  document.body.classList.remove('show-modal');
}

// Закрытие модалки по клику в бекдроп
function onBackdropClick() {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// Закрытие модалки по клику на ESC
function onEscKeyPress() {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
