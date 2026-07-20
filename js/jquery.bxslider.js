$(document).ready(function () {
  sliderNew();
  sliderAcc();
  detailSlider();
})

function sliderNew() {
  // 현재 구간을 문자열로 반환 — 3단 이상 확장에도 대응
  function getBreakpoint(windowWidth) {
    if (windowWidth <= 767) return 'mobile';
    if (windowWidth <= 1279) return 'tablet';
    return 'desktop';
  }

  function getOptions(windowWidth) {
    const breakpoint = getBreakpoint(windowWidth);

    if (breakpoint === 'mobile') {
      return {
        slideWidth: windowWidth - 20,   // 좌우 여백 10px씩
        minSlides: 1,
        maxSlides: 1,                   // 하나씩 노출
        moveSlides: 1,
        slideMargin: 20,
        touchEnabled: true,
        responsive: true,
      };
    }

    if (breakpoint === 'tablet') {
      return {
        slideWidth: Math.floor((windowWidth - 40) / 2),
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 20,
        touchEnabled: true,
        responsive: true,
      };
    }

    // desktop
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

  let currentBreakpoint = getBreakpoint($(window).width());

  const sliders = [];
  $('.sliderNew').each(function () {
    sliders.push($(this).bxSlider(getOptions($(window).width())));
  });

  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      const windowWidth = $(window).width();
      const newBreakpoint = getBreakpoint(windowWidth);

      // 구간이 바뀌었을 때만 재생성 (mobile ↔ tablet ↔ desktop 어느 경계든 감지)
      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        sliders.forEach(function (slider) {
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