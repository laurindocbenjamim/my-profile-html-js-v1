
let menu = document.querySelector('#menu-btn1');
let menu2 = document.querySelector('#menu-btn2');
let navbar = document.querySelector('.header .navbar');
let navbarLong = document.querySelector('.headerLong .navbarLong');
let headerLong = document.querySelector('.headerLong');

let i =0;
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    i++;
    if(i==1){
        headerLong.style.display = "none";
    }else if(i == 2){
        i = 0;
        headerLong.style.display = "inline-block";
    }
};

menu2.onclick = () =>{
    menu2.classList.toggle('fa-times');
    navbarLong.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


    var swiper = new Swiper(".home-slider", {
        loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
