const https = require('https');

module.exports.getData = function getData(url,cb){
    console.log("getData, url: ", url);
    
    let data = "";
    https.get(url, resp=>{
        resp.on("data", chunk => {
            data += Buffer.from(chunk);
            // console.log(data);
        });
        resp.on("end", ()=>{
            if (resp.statusCode !== 200) {
                cb(new Error(resp.statusCode));
            } else {
                data = JSON.parse(data);
                console.log("data to send", data);
                cb(null, data);
            }
        });    
    }).on("error", err=>{
        console.log(err);        
    });
    https.end;
}