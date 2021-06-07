import fullNews from './fullNews.js';

// number of news on the page
const newsOnPage = 6;
const newsContainer = document.querySelector('.news-wrapper');


for (let i = 0; i < newsOnPage; i++) {
  const div = document.createElement('div');
  newsContainer.append(div);
  div.classList.add(`news-item`, `news-item-${i}`);
  div.innerHTML = `<h2 class='news-title'>${fullNews[i]?.fullNewsTitle}</h2><div class='news-content'><img class='news-img' align='left' src='news-image-${[i]}.png'>${fullNews[i]?.fullNew}</div><button class='news-button'>Читать полностью</button>`;

  const newsButton = document.querySelectorAll('.news-button');
  const newsItem = document.querySelector(`.news-item-${i} > .news-content`);
  newsButton[i].addEventListener('click', () => newsItem.classList.toggle('full-news')
  );
}




