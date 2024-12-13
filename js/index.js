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
const closeModalPromo = document.getElementById('closeModalPromo');
const promoCode = document.getElementById('promo-code')
const copyBtnPromo = document.getElementById('copyBtn');

const modalKYC = document.getElementById('modal-kyc');
const openModalKYC = document.getElementById('openModalKYC');
const closeModalKYC = document.getElementById('closeModalKYC');

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

openModalPromo.addEventListener('click', () => {
  modalPromo.classList.add('show')
})

mobOpenModalPromo.addEventListener('click', () => {
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

closeModalKYC.addEventListener('click', () => {
  modalKYC.classList.remove('show')
})

modalKYC.addEventListener('click', (e) => {
  if (e.target === modalKYC) {
    modalKYC.classList.remove('show')
  }
})

const copyText = (text, element) => {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = element.innerText;
    element.innerText = 'Скопировано';
    element.disabled = true;

    setTimeout(() => {
      element.innerText = originalText;
      element.disabled = false;
    }, 2000)
  });
}

copyBtnPromo.addEventListener('click', () => {
  copyText(copyBtnPromo.innerText, copyBtnPromo,);
})

promoCode.addEventListener('click', () => {
  copyText(copyBtnPromo.innerHTML, copyBtnPromo)
})

let currentLang = 'ru';

function updateLanguageIndicator(selectedLang) {
    langOptions.forEach((option) => {
      option.classList.remove('active'); // Удаляем класс активного языка
      if (option.dataset.lang === selectedLang) {
        option.classList.add('active'); // Добавляем класс активному языку
      }
    });
  }
  
  // Устанавливаем текущий язык при загрузке
  updateLanguageIndicator(currentLang);
  
  // Выбор языка
  langOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      const selectedLang = e.target.closest('.lang-option').dataset.lang;
      currentLang = selectedLang;
      updateLanguageIndicator(currentLang);
      console.log(`Selected language: ${currentLang}`);
      langDropdown.parentNode.classList.remove('active');
    });
  });

  // Функция для закрытия всех открытых выпадающих списков
const closeAllDropdowns = () => {
    if (langDropdown.classList.contains('active')) {
      langDropdown.classList.remove('active');
    }
    if (dropdownNetwork.classList.contains('active')) {
      dropdownNetwork.classList.remove('active');
    }
  };

  const toggleDropdown = (dropdown) => {
    closeAllDropdowns(); // Закрываем другие выпадающие списки
    dropdown.classList.toggle('active'); // Переключаем видимость текущего списка
  };
  
  // Обработчики событий
  mobLangToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });
  
  mobNetworkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });

  mobNetworkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });

  const closeDropdownLangOnOutsideClick = (event) => {
    if (
      !event.target.closest('.language-selector') && // Если клик произошел не внутри .network
      langDropdown.classList.contains('active') 
    ) {
      langDropdown.classList.remove('active');
    }
  };
  
  // Закрытие выпадающего списка при клике вне области
  const closeDropdownNetworkOnOutsideClick = (event) => {
    if (
      !event.target.closest('.network') && // Если клик произошел не внутри .network
      dropdownNetwork.classList.contains('active') 
    ) {
      dropdownNetwork.classList.remove('active');
    }
  };

  mobLangToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });
  
  // Навешиваем обработчики событий
  mobNetworkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });
  
  document.addEventListener('click', closeAllDropdowns);