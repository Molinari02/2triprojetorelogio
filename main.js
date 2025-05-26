const botoes = document.querySelectorAll(".botoes");
console.log(botoes)
for(let i=0;i<botoes.length; i++) {
    botoes[i].onclik = function (){
        botoes [i].classList.add("ativo");
    }
}