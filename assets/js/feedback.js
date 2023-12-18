document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
     // Initialize Swiper after AOS
     new Swiper('.testimonials-slider', {
    // Swiper options here
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});
});