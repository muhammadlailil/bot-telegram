import express from "express";
import { Log } from "./logger.js";
const app = express();
const port = 5000

app.use('/', (req,res)=>{
    Log(`message = ${JSON.stringify(req.body)}`)
    res.send('success')
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
