let buttons_openSearch = document.querySelectorAll('.top-panel__search-btn');
let forms_SearchForm = document.querySelectorAll('.top-panel__form');

for (let i = 0; i < buttons_openSearch.length; i++) {
    const btn_openSearch = buttons_openSearch[i];
    btn_openSearch.addEventListener('click', function(e) {
        this.classList.toggle("js-active");
        forms_SearchForm[i].classList.toggle("js-opened");
    });
}