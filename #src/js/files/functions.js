//IBG
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();
//=================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}

let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration)
}

let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}
//=====================================================================
var slideOpen = false;
//var heightChecked = false;
var initHeight = 120;
var intval = null;

function slideToggle() {
    window.clearInterval(intval);
    var mdiv = document.getElementById('mdiv');
    /*
    if(!heightChecked) {
        initHeight = mdiv.offsetHeight;
        heightChecked = true;
    }
    */
    if(slideOpen) {
        var h = initHeight;
        slideOpen = false;
        intval = setInterval(function(){
                h--;
                mdiv.style.height = h + 'px';
                if(h <= 0)
                    window.clearInterval(intval);
            }, 1
        );
    }
    else {
        var h = 0;
        slideOpen = true;
        intval = setInterval(function(){
                h++;
                mdiv.style.height = h + 'px';
                if(h >= initHeight)
                    window.clearInterval(intval);
            }, 1
        );
    }
}