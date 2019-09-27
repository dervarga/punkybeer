const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const gd = require('./utils/getData');

const apiUrl = "https://api.punkapi.com/v2/beers";
const apiUrlRandom = "https://api.punkapi.com/v2/beers/random"

app.use(express.static(__dirname + "/public/"));
app.use(express.static(path.join(__dirname + "/public/", 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/", 'build', 'index.html'));
  });

app.get("/", (req,res)=>{
    console.log(req);
    gd.getData(apiUrl, (err, rslt)=>{
        if (err) {
            console.log("error in getData");            
        }
        res.json(rslt);
    })    
})
// app.get('/:tag', (req,res)=>{
//     console.log(req.params.tag);
//     // res.json('/beers/'+req.params.tag+' response');
//     gd.getData(apiUrlRandom, (err,rslt)=>{
//         if (err) {
//             console.log("error in getData");
//         }
//         res.json(rslt);            
        
//     })
    
// })

app.listen(port, ()=>console.log(`Server is listening on port ${port}`));