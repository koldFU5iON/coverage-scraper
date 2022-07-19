import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

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
       const dom = new JSDOM(data)
       console.log(dom.window.document.querySelector('h1').textContent)

    })

}
