import './swiper.js';

const sliderlList = document.getElementById('slider');

const sliderCoachers = () => {
  if (sliderlList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(sliderlList, {
      navigation: {
        nextEl: '.coaches__button--right',
        prevEl: '.coaches__button--left',
      },
      speed: 600,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      loop: true,
    });
  }
};

export {sliderCoachers};
