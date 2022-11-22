let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = '';
let inimigoOpt = '';


function colorVitoria() {
    let vencedor = document.querySelector('.vencedor');
    vencedor.style.color = 'green';
}
function colorDerrota() {
    let vencedor = document.querySelector('.vencedor');
    vencedor.style.color = 'red';
}
function colorEmpate() {
    let vencedor = document.querySelector('.vencedor');
    vencedor.style.color = 'yellow';
}




const validarVitoria = ()=> {
    let vencedor = document.querySelector('.vencedor');

    if (playerOpt === 'pedra') {
        if (inimigoOpt === 'papel') {
            vencedor.innerHTML = 'Você perdeu';
            colorDerrota();

        } else if (inimigoOpt === 'pedra') {
            vencedor.innerHTML = 'O jogo deu empate';
            colorEmpate();

        } else if (inimigoOpt === 'tesoura') {
            vencedor.innerHTML = 'Você Ganhou';
            colorVitoria();

        }
    }

    if (playerOpt === 'papel') {
        if (inimigoOpt === 'papel') {
            vencedor.innerHTML = 'O jogo deu empate';
            colorEmpate();

        } else if (inimigoOpt === 'pedra') {
            vencedor.innerHTML = 'Você Ganhou';
            colorVitoria();

        } else if (inimigoOpt === 'tesoura') {   
            vencedor.innerHTML = 'Você perdeu';
            colorDerrota();

        }
    }

    if (playerOpt === 'tesoura') {
        if (inimigoOpt === 'papel') {
            vencedor.innerHTML = 'Você Ganhou';
            colorVitoria();

        } else if (inimigoOpt === 'pedra') {
            vencedor.innerHTML = 'Você perdeu';
            colorDerrota();

        } else if (inimigoOpt === 'tesoura') {
            vencedor.innerHTML = 'O jogo deu empate';
            colorEmpate();

        }
    }
}

const resetInimigo = ()=> {
    let enemyOptions = document.querySelectorAll('.enemy-options div > img');

    for (let i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].style.opacity = .3;
    }
}

const inimigoJogar = ()=> {
    let rand = Math.floor(Math.random()*3);


    let enemyOptions = document.querySelectorAll('.enemy-options div > img');
    resetInimigo();
    for (let i = 0; i < enemyOptions.length; i++) {
        if (i === rand) {
            enemyOptions[i].style.opacity = 1;
            inimigoOpt = enemyOptions[i].getAttribute('opt');
        }
    }

    validarVitoria();

}

const resetOpacityPlayer = ()=> {
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = .3;
    }
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (t)=> {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    });

}

