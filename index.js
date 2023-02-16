import express from "express";
import { Log } from "./logger.js";
const app = express();
const port = 5000

app.get('/',(req,res)=>{
    res.send('Hellow :)')
})
app.get('/trade', (req,res)=>{
    Log(`message = ${JSON.stringify(req.body)}`)
    res.send('success')
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
