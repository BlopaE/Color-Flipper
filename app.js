const colors = ["black","silver","gray","white","maroon","red","purple","fuchsia","greeen","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    //Get random number between 0 and colors.length
    const randomNumber = getRandomNumber(0,colors.length)
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min));
}