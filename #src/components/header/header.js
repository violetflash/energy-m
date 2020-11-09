///////
// mega-menu open
///////

let megaBtn = document.querySelector('.menu__btn');
let mega_menu = document.querySelector('.mega-menu');
let menu = document.querySelector('.menu');

megaBtn.addEventListener('click', function(e) {
    mega_menu.classList.toggle('opened');
});


// megaBtn.addEventListener("mouseenter", function (e) {
//     mega_menu.classList.add('opened');
// });

// Hide menu on mouseleave
// menu.addEventListener("mouseleave", function (e) {
//     mega_menu.classList.remove('opened');
// });

// TODO сделать закрытие меню по клику снаружи

//работает с багами
// window.addEventListener('click', function(e) {
//
//     var evTarget = e.target;
//
//     if((evTarget !== mega_menu) && (mega_menu.classList.contains('opened')) && (evTarget !== megaBtn) && (evTarget.parentNode !== megaBtn)) {
//         mega_menu.classList.remove('opened');
//     }
//
// });

//работает с багами
// window.addEventListener('mouseup', function(event){
//     if (event.target != mega_menu && event.target != megaBtn && event.target.parentNode != mega_menu){
//         mega_menu.classList.remove('opened');
//     }
// });

//////
//
//////