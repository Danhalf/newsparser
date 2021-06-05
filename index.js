

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
let count = 0;
//rule.minute = 40;
rule.second = 10;
schedule.scheduleJob(rule, function () {
  console.log(`Обновлений: ${count}`);
  count++;
  const url = 'https://www.ruptela.ua/novini/';


  let linkData = {};
  let data = {};


  axios
    .get(url)
    .then((r) => getData(r.data))
    .catch((error) => console.log(error));

  let getData = (html) => {

    const $ = cheerio.load(html);
    $('.news-item-wrap').each((i, elem) => {
      data[i] = {
        title: $(elem).find('.name').text().replace(/\t/g, '').replace(/\n/g, ''),
        new: $(elem).find('.excerpt').text(),
        img: $(elem).find('.wp-post-image').attr('data-src'),
        link: $(elem).find('a').attr('href'),
        // link: $(elem).find('a.storylink').attr('href'),
      };
    })



    fs.writeFile('news.js', `export default ${JSON.stringify(data)}`, (err) => {
      if (err) throw err;
      console.log('Data has been added!');
    })

  }


  setTimeout(() => {
    for (let index in data) {
      axios.get(data[index].link)
        .then(response => getInner(response.data))
        .catch((error) => console.log(error));

      let getInner = (html) => {
        const $ = cheerio.load(html);
        $('.main-content').each((i, elem) => {
          linkData[index] = {
            fullNewsTitle: $(elem).find('.page-title').text(),
            fullNew: $(elem).find('.wpb_content_element p').text(),

          };
        })
      }
    }

  }, 2000)

  setTimeout(() => {
    fs.writeFile('fullNews.js', `export default ${JSON.stringify(linkData)}`, (err) => {
      if (err) throw err;
      console.log('Fullnews data has been added!');
    })
  }, 5000)


});