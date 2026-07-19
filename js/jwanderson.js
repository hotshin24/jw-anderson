// fitVids
$(function () {
  $(".videoBox").fitVids();
  scrollEvent();
  popupSignIn();
  popupForgottenPassword();
  popupNewPassword();
  popupCreateAccount();
  emailSignUpBox();
  popupAddToCart();
  panelCustomerService();
  panelAccountLogout();
  panelSearchBar();
  panelMyCart();
  popupSize();
  popupChangePassword();
  popupCancelOrder();
  popupExchangeRequest();
  popupTrackOrder();
  popupAddNewAddress();
  popupEditAddressHome();
  popupEditAddressOffice();
  tabUI();
  thumbPager();
  accComponent();
  toggleBtn();
  bookmark();
  btnBack();
  labelFilled();
  deleteBtn();
  checkboxToggle();
  selectComponent();
  inputRequired();
  inputDate();
  onlyNumb();
  qtyComponent();
  deleteItem();
  checkboxAcceptAll();
  inputRequiredCheckout();
  hamburgerMenu();
  imgHover();
});

// header scrolled
function scrollEvent() {
  if ($('header').length) {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 0) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  }
}

// popupSignIn
function popupSignIn() {
  $('[data-panel="popupSignIn"]').on('click', function () {
    $('#popupSignIn').addClass('active');
  });
  $('#popupSignIn .btn_close').on('click', function () {
    $('#popupSignIn').removeClass('active');
  });
}


// popupForgottenPassword
function popupForgottenPassword() {
  $('[data-panel="popupForgottenPassword"]').on('click', function () {
    $('#popupForgottenPassword').addClass('active');
    $('#popupSignIn').removeClass('active');
  });
  $('#popupForgottenPassword .btn_close').on('click', function () {
    $('#popupForgottenPassword').removeClass('active');
  });
}

// popupNewPassword
function popupNewPassword() {
  $('[data-panel="popupNewPassword"]').on('click', function () {
    $('#popupNewPassword').addClass('active');
  });
  $('#popupNewPassword .btn_close').on('click', function () {
    $('#popupNewPassword').removeClass('active');
  });
}

// popupCreateAccount
function popupCreateAccount() {
  $('[data-panel="popupCreateAccount"]').on('click', function () {
    $('#popupCreateAccount').addClass('active');
    $('#popupSignIn').removeClass('active');
  });
  $('#popupCreateAccount .btn_close').on('click', function () {
    $('#popupCreateAccount').removeClass('active');
  });
}

// emailSignUpBox
function emailSignUpBox() {
  $('[data-panel="emailSignUpBox"]').on('click', function () {
    $('#emailSignUpBox').addClass('active');
  });
  $('#emailSignUpBox .btn_close').on('click', function () {
    $('#emailSignUpBox').removeClass('active');
  });
}

// popupAddToCart
function popupAddToCart() {
  $('[data-panel="popupAddToCart"]').on('click', function () {
    $('#popupAddToCart').addClass('active');
  });
  $('#popupAddToCart .btn_close').on('click', function () {
    $('#popupAddToCart').removeClass('active')
  });
}

// panelCustomerService + header
function panelCustomerService() {
  $('[data-panel="panelCustomerService"]').on('click', function () {
    $('#panelCustomerService').toggleClass('active');
    $('header').toggleClass('headerFixedBar');
  });
}

// panelAccountLogout + header
function panelAccountLogout() {
  $('[data-panel="panelAccountLogout"]').on('click', function () {
    $('#panelAccountLogout').toggleClass('active');
    $('header').toggleClass('headerFixedBar');
  });
}

// panelSearchBar + header
function panelSearchBar() {
  $('[data-panel="panelSearchBar"]').on('click', function () {
    $('#panelSearchBar').addClass('active');
    $('header').addClass('headerFixedBar');
  });
  $('#panelSearchBar .btn_close').on('click', function () {
    $('#panelSearchBar').removeClass('active');
    $('header').removeClass('headerFixedBar');
  });
}

// panelMyCart
function panelMyCart() {
  $('[data-panel="panelMyCart"]').on('click', function () {
    $('#panelMyCart').addClass('active');
  })
  $('#panelMyCart .btn_close').on('click', function () {
    $('#panelMyCart').removeClass('active');
  });
}

// popupSize
function popupSize() {
  $('[data-panel*="popupSize"]').on('click', function () {
    $('[id*="popupSize"]').addClass('active');
  });
  $('[id*="popupSize"] .btn_close').on('click', function () {
    $('[id*="popupSize"]').removeClass('active');
  });
}

// popupChangePassword
function popupChangePassword() {
  $('[data-panel="popupChangePassword"]').on('click', function () {
    $('#popupChangePassword').addClass('active');
  })
  $('#popupChangePassword .btn_close').on('click', function () {
    $('#popupChangePassword').removeClass('active');
  });
}

// popupCancelOrder
function popupCancelOrder() {
  $('[data-panel="popupCancelOrder"]').on('click', function () {
    $('#popupCancelOrder').addClass('active');
  });
  $('#popupCancelOrder .btn_close').on('click', function () {
    $('#popupCancelOrder').removeClass('active');
  });
}

// popupExchangeRequest
function popupExchangeRequest() {
  $('[data-panel="popupExchangeRequest"]').on('click', function () {
    $('#popupExchangeRequest').addClass('active');
  });
  $('#popupExchangeRequest .btn_close').on('click', function () {
    $('#popupExchangeRequest').removeClass('active');
  });
}

// popupTrackOrder
function popupTrackOrder() {
  $('[data-panel="popupTrackOrder"]').on('click', function () {
    $('#popupTrackOrder').addClass('active');
  });
  $('#popupTrackOrder .btn_close').on('click', function () {
    $('#popupTrackOrder').removeClass('active');
  });
}

// popupAddNewAddress
function popupAddNewAddress() {
  $('[data-panel="popupAddNewAddress"]').on('click', function () {
    $('#popupAddNewAddress').addClass('active');
  })
  $('#popupAddNewAddress .btn_close').on('click', function () {
    $('#popupAddNewAddress').removeClass('active');
  });
}

// popupEditAddressHome
function popupEditAddressHome() {
  $('[data-panel="popupEditAddressHome"]').on('click', function () {
    $('#popupEditAddressHome').addClass('active');
  });
  $('#popupEditAddressHome .btn_close').on('click', function () {
    $('#popupEditAddressHome').removeClass('active');
  });
}

// popupEditAddressOffice
function popupEditAddressOffice() {
  $('[data-panel="popupEditAddressOffice"]').on('click', function () {
    $('#popupEditAddressOffice').addClass('active');
  });
  $('#popupEditAddressOffice .btn_close').on('click', function () {
    $('#popupEditAddressOffice').removeClass('active');
  });
}

// tabUI
function tabUI() {
  $('.tabUI li').on('click', function () {
    $(this).closest('.chooseBox').find('.tabUI li').removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('active')) {
      $(this).closest('.chooseBox').find('input[type=button]')
        .removeClass('btnSelectSize')
        .addClass('btnAddToCart')
        .val('Add to cart')
        .attr('data-panel', 'popupAddToCart')
    }
  });
  $(document).on('click', '[data-panel=popupAddToCart]', function () {
    $('#popupAddToCart').addClass('active');
  });
  $('#popupAddToCart .btn_close').on('click', function () {
    $('#popupAddToCart').removeClass('active');
  });
}

// thumbPager
function thumbPager() {
  $('.thumbPager').on('click', function () {
    $('.thumbPager').addClass('active');
  });
}

// accComponent
function accComponent() {
  $('.accComponent li:first-of-type').on('click', function () {
    $(this).closest('.accComponent').toggleClass('active');
  });
}

// toggleBtn[input type=password]
function toggleBtn() {
  $('.toggleBtn').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).closest('span').find('input[type=password]')
        .attr('type', 'text')
    } else {
      $(this).closest('span').find('input[type=text]')
        .attr('type', 'password')
    }
  });
}

// bookmark
function bookmark() {
  $('.material-symbols-outlined').on('click', function () {
    $(this).toggleClass('active');
  });
}

// btn_back
function btnBack() {
  $('.btn_back').on('click', function () {
    history.back();
  });
}

// label
function labelFilled() {
  $('input[type=text], input[type=email], input[type=password], input[type=tel], input[type=date]').on('focus', function () {
    $(this).addClass('filled');
    $(this).closest('span').find('label').addClass('filled');
    $(this).closest('li').find('label').addClass('filled');
  });
  $('input[type=text], input[type=email], input[type=password], input[type=tel], input[type=date]').on('blur', function () {
    if ($(this).val().trim() === '') {
      $(this).removeClass('filled');
      $(this).closest('span').find('label').removeClass('filled');
      $(this).closest('li').find('label').removeClass('filled');
    }
  });
}

// delete 버튼 & input type=radio
function deleteBtn() {
  $('input[type=radio]').on('click', function () {
    $('input[value=Delete]').removeClass('disabled');
    $('input[type=radio').next('label').removeClass('active');
    $('input[type=radio').prev('label').removeClass('active');
    $('input[type=radio]:checked').closest('li').find('input[value=Delete]').addClass('disabled');
    $('input[type=radio]:checked').next('label').addClass('active');
    $('input[type=radio]:checked').prev('label').addClass('active');
  });
  $('input[value=Delete]').on('click', function () {
    if ($(this).hasClass('disabled')) {
      return;
    }
    $(this).closest('li').remove();
  });
}

// input type=checkbox
function checkboxToggle() {
  $('input[type=checkbox]').on('click', function () {
    $(this).next('label').toggleClass('active');
  });
}

// selectComponent
function selectComponent() {
  $('.selectComponent').each(function () {
    const $select = $(this);
    $select.on('click', function () {
      $select.toggleClass('active');
    });
    $select.find('ul li:not(.currentVal)').on('click', function (e) {
      e.stopPropagation();
      $select.find('.currentVal').text($(this).text());
      $select.removeClass('active');
    });
  });
}

// input required
function inputRequired() {
  $('input[required]').on('input', function () {
    if ($(this).closest('form').find('input[required]').toArray().every(input => $(input).val().trim() !== '')) {
      $(this).closest('form').find('.btnForm').addClass('active');
    }
  });
}

// input date
function inputDate() {
  $('input[type=date]').on('change', function () {
    if ($(this).val() !== '') {
      $(this).css('color', '#333');
    } else {
      $(this).css('color', 'transparent');
    }
  });
}

// onlyNumb
function onlyNumb() {
  $(".onlyNumb").on('input', function () {
    const minLength = $(this).attr('minlength');
    const value = $(this).val().replace(/[^0-9]/g, "");
    $(this).val(value);
    if (minLength && $(this).val().length < minLength) {
      $(this).prop('required', true);
    }
  });
}

// qtyComponent
function qtyComponent() {
  function updateEstimatedTotal() {
    let total = 0;
    $('.cartFull ol .qtyComponent').each(function () {
      const unitPrice = parseInt($(this).data('price'));
      const qty = parseInt($(this).find('.qtyVal').val()) || 1;
      if (isNaN(unitPrice)) return;
      total += unitPrice * qty;
    });

    $('#estimatedTotal').text('$' + total.toLocaleString());
  }
  $('.qtyComponent').each(function () {
    const $qty = $(this);
    const $minus = $qty.find('[value="minus"]');
    const $plus = $qty.find('[value="plus"]');
    const $count = $qty.find('.qtyVal');
    const $price = $qty.next('.totalPrice');
    const unitPrice = parseInt($qty.data('price'));
    function updatePrice() {
      const qty = parseInt($count.val());
      $price.text('$' + (unitPrice * qty).toLocaleString());
      if ($qty.closest('.cartFull').length > 0) {
        updateEstimatedTotal();
      }
    }
    $minus.on('click', function () {
      const current = parseInt($count.val());
      const min = parseInt($count.attr('min')) || 1;
      if (current > min) {
        $count.val(current - 1);
        updatePrice();
      }
    });
    $plus.on('click', function () {
      const current = parseInt($count.val());
      if (current < 99) {
        $count.val(current + 1);
        updatePrice();
      }
    });
  });
}

// deleteItem
function deleteItem() {
  $('input[value=delete]').on('click', function () {
    $(this).closest('li').remove();
  });
}

// checkbox accept all
function checkboxAcceptAll() {
  $('#allAccept').on('change', function () {
    $('input[id*="accept"]').not('#allAccept').each(function () {
      $(this).next('label').toggleClass('active');
    });
  });
}

// inputRequiredCheckout
function inputRequiredCheckout() {
  $('.checkoutContainer section div:first-of-type')
    .find('input[required]').on('input', function () {
      const $section = $('.checkoutContainer section');
      const $firstDiv = $section.find('div:first-of-type');
      const $continueBtn = $firstDiv.find('input[value=Continue]');
      let allFilled = true;
      $firstDiv.find('input[required]').each(function () {
        if ($(this).val().trim() === '') {
          allFilled = false;
          return false;
        }
      });
      if (allFilled) {
        $continueBtn.addClass('active');
      } else {
        $continueBtn.removeClass('active');
      }
      $('input[value=Continue]').on('click', function () {
        if ($(this).hasClass('active')) {
          $('.checkoutContainer section > div:nth-of-type(2) div').css('display', 'block');
        }
      });
    });
}

// hamburgerMenu
function hamburgerMenu() {
  $('#hamburger').on('change', function() {
    $('header > div > div:nth-of-type(2) > nav')
      .toggleClass('active', $(this).is(':checked'));
    $('header').toggleClass('headerFixedBar');
  });
  $(document).off('click', 'header > div div:nth-of-type(2) nav > ul > li');
  $(document).on('click',
    'header > div div:nth-of-type(2) nav > ul > li',
    function() {
      const $li = $(this);
      const isActive = $li.hasClass('active');
      $('header > div div:nth-of-type(2) nav > ul > li').removeClass('active');
      if (!isActive) {
        $li.addClass('active');
      }
    }
  );
}

// imgHover
function imgHover() {
  $('.product-img').each(function () {
    var hoverSrc = this.src.replace(/(\.[^.]+)$/, '_hover$1');
    $('<img>').attr('src', hoverSrc);      
    $(this).data('origSrc', this.src).data('hoverSrc', hoverSrc);
  });
  $('.product-img').on('mouseenter', function () {
    this.src = $(this).data('hoverSrc');
  }).on('mouseleave', function () {
    this.src = $(this).data('origSrc');
  });
}