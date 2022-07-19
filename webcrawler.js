import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export const getWebAddress = (url) => {
    console.log(`fetching url ${url}`)

    fetch(url)
    .then(response => {
        if(!response.ok){
            throw error
        }

        return response.text();

    }).then(data => {
       // select elements from data
       const $ = cheerio.load(data);
       console.log($.html())
       
    })

}
