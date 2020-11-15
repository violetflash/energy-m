let product_filter = document.querySelector('.power-filter__toggle');
let product_filterBody = document.querySelector('.power-filter__body');
let product_filterBtn = document.querySelector('.power-filter__btn');
let product_filterResult = document.querySelector('.power-filter__content');

product_filter.addEventListener('click', function(e) {
    // this.classList.toggle('js-opened');
    // product_filterBody.classList.toggle('js-visible');
    _slideToggle(product_filterBody);
});

let btnText = document.querySelector('.power-filter__show');

product_filterBtn.addEventListener('click', function(e) {
    product_filterResult.classList.toggle('js-opened');
    if (btnText.innerHTML === 'Показать') {
        btnText.innerHTML = 'Скрыть';
    } else {
        btnText.innerHTML = 'Показать';
    }
});








// power-filter__btn


const choices_element = document.querySelectorAll('.power-filter__select');

for (let i = 0; i < choices_element.length; i++) {
    const choices = new Choices(choices_element[i], {
        searchEnabled: false,
        position: "bottom",
        itemSelectText: '',
        shouldSort: false,
    });
}
