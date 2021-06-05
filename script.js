import news from './news.js';
import fullNews from './fullNews.js';

for (let i = 0; i < 8; i++) {
  let div = document.createElement('div');
  document.body.append(div);
  div.classList.add(`new-item-${i}`);
  div.innerHTML = `<h2 class='news-title'>${fullNews[i]?.fullNewsTitle}</h2><div class='news-content'><img class='news-img' align='left' src='${news[i].img}'>${fullNews[i]?.fullNew}</div>`;
}
