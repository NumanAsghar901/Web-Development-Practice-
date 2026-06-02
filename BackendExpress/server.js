const express= require('express');
const cors=require('cors');
const app=express();
const port=5000;

app.use(cors());

const quotes = [
{ text: "Success comes through consistency.", author: "Unknown" },
{ text: "Practice makes progress.", author: "Teacher" },
{ text: "Learning never stops.", author: "Student" },
{ text: "Code, test, improve.", author: "Developer" }
];

app.get('/api/quote', function(req, res){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

app.listen(port,function(){
    console.log(`Server is running on port ${port}`);
})