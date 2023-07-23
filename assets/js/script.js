

$(document).ready(function(){
    $('#menu').click(function(){
       
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').remove('toggle');

        if( $(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    //Smooth scrolling

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });
})


/*let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

let i =0;
menu.onclick = () => { alert("Ola")
    menu.classList.toggle();
    navbar.classList.toggle();
};*/


