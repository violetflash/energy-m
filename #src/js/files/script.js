//Smooth scroll to the anchor
const anchors = document.querySelectorAll('a[href*="#"]')

//Каждому якорю присваиваем обработчик события
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        //убираем стандартное поведение по клику
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

@@include('../../components/header/header.js', {})