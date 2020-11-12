let buttons_openSearch = document.querySelectorAll('.top-panel__search-btn');
let forms_SearchForm = document.querySelectorAll('.top-panel__form');
let search_input = document.getElementById('mobile-search');

for (let i = 0; i < buttons_openSearch.length; i++) {
    const btn_openSearch = buttons_openSearch[i];
    btn_openSearch.addEventListener('click', function(e) {
        this.classList.toggle("js-active");
        forms_SearchForm[i].classList.toggle("js-opened");
    });
}


// Burger menu
let burger = document.querySelector('.burger');
let burger_box = document.querySelector('.top-panel__menu');
let mobile_menu = document.querySelector('.mobile-menu__content');

burger.addEventListener('click', function(e) {
    this.classList.toggle('js-to-cross');
    burger_box.classList.toggle('js-active');
    mobile_menu.classList.toggle('js-opened');
});