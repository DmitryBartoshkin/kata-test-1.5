let brandList = document.querySelectorAll('.brand');
let brandItem = null;
let toggleShow = document.querySelector('.toggle--show');
let toggleHide = document.querySelector('.toggle--hide');

//Load page
if (window.screen.width > 1119) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 7) {
            brandItem.classList.add('brand--hide');
        }
    }
} else if (window.screen.width > 767) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 5) {
            brandItem.classList.add('brand--hide');
        }
    }
} else {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.333,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

//Click on buttons hide/show
toggleShow.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brand--hide')) {
            brandItem.classList.replace('brand--hide', 'brand--visible');
        }

    }
    toggleShow.hidden = true;
    toggleHide.hidden = false;
});

toggleHide.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brand--visible')) {
            brandItem.classList.replace('brand--visible','brand--hide');
        }
    }

    toggleHide.hidden = true;
    toggleShow.hidden = false;
});

//console.log(brandItem);