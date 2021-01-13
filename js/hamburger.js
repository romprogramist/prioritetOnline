
$(document) .ready(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.li'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active1');
            menu.classList.toggle('menu__mobil_active1');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active1');
                menu.classList.toggle('menu__mobil_active1');
            })
        })
    })
});


// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     // menuItem = document.querySelectorAll('.li'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active1');
//         menu.classList.toggle('menu__mobil_active1');
        
//         // menuItem.classList.toggle('.li').fadeOut('.menu__mobil_active1')
//     });






// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.li'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active1');
//         menu.classList.toggle('menu__mobil_active1');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active1');
//             menu.classList.toggle('menu__mobil_active');
//         })
//     })
// })





       