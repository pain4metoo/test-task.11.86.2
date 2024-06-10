(function toggleBurgerMenu() {
  let isShowMenu = false;

  const burger = document.querySelector('.header_burger');
  burger.onclick = () => handleOnClick();

  const burgetSticks = document.querySelectorAll('.header_burger_item');
  const headerBtnMob = document.querySelector('.header_btn_mob');
  const headerBtnLang = document.querySelector('.header_btn_lang');

  const headerNavItems = document.querySelectorAll('.header_nav_item');
  Array.from(headerNavItems).map((el) => {
    el.onclick = () => handleOnClick();
  });

  const headerInner = document.querySelector('.header_inner');
  const blackout = document.querySelector('.bg');

  function handleOnClick() {
    const windowInnerWidth = window.innerWidth;

    isShowMenu = !isShowMenu;

    blackout.classList.toggle('bg_active');
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
    if (windowInnerWidth > 900) {
      blackout.classList.remove('bg_active');
    } else {
      if (isShowMenu) {
        blackout.classList.add('bg_active');
      }
    }
  };
})();
