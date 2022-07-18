import fetch from 'node-fetch';

export const getWebAddress = (url) => {
    console.log(`fetching url ${url}`)

    fetch(url)
    .then(response => {
        console.log(response.text)
    })

}
