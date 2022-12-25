const magicBtn = document.querySelector('.js-magic__btn');

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.cats__img');
  imageEl.src = './img/cat2.jpg';
  imageEl.alt = 'cat2';

  const catsTitleEl = document.querySelector('.cats__title');
  catsTitleEl.textContent = 'Cat 2';

  const inputEl = document.querySelector('.js-input');
  inputEl.value = 'Changed';
});

const navEl = document.querySelector('.site-nav');
console.log(navEl);

const navItem = document.querySelectorAll('.site-nav__item');
console.log(navItem);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log(navLinksEl);
