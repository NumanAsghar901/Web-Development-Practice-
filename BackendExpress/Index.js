require('dotenv').config()

const express=require("express");
const app=express();
const port=process.env.PORT || 4000;




const route=require('./routes/route');

app.use('/api', route);



app.listen(port,function(){
    console.log(`Server is running on port ${port}`);
})