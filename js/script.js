$(document).ready(function(){
    let owl = $('.clientes-carousel');
    owl.owlCarousel({
        dots: true,
        margin: 15,
        autoHeight:true,
        nav:true,
        responsive:{
            480:{
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

    /*let projeto = $('.projeto-carousel');
    projeto.owlCarousel({
        dots: true,
        autoHeight:true,
        autoWidth: true,
        items: 1
    });

// Go to the next item
    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
    })*/
});

function projetosOver(x) {
    let tela = document.getElementById(x);
    tela.style.display = "block";
    console.log(tela)
}

function projetosOut(x) {
    let tela = document.getElementById(x);
    tela.style.display = "none";
    console.log(tela)
}