let product_filter = document.querySelector('.power-filter__toggle');
let product_filterBody = document.querySelector('.power-filter__body');

product_filter.addEventListener('click', function(e) {
    this.classList.toggle('js-opened');
    product_filterBody.classList.toggle('js-visible');
});

const choices_element = document.querySelectorAll('.power-filter__select');

for (let i = 0; i < choices_element.length; i++) {
    const choices = new Choices(choices_element[i], {
        searchEnabled: false,
        position: "bottom",
    });
}
