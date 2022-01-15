import * as cheerio from 'cheerio';
import axios from 'axios';

async function getMovieData() {
  const { data } = await axios.get('https://www.imdb.com/title/tt2953050');
  const $ = cheerio.load(data);
  //@ts-ignore
  const jsonData = $("script[type='application/ld+json']")[0].children[0].data;
  return JSON.parse(jsonData);
}

export default getMovieData;
