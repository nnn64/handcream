// ナビゲーション

$(function () {
  var btn = $('.js-nav__btn');
  var nav = $('.nav');

  btn.on("click", function () {
    btn.toggleClass('is-active');
    nav.toggleClass('is-show');
  });

  $('.nav__list').click(function () {
    if(nav.hasClass('is-show')) {
      btn.removeClass('is-active');
      nav.removeClass('is-show');
    }
  });
});

// スクロールで表示

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const pagetop = this.document.querySelector(".pagetop");
  const pcNav = this.document.querySelector("nav");
  header.classList.toggle("scroll", window.scrollY > 300);
  pcNav.classList.toggle("scroll", window.scrollY > 300);
  pagetop.classList.toggle("scroll", window.scrollY > 500);
});

// アコーディオン

$('.accordion-title').on('click', function() {
  var findElm = $(this).next(".accordion__box");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});