let product_filter = document.querySelector('.filter__toggle');
let product_filterBody = document.querySelector('.filter__body');
let product_filterBtn = document.querySelector('.filter__btn');
let product_filterResult = document.querySelector('.filter__content');

product_filter.addEventListener('click', function(e) {
    // this.classList.toggle('js-opened');
    // product_filterBody.classList.toggle('js-visible');
    _slideToggle(product_filterBody);
});

let btnText = document.querySelector('.filter__show');

product_filterBtn.addEventListener('click', function(e) {
    product_filterResult.classList.toggle('js-opened');
    if (btnText.innerHTML === 'Показать') {
        btnText.innerHTML = 'Скрыть';
    } else {
        btnText.innerHTML = 'Показать';
    }
});








// power-filter__btn


const choices_element = document.querySelectorAll('.filter__select');

for (let i = 0; i < choices_element.length; i++) {
    const choices = new Choices(choices_element[i], {
        searchEnabled: false,
        position: "bottom",
        itemSelectText: '',
        shouldSort: false,
    });
}
