// import data from '../path/data';

const arrNew = [
  {
    headline: 'The Last Kingdom',
    url: 'https://ru.wallpaper.mob.org/pc/image/doma-pejzazh-zima-41211.html',
    lead_paragraph:
      'The Lasфффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффф',
    news_desk: 'Kingdom',
    web_url: 'https://www.google.com.ua/',
  },
  {
    headline: 'The Last Kingdom',
    url: 'https://ru.wallpaper.mob.org/pc/image/doma-pejzazh-zima-41211.html',
    lead_paragraph: 'The Last',
    news_desk: 'Kingdom',
    web_url: 'https://www.google.com.ua/',
  },
];

let shortParagraph = '';

function normalaiseArr(arr) {
  const markup = arr.map(({ lead_paragraph }) => {
    if (lead_paragraph.length > 80) {
      shortParagraph = lead_paragraph.slice(0, 80) + '...';
      return shortParagraph;
    }
  });
}
normalaiseArr(arrNew);

function cardMarkup({ url, title, lead_paragraph, date }) {
  return data
    .map(
      (item) =>
        `<li class="card__item">
        <div class="card__wrapper">
          <div class="card-image__wrapper">
            <img
              class="card__image"
              src="./img.jpg"
              alt="news"
              width="288"
              height="395"
            />
            <span class="card-jobsearching">Job searching </span>
            <span class="card-already__read is-hidden">Already read</span>
            <button class="card__btn" type="button">Add to favorite</button>
          </div>

          <h2 class="card__title">Title article</h2>
          <p class="card__article">
            
          ${lead_paragraph.length} > 80
            ? ${lead_paragraph}.slice(0, 80) + '...'
            : ${lead_paragraph}
        
          </p>

          <div class="card__info">
            <span class="card__info--date">2020/01/05</span>
            <button class="card__info--readmore" type="button">
              Read more
            </button>
          </div>
        </div>
      </li>`
    )
    .join('');
}

// const ulEl = document.querySelector('.cards__list');

// ulEl.insertAdjacentHTML('beforeend', cardMarkup());

console.log(shortParagraph);
