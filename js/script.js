$(document).ready(function(){
    let owl = $('.clientes-carousel');
    owl.owlCarousel({
        dots: true,
        margin: 15,
        autoHeight:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768 : {
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});

function projetosOver(x) {
    let tela = document.getElementById(x);
    tela.style.display = "block";
}

function projetosOut(x) {
    let tela = document.getElementById(x);
    tela.style.display = "none";
}