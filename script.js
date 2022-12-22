// active nav link
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

li.forEach(el=>{
    el.addEventListener('click', function(){
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
});

// hamburger menu
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar-ul');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});

// image slider
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });