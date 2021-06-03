const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.ruptela.ua/novini/';
// const url = 'https://news.ycombinator.com/';
// https://www.ruptela.ua/novini/

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

axios
  .get(url)
  .then((r) => getData(r.data))
  .catch((error) => console.log(error));

let getData = (html) => {
  data = [];
  const $ = cheerio.load(html);
  $('.news-item-wrap').each((i, elem) => {
    data.push({
      title: $(elem).find('.name').text().replace(/\t/g, '').replace(/\n/g, ''),
      new: $(elem).find('.excerpt').text(),
      img: $(elem).find('.wp-post-image').attr('src'),
      // link: $(elem).find('a.storylink').attr('href'),
    });
  });

  console.log(data);
};
