const pantalla = document.querySelector("#pantalla").getBBox();
const posPantalla = document.querySelector(".pantalla");

console.log(pantalla.x);

function screen(){
    posPantalla.style.top = pantalla.y + "px";
    posPantalla.style.left = pantalla.x + "px";
    posPantalla.style.width = pantalla.width + "px";
    posPantalla.style.height = pantalla.height + "px";

}

screen();

