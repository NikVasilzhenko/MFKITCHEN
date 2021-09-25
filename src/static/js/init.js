let calcMains = new Swiper('#js-calc-mains', {
  //allowTouchMove: false,
  effect: 'fade',
  allowTouchMove: false
});

//datapicker
let datapicker = new Swiper('#js-calc-datapickers', {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: '#js-calc-datapicker-next',
      prevEl: '#js-calc-datapicker-prev',
    }
});

//menu gallery
var menuGallery = new Swiper('#js-calc-gallery', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 0,
    navigation: {
    nextEl: '#js-calc-gallery-next',
    prevEl: '#js-calc-gallery-prev',
  }
});

//select food
let foodSlider = new Swiper('#js-calc-slidshow', {
  navigation: {
    nextEl: '#js-calc-slidshow-next',
    prevEl: '#js-calc-slidshow-prev',
  },
  breakpoints: {
        800: {
          allowTouchMove: false,
        },
      }
  
});

let factorySlider = new Swiper('#js-factory-slider', {
  navigation: {
    nextEl: '#js-factory-slider-next',
    prevEl: '#js-factory-slider-prev',
  },
});




if(window.innerWidth > 800){
  //SmoothScroll
  SmoothScroll({ 
    stepSize: 60,
    animationTime: 1500,
    ускорениеDelta: 50,
    pulseAlgorithm: true,
    PulseScale: 4,
    pulseNormalize: 1
  });
  //wow
  new WOW().init();
}




