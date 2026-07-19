$(document).ready(function () {
  sliderNew();
  sliderAcc();
  detailSlider();
})

function sliderNew() {
  let isTablet = $(window).width() <= 1279;
  function getOptions(windowWidth) {
    if (windowWidth <= 1279) {
      return {
        slideWidth: Math.floor((windowWidth - 40) / 2),
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 20,
        touchEnabled: true,
        responsive: true,
      };
    } else {
      return {
        slideWidth: 375,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 2,
        slideMargin: 22.5,
        touchEnabled: false,
        responsive: true,
      };
    }
  }
  const sliders = [];
  $('.sliderNew').each(function() {
    sliders.push($(this).bxSlider(getOptions($(window).width())));
  });
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const newIsTablet = $(window).width() <= 1279;
      if (newIsTablet !== isTablet) {
        isTablet = newIsTablet;
        const windowWidth = $(window).width();
        sliders.forEach(function(slider) {
          slider.reloadSlider(getOptions(windowWidth));
        });
      }
    }, 300);
  });
}

function sliderAcc() {
  $('.sliderAcc').bxSlider({
    slideWidth: 220,
    minSlides: 1,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 15,
    touchEnabled: false
    // wrapperClass: "sliderNewBox"
  })
}

function detailSlider() {
  $('.detailSlider').bxSlider({
    speed: 750,
    adaptiveHeight: true,
    controls: false,
    pagerCustom: '.thumbPager'
  });
}