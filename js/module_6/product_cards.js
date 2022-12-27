import products from './product.js';

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ image, name, model, year, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('card');

  const imageEl = document.createElement('img');
  imageEl.classList.add('card__image');
  imageEl.src = image;

  const nameEl = document.createElement('h2');
  nameEl.classList.add('card__name');
  nameEl.textContent = name;

  const modelEl = document.createElement('p');
  modelEl.classList.add('card__model');
  modelEl.textContent = `Model: ${model}`;

  const yearEl = document.createElement('p');
  yearEl.classList.add('card__year');
  yearEl.textContent = `Year: ${year}`;

  const priceEl = document.createElement('p');
  priceEl.classList.add('card__price');
  priceEl.textContent = `Price: $${price}`;

  productEl.append(imageEl, nameEl, modelEl, yearEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

productsContainerEl.append(...elements);
