(function changeLangText() {
  let isEn = false;
  const btnLang = document.querySelector('.header_btn_lang');

  btnLang.onclick = (e) => handleOnClick(e);

  function handleOnClick(e) {
    const target = e.target;

    if (isEn) {
      target.textContent = 'RU';
    } else {
      target.textContent = 'EN';
    }

    isEn = !isEn;
  }
})();
