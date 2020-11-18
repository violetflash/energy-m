// TABS
let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_content = tab.querySelectorAll('._tabs-content');
    for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.addEventListener('click', function (e) {
            for (let i = 0; i < tabs_items.length; i++) {
                let tabs_item = tabs_items[i];
                tabs_item.classList.remove('js-active');
                tabs_content[i].classList.remove('js-active');
            }
            tabs_item.classList.add('js-active');
            tabs_content[i].classList.add('js-active');
            e.preventDefault();
        });
    }
}

//Also working tabs code
// let tabs = document.querySelectorAll('._tabs')
// let btns = tabs.querySelectorAll('._tabs-item')
// let items = tabs.querySelectorAll('._tabs-content')
//
// function change(arr, i) {
//     arr.forEach( item => {
//         item.forEach( i => {i.classList.remove('_active')})
//         item[i].classList.add('_active')
//     })
// }
//
// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         change([btns, items], i)
//     })
// }

//amount or quantity
let amountButtons = document.querySelectorAll('.amount__button');
if (amountButtons.length > 0) {
    for (let i = 0; i < amountButtons.length; i++) {
        const amountButton = amountButtons[i];
        amountButton.addEventListener('click', function(e) {
            let value = parseInt(amountButton.closest('.amount').querySelector('input').value)
            if (amountButton.classList.contains('amount__button--plus')) {
                value ++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            amountButton.closest('.amount').querySelector('input').value = value;
        });
    }
}


