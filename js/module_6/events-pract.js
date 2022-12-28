const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', () => {
  console.log('Click');
});

function logMessage() {
  console.log('Click for Button');
}
