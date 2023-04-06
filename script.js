function meuEscolpo(){
const form = document.querySelector('.form')

function Calculo(tela){
    tela.preventDefault();
    const resultado = document.querySelector('#resultado')
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value/100;
    const imc = peso/ altura **2;
    const mensagem = `Seu IMC é ${parseInt(imc)}`

    if(imc<=18.5){
        resultado.innerHTML = (`${mensagem} (abaixo do peso)`)
    }else if(imc<=24.9){
        resultado.innerHTML = (`${mensagem} (Peso Normal)`)
    }else if(imc<=29.9){
        resultado.innerHTML = (`${mensagem} (Sobrepeso)`)
    }else if(imc<=34.9){
        resultado.innerHTML = (`${mensagem} (Obesidade grau 1)`)
    }else if(imc<=40){
        resultado.innerHTML = (`${mensagem} (Obesidade grau 2)`)
    }else if (imc>40){
        resultado.innerHTML = (`${mensagem} (Obesidade grau 3)`)
    }else{
        resultado.innerHTML = (`${imc} Por favor digite um valor`)
    }
                      }
form.addEventListener('submit',Calculo)
                    }
meuEscolpo()