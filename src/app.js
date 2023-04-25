
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT||3000;

app.use(express.static(path.join(__dirname,'../Portfolio'),{index:false,extensions:['html']}));


app.get('*',(req,res)=>{
    res.redirect("/home.h");
}
)

app.listen(port,()=> {
    console.log("oh yeahhh")})


