const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/*Basicamente lo mismo que simple, pero con funciones que devuelven letras y numeros pertenecientes a Hexadecimal, simple :)*/
btn.addEventListener('click',()=>{
    let codigo="#";
    for (let i = 0;i<6; i++){
        codigo+=getCharacter();
    }
    document.body.style.backgroundColor = codigo;
    color.textContent = codigo;
});

function getCharacter(){
    let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let pos = Math.floor(Math.random()*(letters.length));
    return letters[pos];
}
