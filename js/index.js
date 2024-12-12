const langToggle = document.getElementById('lang-toggle');
const langDropdown = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');
const arrow = document.querySelector('.arrow-indicator');

const networkToggle = document.getElementById('network-toggle')
const dropdownNetwork = document.querySelector('.dropdown-network')

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
  langToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });
  
  networkToggle.addEventListener('click', (event) => {
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

langToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(langDropdown);
  });
  
  // Навешиваем обработчики событий
  networkToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleDropdown(dropdownNetwork);
  });
  
  document.addEventListener('click', closeAllDropdowns);