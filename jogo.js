let personagem = document.querySelector('#personagem');
let vezesDireita = 0;
let vezesParaBaixo = 0; // 1
let saltoDireita = 0;
let saltoParaBixo = 0;

personagem.onkeydown = function(){
    saltoParaBaixo = vezesParaBaixo * 300;
    personagem.style.top = saltoParaBaixo + 'px';      
}

window.onkeydown = function (event) { // Apertei para baixo
    // faz nada
    if(event.code == "ArrowDown" || vezesParaBaixo > 0) { // (true || false) == true
        if(event.code == "ArrowRight"){ // false
            saltoDireita = vezesDireita * 440;
            personagem.style.left = saltoDireita + 'px';
            vezesDireita = vezesDireita + 1;
        } else { // true
            if (event.code == "ArrowDown") { // true
                saltoParaBaixo = vezesParaBaixo * 300; // 300 * 0 -> saltoParaBaixo(0)
                personagem.style.top = saltoParaBaixo + 'px'; // 0px -> personagem.style.top('0px')
                vezesParaBaixo = vezesParaBaixo + 1; // 1 + 0 -> vezesParaBaixo(1)
            } else { // false
                alert ("Você está se locomovendo errado!");
            }
        }
        // alert(vezesDireita + "" + vezesParaBaixo);
        if (vezesDireita == 3 && vezesParaBaixo == 3) { // (0 == 3) false && (1 == 3) false
            alert ("Você venceu!");
        } 
    } else {
        alert ("");
    }
    
     
}


// || = or ()
// && = and ()