const express= require('express');
const router=express.Router();

const auth=function(req, res, next){
    console.log("auth middleware");

    req.user={id:1, role:"student"};

    if(req.user){
        next();
    }else{
        res.send("Unauthorized");
    }
    
}

const isstudent=function(req, res, next){
    console.log("isstudent middleware");
    if(req.user.role==="student"){
        next();
    }else{
        res.send("Unauthorized");
    }   
}

const isadmin=function(req, res, next){
    console.log("isadmin middleware");  
    if(req.user.role==="admin"){
        next();
    }   else{
        res.send("Unauthorized");
    }
}

router.get('/student', auth, isstudent, function(req,res){
    res.send("nomi Student Route");
});

router.get('/admin', auth, isadmin, function(req,res){
    res.send("nomi Admin Route");
});

module.exports=router;