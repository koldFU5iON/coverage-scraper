import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const _findDate = () => {
  // find date
};

const searchQuery = async (element, html) => {
  const dom = new JSDOM(html).window.document;

  try {
    return dom.querySelector(element).textContent.trim();
  } catch (e) {
    console.error(`Error reading contents of ${element} : ${e.message}`);
  }
};

const fetchArticle = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw error;
  }

  return await response.text();
};

export const getWebAddress = async (url, elements) => {
  elements.hostname = new URL(url).hostname;

  const html = await fetchArticle(url);

  elements.title = await searchQuery("h1", html);
  elements.date = await searchQuery("time", html);

  console.log(
    `\n###\n${elements.hostname}\nTitle of page is: \n${elements.title}\nIt was publised on: ${elements.date}`
  );
};
