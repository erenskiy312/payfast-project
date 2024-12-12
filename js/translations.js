const translations = {
    en: {
      nav_reviews: "Service reviews",
      transfer_to_card: "Make a transfer",
      introduction_title: `Money transfers without borders`,
      highlight: "transfers",
      button_transfer: "Transfer",
      button_conversion: "Conversion",
      features_title: "Why you choose us",
      feature_1_title: "Instant rate calculation",
      feature_1_descr: "Find out the current exchange rate and transfer amount in real time",
      feature_2_title: "Ease of use",
      feature_2_descr: "The interface is intuitive, even if you are using our service for the first time",
      feature_3_title: "Fast application processing",
      feature_3_descr: "Transfers are processed by a manager within 30 minutes",
      feature_4_title: "Transparent fees",
      feature_4_descr: "All fee information is provided upfront on the confirmation screen",
      process_title: "How it works",
      step_1_title: "Currency conversion",
      step_1_descr: "Choose the desired currency pair, for example, RUB-UAH, if the transfer is directed to Ukraine",
      help_title: "Need help?",
      help_descr: "Write to us, we are online! Support specialist will answer all your questions.",
      help_btn: "Open chat",
      hero_title: "Ease of payment, no unnecessary formalities",
      hero_btn_telegram: "TELEGRAM",
      hero_btn_conversion: "TRANSFER NOW",
    },
    tr: {
      nav_reviews: "Hizmet incelemeleri",
      transfer_to_card: "Transfer yap",
      introduction_title: `Sınır Tanımayan Para Transferleri`,
      highlight: "Transferleri",
      button_transfer: "Gönder",
      button_conversion: "Dönüşüm",
      features_title: "Neden bizim hizmetimizi seçmelisiniz?",
      feature_1_title: "Anlık kur hesaplama",
      feature_1_descr: "Gerçek zamanlı olarak güncel kuru ve transfer miktarını öğrenin",
      feature_2_title: "Kullanım kolaylığı",
      feature_2_descr: "Arayüzümüz sezgiseldir, ilk kez kullansanız bile",
      feature_3_title: "Hızlı işlem işleme",
      feature_3_descr: "Transferler 30 dakika içinde bir yönetici tarafından işlenir",
      feature_4_title: "Şeffaf komisyonlar",
      feature_4_descr: "Komisyon bilgileri önceden, onay ekranında görüntülenir",
      process_title: "Bu nasıl çalışır?",
      step_1_title: "Para birimi dönüştürme",
      step_1_descr: "Gerekli döviz çiftini seçin, örneğin RUB-UAH, eğer transfer Ukrayna'ya yapılacaksa",
      help_title: "Yardıma mı ihtiyacınız var?",
      help_descr: "Bize yazın, çevrimiçiyiz! Destek uzmanımız tüm sorularınızı yanıtlayacaktır.",
      help_btn: "Sohbeti aç",
      hero_title: "Fazladan formaliteler olmadan ödeme kolaylığı",
      hero_btn_telegram: "TELEGRAM",
      hero_btn_conversion: "TRANSFER YAP",
    },
  };


  function changeLanguage(lang) {
    // Перебираем все элементы с data-translate
    translatableElements.forEach((el) => {
      const key = el.getAttribute("data-translate"); // Получаем ключ
      if (lang === "ru") {
        // Если русский язык, то просто оставляем текст из HTML
        el.innerHTML = el.dataset.original || el.innerHTML;
      } else {
        // Для других языков меняем текст на переведённый
        el.innerHTML = translations[lang][key] || el.innerHTML;
      }
    });
  }
  
  // Устанавливаем язык по умолчанию
  let currentLang = "ru"; // Начальный язык - русский
  changeLanguage(currentLang);
  
  // Добавляем обработчики событий на кнопки переключения
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang; // Получаем язык из кнопки
      changeLanguage(currentLang); // Переключаем язык
  });
  })
  
  // Сохраняем оригинальные тексты элементов, чтобы можно было вернуться к ним
  document.querySelectorAll("[data-translate]").forEach((el) => {
    el.dataset.original = el.innerHTML;
  });