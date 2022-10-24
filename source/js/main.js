import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const moreButton = document.querySelector('.about__button');
  const hiddenText = document.querySelector('.about__hidden-text');
  const anchor = document.querySelector('a[href="#feedback"]');

  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })

  if (moreButton && hiddenText) {
  let isHidden = true;
  moreButton.addEventListener('click', () => {
    if (isHidden) {
      hiddenText.style.display = "block";
      moreButton.textContent = "Скрыть";
      isHidden = false;
    } else {
      hiddenText.style.display = "none";
      moreButton.textContent = "Подробнее";
      isHidden = true;
    }
  });
  }

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
