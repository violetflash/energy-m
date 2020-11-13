const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});

let timeCall = document.querySelector('.js-time');
let timeCall_msg = document.querySelector('.request__time');
let checkbox_time = document.querySelectorAll('.request__options .checkbox__input');

for (let i = 0; i < checkbox_time.length; i++) {
    checkbox_time[i].addEventListener('click', function(e) {
        if (timeCall.checked) {
            timeCall_msg.style.display = "block";
        } else {
            timeCall_msg.style.display = "none";
        }
    });
}

