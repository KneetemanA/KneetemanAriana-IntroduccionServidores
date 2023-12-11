const express = require('express')
const path = require('path')
const app = express();

const creatPath = (filename) => path.join(__dirname,`./views/${filename}.html`)

app.use(express.static('public'))


app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname,'./views/index.html'))
});
app.get('/babbege',(req, res)=> {
    res.sendFile(creatPath('babbage'))
});
app.get('/berners-lee',(req, res)=> {
    res.sendFile(creatPath('berners-lee'))
});
app.get('/clarke',(req, res)=> {
    res.sendFile(creatPath('clarke'))
});
app.get('/hamilton',(req, res)=> {
    res.sendFile(creatPath('hamilton'))
});
app.get('/hopper',(req, res)=> {
    res.sendFile(creatPath('hopper'))
});
app.get('/lovelace',(req, res)=> {
    res.sendFile(creatPath('lovelace'))
});
app.get('/turing',(req, res)=> {
    res.sendFile(creatPath('turing'))
})


const port = 3030
app.listen(port,() => console.log(`http://localhost:${port}`))