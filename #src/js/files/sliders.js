//BuildSlider - строит HTML конструкцию для свайпера

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-container')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-container');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }


// Project Sliders ====================================
if (document.querySelector('.aside-product__slider')) {
  var product_galleryThumbs = new Swiper('.slider-product__thumbs-body', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    speed: 800,
    loop: true,


  });
  var product_galleryTop = new Swiper('.slider-product__body', {
    slidesPerView: 1,
    thumbs: {
      swiper: product_galleryThumbs
    },
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.slider-product__thumbs .slider-nav__next',
      prevEl: '.slider-product__thumbs .slider-nav__prev',
    },
  });


}
