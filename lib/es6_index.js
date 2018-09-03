
import express from 'express';

const app = express()

app.get('/hisss', (req, res) => {
    let msg= "hi there";
    res.send('Hello World!'+msg)
});

app.listen(5000, () => console.log('Example app listening on port 5000!'))