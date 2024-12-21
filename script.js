function rangeSlider() {
    var slider = document.getElementById('slider');
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });


    var sliderTwo = document.getElementById('sliderTwo');
    noUiSlider.create(sliderTwo, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}

function navActive() {
    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.trip-subWrapper-para');

        navLinks.forEach(link => {
            link.addEventListener('click', function (elm) {
                navLinks.forEach(link => link.classList.remove('active'));
                elm.target.classList.add('active');
            });
        });
    });



}

rangeSlider();
navActive();