document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            exibeElementosHeader();
            
        }else{
            ocultaElementosHeader();
        }
    })
})


//função para ocultar elementos do header na rolagem
function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); 
}

//função para exibir elementos do header na rolagem
function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}