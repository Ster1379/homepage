const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});
//--------------------------------------------
var PORT = process.env.PORT || 5056;


app.listen(PORT, async() => {
    try{
    console.log('Server is listening on port localhost:5056');
    } catch (e) {
        console.error(e);
    }
});
