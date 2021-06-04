import news from './news.js';

for (let i = 0; i < 5; i++) {
  let div = document.createElement('div');
  document.body.append(div);
  div.classList.add(`new-${i}`);
  div.innerHTML = `<strong>${news[i].title}</strong><div>${news[i].new}</div><img src='${news[i].img}'><a href='${news[i].link}'>Дізнатись більше</a>`;
}
