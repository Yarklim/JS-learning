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

//? ========= Сшбытия клавиатуры ===========
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
