import express from "express";
import { lookUpRecord } from "./main.js";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.listen(
    PORT, 
    () => {console.log(`server running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('connection established')
})
// "reccdemVBChP3bvBf"
app.get('/coverage/:id',(req,res) => {
    const { id } = req.params
    if(!id) {
        res.status(200).send(`could not read ID : ${id}`)
    } else{
        res.status(200).send(`successfully recieved ${id}`)
        lookUpRecord(id)
    }
})
