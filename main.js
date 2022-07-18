/* todo list 

1. fetch url for publication
2. use express to select elements on page
3. add to elements to coverage object
4. update airtable database with elements
5. test with multiple source samples, and pick up alternative element fields for lookup

*/
import { getWebAddress } from "./webcrawler.js"

const testUrls = [
    "https://www.polygon.com/22989109/unity-tech-demo-enemies-video-hair-face-gdc-2022",
    "https://www.gamesradar.com/unitys-tech-demo-enemies-features-a-stunningly-realistic-digital-human/",
    "https://www.techregister.co.uk/unitys-impressive-new-enemies-short-shows-off-a-remarkably-realistic-digital-human/"
]

getWebAddress(testUrls[0]);     