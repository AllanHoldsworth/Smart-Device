import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const moreButton = document.querySelector('.about__button');
  const hiddenText = document.querySelector('.about__hidden-text');
  const anchor = document.querySelector('a[href="#feedback"]');
  const mediaQuery = window.matchMedia('(max-width: 767px)')
  const consultButton = document.querySelector('.intro__link');
  const hiddenMobileText = document.querySelector('.about__hidden-mobile-text');
  const productsTitle = document.querySelector('.products__title');
  const accordionTitles = document.querySelectorAll('.accordion__title');
  const modalButton = document.querySelector('.header-nav__button');
  const modal = document.querySelector('.modal');
  const modalOverlay = modal.querySelector('.modal__overlay');
  const closeButton = modal.querySelector('.modal__close-btn');
  const focusedInput = modal.querySelector('input[type="text"]');
  const accordion = document.querySelector('.accordion');

  accordion.classList.remove('accordion--no-js');

  if (modalButton && modal) {
    modalButton.addEventListener('click', () => {
      modal.classList.add('modal--is-active');
      focusedInput.focus();
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'visible';
      document.body.style.top = `-${window.scrollY}px`;
    });
  }

  if(modalOverlay) {
    modalOverlay.addEventListener('click', (evt) => {
      if(evt.target === modalOverlay) {
        modal.classList.remove('modal--is-active');
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    });
  }

  if(closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('modal--is-active');
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    })
  }

  if (accordionTitles) {
    accordionTitles.forEach((title, i) => {
      title.addEventListener('click', () => {
        title.classList.toggle('active');
        const height = title.nextElementSibling.scrollHeight;
        console.log(height);
        if (title.classList.contains('active')) {
          title.nextElementSibling.style.height = `${height}px`;
          title.nextElementSibling.style.marginBottom = '11px';
        } else {
          title.nextElementSibling.style.height = '0px';
          title.nextElementSibling.style.marginBottom = '0px';
        }
        removeOpen(i);
      });
    });
  }


  function removeOpen(index) {
    accordionTitles.forEach((title, i) => {
      if (index != i) {
        title.classList.remove('active');
        title.nextElementSibling.style.height = '0px';
        title.nextElementSibling.style.marginBottom = '0px';
      }
    });
  }

  if (anchor) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    })
  }

  if (consultButton || productsTitle) {
    if (mediaQuery.matches) {
      consultButton.textContent = "бесплатная консультация";
      productsTitle.textContent = "Товары и услуги Smart Device"
    } else {
      consultButton.textContent = "Получить бесплатную консультацию";
      productsTitle.textContent = "Smart Device предлагает следующие товары и услуги"
    }
    mediaQuery.addEventListener('change', () => {
      if (mediaQuery.matches) {
        consultButton.textContent = "бесплатная консультация";
        productsTitle.textContent = "Товары и услуги Smart Device"
      } else {
        consultButton.textContent = "Получить бесплатную консультацию";
        productsTitle.textContent = "Smart Device предлагает следующие товары и услуги"
      }
    });
  }

  if (moreButton && (hiddenText || hiddenMobileText)) {
    let isHidden = true;
    moreButton.addEventListener('click', () => {
    if (isHidden) {
      hiddenText.style.display = "block";
      hiddenMobileText.style.display = "block"
      moreButton.textContent = "Скрыть";
      isHidden = false;
    } else if (mediaQuery.matches) {
      hiddenText.style.display = "none";
      hiddenMobileText.style.display = "none"
      moreButton.textContent = "Подробнее";
      isHidden = true;
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
