// 모든 popup & panel
document.addEventListener('DOMContentLoaded', () => {
  const popups = {
    popupSignIn: document.getElementById('popupSignIn'),
    popupForgottenPassword: document.getElementById('popupForgottenPassword'),
    popupCreateAccount: document.getElementById('popupCreateAccount'),
    emailSignUpBox: document.getElementById('emailSignUpBox'),
    popupAddToCart: document.getElementById('popupAddToCart'),
    popupChangePassword: document.getElementById('popupChangePassword'),
    popupCancelOrder: document.getElementById('popupCancelOrder'),
    popupExchangeRequest: document.getElementById('popupExchangeRequest'),
    popupTrackOrder: document.getElementById('popupTrackOrder'),
    popupAddNewAddress: document.getElementById('popupAddNewAddress'),
    popupEditAddress: document.getElementById('popupEditAddress')
  };
  const hoverPanels = ['panelCustomerService', 'panelAccountLogout'];
  const clickPanels = ['panelSearchBar', 'panelMyCart'];

  /* ════════════════════════════════
     전환 맵 — 열릴 때 닫혀야 하는 팝업
  ════════════════════════════════ */
  const switchMap = {
    popupForgottenPassword: 'popupSignIn',
    popupCreateAccount: 'popupSignIn',
  };

  /* ════════════════════════════════
     공통 함수
  ════════════════════════════════ */

  /* 특정 팝업 열기 */
  function openPopup(id) {
    if (popups[id]) popups[id].classList.add('active');
  }

  /* 특정 팝업 닫기 */
  function closePopup(id) {
    if (popups[id]) popups[id].classList.remove('active');
  }

  /* 모든 팝업 닫기 */
  function closeAllPopups() {
    Object.values(popups).forEach(popup => {
      if (popup) popup.classList.remove('active');
    });
  }

  /* 모든 패널 닫기 */
  function closeAllPanels() {
    [...hoverPanels, ...clickPanels].forEach(panelId => {
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.remove('active');
    });
  }

  /* 모두 닫기 */
  function closeAll() {
    closeAllPopups();
    closeAllPanels();
    document.querySelectorAll('[id*="popupSize"].active')
      .forEach(popup => popup.classList.remove('active'));
  }

  /* ════════════════════════════════
     팝업 — data-panel 버튼 처리
  ════════════════════════════════ */
  document.querySelectorAll('[data-panel]').forEach(btn => {
    const targetId = btn.dataset.panel;

    /* popupSize 타입 — click */
    if (targetId.includes('popupSize')) {
      btn.addEventListener('click', () => {
        const popup = document.getElementById(targetId);
        if (popup) popup.classList.add('active');
      });
      return; /* ★ 아래 로직 실행 안 함 */
    }

    /* hover 패널 타입 — mouseenter/mouseleave */
    if (hoverPanels.includes(targetId)) {
      const panel = document.getElementById(targetId);
      if (!panel) return;

      btn.addEventListener('mouseenter', () => {
        panel.classList.add('active');
      });
      btn.addEventListener('mouseleave', () => {
        panel.classList.remove('active');
      });
      panel.addEventListener('mouseenter', () => {
        panel.classList.add('active');
      });
      panel.addEventListener('mouseleave', () => {
        panel.classList.remove('active');
      });
      return; /* ★ 아래 로직 실행 안 함 */
    }

    /* click 패널 타입 */
    if (clickPanels.includes(targetId)) {
      const panel = document.getElementById(targetId);
      if (!panel) return;

      btn.addEventListener('click', () => {
        panel.classList.add('active');
      });
      return; /* ★ 아래 로직 실행 안 함 */
    }

    /* 일반 팝업 타입 — click */
    btn.addEventListener('click', () => {
      if (switchMap[targetId]) {
        closePopup(switchMap[targetId]); /* 전환 — 지정 팝업 닫기 */
      }
      openPopup(targetId);
    });
  });

  /* ════════════════════════════════
     닫기 버튼 — 전체 처리
  ════════════════════════════════ */
  document.querySelectorAll('.btn_close').forEach(btn => {

    /* popupSize 닫기 */
    const sizePopup = btn.closest('[id*="popupSize"]');
    if (sizePopup) {
      btn.addEventListener('click', () => {
        sizePopup.classList.remove('active');
      });
      return;
    }

    /* click 패널 닫기 */
    const clickPanel = btn.closest(
      clickPanels.map(id => `#${id}`).join(', ')
    );
    if (clickPanel) {
      btn.addEventListener('click', () => {
        clickPanel.classList.remove('active');
      });
      return;
    }

    /* 일반 팝업 닫기 */
    const popup = btn.closest(
      Object.keys(popups).map(id => `#${id}`).join(', ')
    );
    if (popup) {
      btn.addEventListener('click', () => {
        closePopup(popup.id);
      });
    }
  });

  /* ════════════════════════════════
     ESC 키 — 전체 닫기
  ════════════════════════════════ */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

});

// input[required]
document.addEventListener('DOMContentLoaded', () => {
  function initFormValidation(container) {
    if (!container) return;
    const inputs = container.querySelectorAll('input[required]');
    const btn = container.querySelector('.btnForm');
    if (!btn) return;
    function check() {
      const allFilled = [...inputs].every(input =>
        input.value.trim() !== ''
      );
      btn.classList.toggle('active', allFilled);
    }
    inputs.forEach(input => input.addEventListener('input', check));
    check();
  }
  initFormValidation(document.getElementById('popupSignIn'));
  initFormValidation(document.getElementById('popupForgottenPassword'));
  initFormValidation(document.getElementById('popupNewPassword'));
  initFormValidation(document.getElementById('popupCreateAccount'));
  initFormValidation(document.getElementById('emailSignUpBox'));
  initFormValidation(document.getElementById('popupAddNewAddress'));
  initFormValidation(document.getElementById('popupEditAddress'));
  initFormValidation(document.querySelector('.editInformation'));
});

// qtyComponent
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.qtyComponent').forEach(qty => {
    const minusBtn = qty.querySelector('[value="minus"]');
    const plusBtn  = qty.querySelector('[value="plus"]');
    const input    = qty.querySelector('.qtyVal');
    minusBtn.addEventListener('click', () => {
      const current = parseInt(input.value);   
      const min = parseInt(input.min) || 1;
      if (current > min) {                     
        input.value = current - 1;
      }
    });
    plusBtn.addEventListener('click', () => {
      const current = parseInt(input.value);    
      input.value = current + 1;
    });
  });
});

// input=date
document.addEventListener('DOMContentLoaded', () => {

  const dateLabel = document.querySelector(
    '.editInformation form ul li:nth-child(5) label'
  );
  const dateInput = document.getElementById('birthDay');

  if (dateLabel && dateInput) {

    /* ★ label 클릭 시 캘린더 강제로 열기 */
    dateLabel.addEventListener('click', (e) => {
      e.preventDefault();        /* ★ label 기본 동작 막기 */
      dateInput.showPicker();    /* ★ 캘린더 열기 */
    });

    /* ★ 날짜 선택 후 label에 표시 */
    dateInput.addEventListener('change', () => {
      if (dateInput.value) {
        dateLabel.textContent = dateInput.value;
        dateLabel.style.color = '#333';
      } else {
        dateLabel.textContent = 'Date of birth(optional)';
        dateLabel.style.color = '#666';
      }
    });
  }

});

// ==========================

// header scrolled
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});

// popupSignIn
document.addEventListener('DOMContentLoaded', () => {
  const signInPopup = document.getElementById('popupSignIn');
  document.querySelectorAll('[data-panel="popupSignIn"]')
    .forEach(btn => btn.addEventListener('click', openSignIn));
  function openSignIn() {
    signInPopup.classList.add('active');
  }
  document.querySelector('#popupSignIn .btn_close')
    .addEventListener('click', closeSignIn);
  function closeSignIn() {
    signInPopup.classList.remove('active');
  }
});

// popupForgottenPassword
document.addEventListener('DOMContentLoaded', () => {
  const forgottenPasswordPopup = document.getElementById('popupForgottenPassword');
  const signInPopup = document.getElementById('popupSignIn');
  document.querySelectorAll('[data-panel="popupForgottenPassword"]')
    .forEach(btn => btn.addEventListener('click',
      openForgottenPassword));
  function openForgottenPassword() {
    if (signInPopup) {
      signInPopup.classList.remove('active');
    }
    if (forgottenPasswordPopup) {
      forgottenPasswordPopup.classList.add('active');
    }
  }
  const closeBtn = document.querySelector('#popupForgottenPassword .btn_close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeForgottenPassword);
  }
  function closeForgottenPassword() {
    if (forgottenPasswordPopup) {
      forgottenPasswordPopup.classList.remove('active');
    }
  }
});

// popupNewPassword
document.addEventListener('DOMContentLoaded', () => {
  const newPasswordPopup = document.getElementById('popupNewPassword');
  document.querySelectorAll('[data-panel="popupNewPassword"]')
    .forEach(btn => btn.addEventListener('click', openNewPassword));
  function openNewPassword() {
    newPasswordPopup.classList.add('active');
  }
  document.querySelector('#popupNewPassword .btn_close')
    .addEventListener('click', closeNewPassword);
  function closeNewPassword() {
    newPasswordPopup.classList.remove('active');
  }
});

// popupCreateAccount
document.addEventListener('DOMContentLoaded', () => {
  const createAccountPopup = document.getElementById('popupCreateAccount');
  const signInPopup = document.getElementById('popupSignIn');
  document.querySelectorAll('[data-panel="popupCreateAccount"]')
    .forEach(btn => btn.addEventListener('click', openCreateAccount));
  function openCreateAccount() {
    if (signInPopup) {
      signInPopup.classList.remove('active');
    }
    if (createAccountPopup) {
      createAccountPopup.classList.add('active');
    }
  }
  const closeBtn = document.querySelector('#popupCreateAccount .btn_close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCreateAccount);
  }
  function closeCreateAccount() {
    if (createAccountPopup) {
      createAccountPopup.classList.remove('active');
    }
  }
});

// emailSignUpBox
document.addEventListener('DOMContentLoaded', () => {
  const emailSignUpPopup = document.getElementById('emailSignUpBox');
  document.querySelectorAll('[data-panel="emailSignUpBox"]')
    .forEach(btn => btn.addEventListener('click', openEmailSignUp));
  function openEmailSignUp() {
    emailSignUpPopup.classList.add('active');
  }
  document.querySelector('#emailSignUpBox .btn_close')
    .addEventListener('click', closeEmailSignUp);
  function closeEmailSignUp() {
    emailSignUpPopup.classList.remove('active');
  }
});

// popupAddToCart
document.addEventListener('DOMContentLoaded', () => {
  const addToCartPopup = document.getElementById('popupAddToCart');
  document.querySelectorAll('[data-panel="popupAddToCart"]')
    .forEach(btn => btn.addEventListener('click', openAddToCart));
  function openAddToCart() {
    addToCartPopup.classList.add('active');
  }
  document.querySelector('#popupAddToCart .btn_close')
    .addEventListener('click', closeAddToCart);
  function closeAddToCart() {
    addToCartPopup.classList.remove('active');
  }
});

// panelCustomerService + header
document.addEventListener('DOMContentLoaded', () => {
  const customerServicePanel = document.getElementById('panelCustomerService');
  const fixedHeader = document.querySelector('header');
  document.querySelectorAll('[data-panel="panelCustomerService"]')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        customerServicePanel.classList.toggle('active');
        fixedHeader.classList.toggle('headerFixedBar');
      });
    });
});

// panelAccountLogout + header
document.addEventListener('DOMContentLoaded', () => {
  const AccountLogoutPanel = document.getElementById('panelAccountLogout');
  const fixedHeader = document.querySelector('header');
  document.querySelectorAll('[data-panel="panelAccountLogout"]')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        AccountLogoutPanel.classList.toggle('active');
        fixedHeader.classList.toggle('headerFixedBar');
      });
    });
});

// panelSearchBar + header
document.addEventListener('DOMContentLoaded', () => {
  const searchBarPanel = document.getElementById('panelSearchBar');
  const fixedHeader = document.querySelector('header');
  document.querySelectorAll('[data-panel="panelSearchBar"]')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        searchBarPanel.classList.add('active');
        fixedHeader.classList.add('headerFixedBar');
      });
    });
  document.querySelector('#panelSearchBar .btn_close')
    .addEventListener('click', () => {
      searchBarPanel.classList.remove('active');
      fixedHeader.classList.remove('headerFixedBar');
    });
});

// panelMyCart
document.addEventListener('DOMContentLoaded', () => {
  const myCartPanel = document.getElementById('panelMyCart');
  document.querySelectorAll('[data-panel="panelMyCart"]')
    .forEach(btn => btn.addEventListener('click', openMyCart));
  function openMyCart() {
    myCartPanel.classList.add('active');
  }
  document.querySelector('#panelMyCart .btn_close')
    .addEventListener('click', closeMyPanel);
  function closeMyPanel() {
    myCartPanel.classList.remove('active');
  }
});

// popupSize
document.addEventListener('DOMContentLoaded', () => {
  const sizePopup = document.querySelector('[id*="popupSize"]');
  document.querySelectorAll('[data-panel*="popupSize"]')
    .forEach(btn => btn.addEventListener('click', openPopupSize));
  function openPopupSize() {
    sizePopup.classList.add('active');
  }
  document.querySelector('[id*="popupSize"] .btn_close')
    .addEventListener('click', closePopupSize);
  function closePopupSize() {
    sizePopup.classList.remove('active');
  }
});

// popupChangePassword
document.addEventListener('DOMContentLoaded', () => {
  const changePasswordPopup = document.getElementById('popupChangePassword');
  document.querySelectorAll('[data-panel="popupChangePassword"]')
    .forEach(btn => btn.addEventListener('click', openChangePassword));
  function openChangePassword() {
    changePasswordPopup.classList.add('active');
  }
  document.querySelector('#popupChangePassword .btn_close')
    .addEventListener('click', closeChangePassword);
  function closeChangePassword() {
    changePasswordPopup.classList.remove('active');
  }
});

// popupCancelOrder
document.addEventListener('DOMContentLoaded', () => {
  const CancelOrderPopup = document.getElementById('popupCancelOrder');
  document.querySelectorAll('[data-panel="popupCancelOrder"]')
    .forEach(btn => btn.addEventListener('click', openCancelOrder));
  function openCancelOrder() {
    CancelOrderPopup.classList.add('active');
  }
  document.querySelector('#popupCancelOrder .btn_close')
    .addEventListener('click', closeCancelOrder);
  function closeCancelOrder() {
    CancelOrderPopup.classList.remove('active');
  }
});

// popupExchangeRequest
document.addEventListener('DOMContentLoaded', () => {
  const ExcnangeRequestPopup = document.getElementById('popupExchangeRequest');
  document.querySelectorAll('[data-panel="popupExchangeRequest"]')
    .forEach(btn => btn.addEventListener('click', openExchangeRequest));
  function openExchangeRequest() {
    ExcnangeRequestPopup.classList.add('active');
  }
  document.querySelector('#popupExchangeRequest .btn_close')
    .addEventListener('click', closeExchangeRequest);
  function closeExchangeRequest() {
    ExcnangeRequestPopup.classList.remove('active');
  }
});

// popupTrackOrder
document.addEventListener('DOMContentLoaded', () => {
  const trackOrderPopup = document.getElementById('popupTrackOrder');
  document.querySelectorAll('[data-panel="popupTrackOrder"]')
    .forEach(btn => btn.addEventListener('click', openTrackOrder));
  function openTrackOrder() {
    trackOrderPopup.classList.add('active');
  }
  document.querySelector('#popupTrackOrder .btn_close')
    .addEventListener('click', closeTrackOrder);
  function closeTrackOrder() {
    trackOrderPopup.classList.remove('active');
  }
});

// popupAddNewAddress
document.addEventListener('DOMContentLoaded', () => {
  const addNewAddressPopup = document.getElementById('popupAddNewAddress');
  document.querySelectorAll('[data-panel="popupAddNewAddress"]')
    .forEach(btn => btn.addEventListener('click', openAddNewAddress));
  function openAddNewAddress() {
    addNewAddressPopup.classList.add('active');
  }
  document.querySelector('#popupAddNewAddress .btn_close')
    .addEventListener('click', closeAddNewAddress);
  function closeAddNewAddress() {
    addNewAddressPopup.classList.remove('active');
  }
});

// popupEditAddress
document.addEventListener('DOMContentLoaded', () => {
  const editAddressPopup = document.getElementById('popupEditAddress');
  document.querySelectorAll('[data-panel="popupEditAddress"]')
    .forEach(btn => btn.addEventListener('click', openEditAddress));
  function openEditAddress() {
    editAddressPopup.classList.add('active');
  }
  document.querySelector('#popupEditAddress .btn_close')
    .addEventListener('click', closeEditAddress);
  function closeEditAddress() {
    editAddressPopup.classList.remove('active');
  }
});

// tabUI
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.chooseBox').forEach(chooseBox => {
    const tabUI = chooseBox.querySelector('.tabUI');
    const items = tabUI.querySelectorAll('li');
    const btn = chooseBox.querySelector('.btnSelectSize, .btnAddToCart');
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        item.classList.toggle('active');
        btn.classList.remove('btnSelectSize');
        btn.classList.add('btnAddToCart');
        btn.value = 'Add to cart';
        btn.setAttribute('data-panel', 'popupAddToCart')
        btn.addEventListener('click', openAddToCartPopup)
      });
      function openAddToCartPopup() {
        const popup = document.getElementById('popupAddToCart');
        if (popup) popup.classList.add('active');
      }
    });
  });
});

// thumbPager
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.thumbPager').forEach(select => {
    select.addEventListener('click', () => {
      select.classList.toggle('active');
    });
  });
});

// accComponent
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accComponent').forEach(select => {
    select.addEventListener('click', () => {
      select.classList.toggle('active');
    });
  });
});

// toggleBtn[input type=password]
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggleBtn').forEach(select => {
    select.addEventListener('click', () => {
      select.classList.toggle('active');
    });
  });
});

// bookmark
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.material-symbols-outlined').forEach(select => {
    select.addEventListener('click', () => {
      select.classList.toggle('active');
    });
  });
});

// btn_back
document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.querySelector('.btn_back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      history.back();
    });
  }
});

// selectComponent
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.selectComponent').forEach(select => {
    const currentVal = select.querySelector('.currentVal');
    const options = select.querySelectorAll('ul li:not(.currentVal)');
    select.addEventListener('click', () => {
      select.classList.toggle('active');
    });
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        currentVal.textContent = option.textContent;
        select.classList.remove('active');
      });
    });
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove('active');
      }
    });
  });
});


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