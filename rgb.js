const btn=document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',()=>{
    let rgb="rgb("
    for (let i=0; i < 3;i++){
        rgb+=getRandomNumber(0,255);
        
        if (i<2){
            rgb+=",";
        }else{
            rgb+=")";
        }
    }
    document.body.style.backgroundColor = rgb;
    color.textContent = rgb;
});

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min));
}