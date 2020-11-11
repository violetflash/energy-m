///////
// mega-menu open
///////

let megaBtn = document.querySelector('.mega-menu');
let megaContent = document.querySelector('.mega-menu__content');
let menu = document.querySelector('.menu');

megaBtn.addEventListener('click', function(e) {
    this.classList.toggle('js-active');
    megaContent.classList.toggle('js-opened');
});


// megaBtn.addEventListener("mouseenter", function (e) {
//     this.classList.add('js-active');
//     megaContent.classList.add('js-opened');
// });
//
// // Hide menu on mouseleave
// megaBtn.addEventListener("mouseleave", function (e) {
//     this.classList.remove('js-active');
//     megaContent.classList.remove('js-opened');
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

//menu-dropdown
let dropdownBtn = document.querySelector('.menu__item--btn');
let dropdownBody = dropdownBtn.querySelector('.menu__item-dropdown');


//ONCLICK
dropdownBtn.addEventListener('click', function(e) {
    // e.preventDefault()
    dropdownBody.classList.toggle('js-visible');
});


// //HOVER
// dropdownBtn.addEventListener('mouseenter', function(e) {
//     // e.preventDefault()
//     this.classList.add('js-active');
//     dropdownBody.classList.add('js-visible');
// });
// dropdownBtn.addEventListener('mouseleave', function(e) {
//     this.classList.remove('js-active');
//     dropdownBody.classList.remove('js-visible');
// });