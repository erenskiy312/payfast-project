const langToggle = document.getElementById('lang-toggle');
const mobLangToggle = document.getElementById('mob-lang-toggle');
const langDropdown = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');
const arrow = document.querySelector('.arrow-indicator');

const networkToggle = document.getElementById('network-toggle');
const mobNetworkToggle = document.getElementById('mob-network-toggle');
const dropdownNetwork = document.querySelector('.dropdown-network');

const modalPromo = document.getElementById('modal-promo');
const openModalPromo = document.getElementById('openModalPromo');
const mobOpenModalPromo = document.getElementById('mob-openModalPromo');
const linkOpenModalPromo =document.getElementById('link-openModalPromo')
const closeModalPromo = document.getElementById('closeModalPromo');
const promoCode = document.getElementById('promo-code')
const copyBtnPromo = document.getElementById('copyBtn');

const promoCodeEN = document.getElementById('promo-code-en')
const copyBtnPromoEN = document.getElementById('copyBtn-en');

const promoCodeTR = document.getElementById('promo-code-tr')
const copyBtnPromoTR = document.getElementById('copyBtn-tr');

const modalKYC = document.getElementById('modal-kyc');
const openModalKYC = document.getElementById('openModalKYC');
const mobOpenModalKYC = document.getElementById('mob-openModalKYC')
const closeModalKYC = document.getElementById('closeModalKYC');

const burgerMenuIcon = document.querySelector('.burger-menu__icon')
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("active");
}

linkOpenModalPromo.addEventListener('click', () => {
  modalPromo.classList.add('show')
})

openModalPromo.addEventListener('click', () => {
  modalPromo.classList.add('show')
})

mobOpenModalPromo.addEventListener('click', () => {
  modalPromo.classList.add('show')
})

linkOpenModalPromo.addEventListener('click', () => {
  modalPromo.classList.add('show')
})

closeModalPromo.addEventListener('click', () => {
  modalPromo.classList.remove('show')
})

modalPromo.addEventListener('click', (e) => {
  if (e.target === modalPromo) {
    modalPromo.classList.remove('show')
  };
})

openModalKYC.addEventListener('click', () => {
  modalKYC.classList.add('show')
})

mobOpenModalKYC.addEventListener('click', () => {
  modalKYC.classList.add('show')
})

closeModalKYC.addEventListener('click', () => {
  modalKYC.classList.remove('show')
})

modalKYC.addEventListener('click', (e) => {
  if (e.target === modalKYC) {
    modalKYC.classList.remove('show')
  }
})

// Универсальная функция копирования
const copyText = (text, element, message) => {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = element.innerText;
    element.innerText = message;
    element.disabled = true;

    setTimeout(() => {
      element.innerText = originalText;
      element.disabled = false;
    }, 2000);
  });
};

// Обработчики для кнопок
copyBtnPromo?.addEventListener('click', () => {
  copyText(copyBtnPromo.innerText, copyBtnPromo, 'Скопировано');
});

promoCode?.addEventListener('click', () => {
  copyText(copyBtnPromo.innerHTML, copyBtnPromo, 'Скопировано');
});

copyBtnPromoEN?.addEventListener('click', () => {
  copyText(copyBtnPromoEN.innerText, copyBtnPromoEN, 'Copied');
});

promoCodeEN?.addEventListener('click', () => {
  copyText(copyBtnPromoEN.innerHTML, copyBtnPromoEN, 'Copied');
});

copyBtnPromoTR?.addEventListener('click', () => {
  copyText(copyBtnPromoTR.innerText, copyBtnPromoTR, 'Kopyalandı');
});

promoCodeTR?.addEventListener('click', () => {
  copyText(copyBtnPromoTR.innerHTML, copyBtnPromoTR, 'Kopyalandı');
});

  // Функция для закрытия всех открытых выпадающих списков
const closeAllDropdowns = () => {
    if (langDropdown.classList.contains('active')) {
      langDropdown.classList.remove('active');
    }
    if (dropdownNetwork.classList.contains('active')) {
      dropdownNetwork.classList.remove('active');
    }
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  };

  const toggleDropdown = (dropdown) => {
    closeAllDropdowns(); // Закрываем другие выпадающие списки
    dropdown.classList.toggle('active'); // Переключаем видимость текущего списка
  };
  
  // Обработчики событий

  langToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });

  mobLangToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });

  networkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });
  
  mobNetworkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });

  burgerMenuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(menu);
  });
  
  document.addEventListener('click', closeAllDropdowns);