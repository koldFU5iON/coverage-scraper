import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const _findDate = () => {
  // find date
};

const searchQuery = (element, dom) => {
    try {
        return dom.querySelector(element).textContent.trim()
    } catch(e) {
        console.error(`Error reading contents of ${element} : ${e.message}`);
    }

};


const fetchArticle = async (url) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw error;
      }

      return response.text();
    })
    .then((data) => {
      return data;
    });
}

export const getWebAddress = (url, elements) => {
    elements.hostname = new URL(url).hostname;
    const html = await fetchArticle(url)
    const { document } = new JSDOM(html).window
    // const dom = new JSDOM(fetchArticle(url)) //.window.document;

    console.log(document.getElementsByName('h1').textContent)
    

    // elements.title = searchQuery('h1', dom)
    // elements.date = searchQuery('time', dom)

    console.log(
        `\n###\n${elements.hostname}\nTitle of page is: \n${elements.title}\nIt was publised on: ${elements.date}`
      );
};
