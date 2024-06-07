(function toggleBurgerMenu() {
  let isShowBurger = false;
  const burger = document.querySelector('.header_burger');
  const burgetSticks = document.querySelectorAll('.header_burger_item');
  const headerBtnMob = document.querySelector('.header_btn_mob');
  const headerBtnLang = document.querySelector('.header_btn_lang');

  burger.onclick = () => handleOnClick();

  const headerInner = document.querySelector('.header_inner');

  function handleOnClick() {
    const windowInnerWidth = window.innerWidth;

    headerInner.classList.toggle('header_nav_show');
    burger.classList.toggle('header_burger_fix');
    headerBtnMob.classList.toggle('header_btn_mob_toggle');
    burgetSticks.forEach((el) => {
      el.classList.toggle('header_burger_item_rotate');
    });

    if (windowInnerWidth <= 420) {
      headerBtnMob.classList.remove('header_btn_mob_toggle');
      headerBtnLang.style.display = 'none';
    } else {
      headerBtnLang.style.display = 'block';
    }
  }

  window.onresize = () => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth <= 420) {
      headerBtnMob.classList.remove('header_btn_mob_toggle');
      headerBtnLang.style.display = 'none';
    } else {
      headerBtnLang.style.display = 'block';
    }
  };
})();
