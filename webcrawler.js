import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const _findDate = () => {
  // find date
};

// export const getWebAddress = (url, elements) => {
//     JSDOM.fromURL(url)
//     .then(dom => {
//       return dom.serialize();
//     }).then(data => {
//         console.log(dom.querySelector('h1').textContent)
//     });
// }

export const getWebAddress = (url, elements) => {
  // console.log(`fetching url ${url}`)
    
    fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw error;
        }

        return response.text();
        })
        .then((data) => {
        // select elements from data
        const dom = new JSDOM(data).window.document;
        elements.hostname = new URL(url).hostname;
        
        try {
            elements.title = dom.querySelector("h1").textContent.trim();
        } catch (e) {
            console.error(`Error reading contents of 'h1' : ${e.message}`)
        }
        //   cannot find a good tag for author
        //   try {
        //     elements.author = dom.querySelector("author").textContent.trim();
        //   } catch (e) {
        //     console.error(`Error reading contents of 'Author' : ${e.message}`)
        //   }
        try {
            elements.date = dom.querySelector("time").textContent.trim();
        } catch (e) {
            console.error(`Error reading contents of 'time' : ${e.message}`)
        }

        console.log(
            `\n###\n${elements.hostname}\nTitle of page is: \n${elements.title}\nIt was publised on: ${elements.date}`
        );
        });
};
