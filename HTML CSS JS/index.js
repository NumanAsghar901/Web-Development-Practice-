
    function nomi(){
        let p1=document.getElementById("p1");
        let p2=document.getElementById("p2");
        p1.textContent="Hello sheikh kesay ho";
        p2.style.color="red";
    }

    let btn=document.getElementById("btn");
    btn.addEventListener("click",nomi);

    let para=document.querySelectorAll("#div1 p");
    for(let i=0; i<para.length; i++){
        let p=para[i];
        p.addEventListener("click",function(){
            alert("You clicked on "+p.textContent+" "+(i+1));
        });
    }

    let amount=1000;
    document.getElementById("show").addEventListener("click",function(){
        document.getElementById("greet").textContent=" your balance is "+amount;
    });

    document.getElementById("withdraw").addEventListener("click",function(){
        let withdrawAmount=Number(document.getElementById("amount").value);

        if(withdrawAmount <= amount){
            amount-=withdrawAmount;
            document.getElementById("greet").textContent=" you withdrew "+withdrawAmount+" your new balance is "+amount;
        }
        else{
            document.getElementById("greet").textContent=" insufficient balance";
            }
        
    });

    document.getElementById("deposit").addEventListener("click",function(){
        let am = Number(document.getElementById("amount").value);
        amount += am;
        document.getElementById("greet").textContent=" you deposited "+am+" your new balance is "+amount;

    });
    
    let form=document.getElementById("myform");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        document.getElementById("nil").textContent=" form submitted successfully";
        form.reset();
    });


    
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startDigitalClock() {
    while (true) {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        
        // Update the clock display on screen
        document.getElementById("clockDisplay").textContent = timeString;
        
        // Wait exactly 1 second before running the next tick
        await delay(1000); 
    }
}
startDigitalClock();

const options = {
    method: "POST",
    body: JSON.stringify({
        title: "Im in love with Numan",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8" // Best practice for POST requests
    }
};

async function postData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let data = await response.json();
    console.log("POST Response:", data);
}

async function fetchData() {
    // Fixed typo from 'respone' to 'response'
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    document.getElementById("data").textContent = data.title;
}

async function main() {
    await postData();  // Runs and logs to console first
    await fetchData(); // Runs next and updates the DOM
}

main();

document.getElementById("addTask").addEventListener("click", function(event) {
    let taskInput = document.getElementById("task");
    document.getElementById("taskList").textContent +=  taskInput.value ;
   
    taskInput.value = ""; // Clear the input field after adding the task
});

let count = 0;
document.getElementById("increment").addEventListener("click", function() {

count++;
document.getElementById("print").textContent = `You clicked ${count} times`;

});