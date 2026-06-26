document.addEventListener("DOMContentLoaded", () => {
  // --- Модальне вікно для ігор ---
  const gameModal = document.getElementById("gameModal");
  const gameModalContent = document.getElementById("gameModalContent");
  const gameContent = document.getElementById("gameContent");
  const closeGameModal = document.getElementById("closeGameModal");

  function openGameModal(html) {
    gameContent.innerHTML = html;
    gameModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeGame() {
    gameModal.style.display = "none";
    gameContent.innerHTML = "";
    document.body.style.overflow = "auto";
  }
  closeGameModal.addEventListener("click", closeGame);
  gameModal.addEventListener("click", (e) => {
    if (e.target === gameModal) closeGame();
  });

  // --- Дані для ігор ---
  const guessWords = [
    "Голгофа",
    "Пасха",
    "Манна",
    "Галілея",
    "Вифлеєм",
    "Єрусалим",
    "Йордан",
    "Синай",
    "Єрихон",
    "Сіон",
    "Назарет",
    "Єден",
    "Єгипет",
    "Ковчег",
    "Хрест",
    "Воскресіння",
    "Розп'яття",
    "Тайна вечеря",
    "Вхід до Єрусалима",
    "Нагірна проповідь",
    "Десять заповідей",
    "Перехід через Червоне море",
    "Вавилонська вежа",
    "Втрачена вівця",
    "Блудний син",
    "Добрий Самарянин",
    "Сіяч",
    "Гірчичне зерно",
    "П'ять хлібів і дві рибини",
    "Неопалима купина",
    "Ковчег Завіту",
    "Скрижалі",
    "Зірка Вифлеємська",
    "Хрещення у Йордані",
    "Спокуса в пустелі",
    "Вигнання торгівців із храму",
    "Нагодування п'яти тисяч",
    "Преображення на горі",
    "Різдво",
    "Великдень",
    "П'ятидесятниця",
    "Янгол",
    "Змій-спокусник",
    "Заборонений плід",
    "Дух Святий",
    "Голуб",
    "Вогненні язики",
    "Храм",
    "Пустеля",
    "Хліб життя",
    "Чудо",
    "Зцілення сліпого",
    "Воскресіння з мертвих",
    "Вівці і кози",
    "Пастир і вівці",
    "Молоко і мед",
    "Земля обітована",
    "Манна небесна",
    "Вода жива",
    "Вечеря Господня",
    "Милість",
    "Покаяння",
    "Дари Духа",
    "Притча",
    "Молитва",
    "Пастир",
    "Учень",
    "Скинія",
    "Піст",
    "Благодать",
    "Хрещення",
    "Причастя",
    "Євангеліє",
    "Спасіння",
    "Пророк",
    "Апостол",
    "Свідчення",
    "Жертва",
    "Прощення",
    "Смирення",
    "Хвала",
    "Поклоніння",
    "Заповідь",
    "Завіт",
    "Обіцянка",
    "Місія",
    "Церква",
    "Спільнота",
    "Служіння",
    "Вірність",
    "Надія",
    "Терпіння",
    "Мудрість",
    "Послух",
    "Освячення",
    "Єдність",
    "Суд",
    "Вічність",
    "Гріх",
    "Спокуса",
    "Спокутування",
    "Відродження",
    "Святість",
    "Любов до ближнього",
    "Молитва заступництва",
    "Щоденний хрест",
    "Таланти",
    "Плоди Духа",
    "Золоте правило",
    "Воля Божа",
    "Духовна зброя",
    "Страх Господній",
    "Каяття серця",
  ];
  const quizQuestions = [
    { q: "Хто побудував ковчег?", a: "Ной" },
    { q: "Де народився Ісус?", a: "Вифлеєм" },
    { q: "Скільки учнів було у Ісуса?", a: "12" },
    { q: "Яке море розступилося перед ізраїльтянами?", a: "Червоне" },
    { q: "Хто зрадив Ісуса?", a: "Юда" },
  ];
  const challengeTasks = [
    "Помолись за сусіда праворуч.",
    "Поділись свідченням про Божу допомогу.",
    "Заспівай коротку християнську пісню.",
  ];

  // --- Логіка ігор ---
  function renderGuessWord() {
    const word = guessWords[Math.floor(Math.random() * guessWords.length)];
    return `<h4>Вгадай слово</h4><p>Поясни це слово, не називаючи його напряму:</p><div style='font-size:1.5em; font-weight:600; margin:1em 0;'>${word}</div><button onclick='this.parentNode.innerHTML = window.renderGuessWord()'>Наступне слово</button>`;
  }
  window.renderGuessWord = renderGuessWord;

  function renderAlias() {
    const word = aliasWords[Math.floor(Math.random() * aliasWords.length)];
    return `<h4>Еліас</h4><p>Поясни це біблійне поняття, не використовуючи однокореневі слова:</p><div style='font-size:1.5em; font-weight:600; margin:1em 0;'>${word}</div><button onclick='this.parentNode.innerHTML = window.renderAlias()'>Наступне слово</button>`;
  }
  window.renderAlias = renderAlias;

  function renderQuiz() {
    const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    return `<h4>Біблійна вікторина</h4><p>${q.q}</p><input type='text' id='quizAnswer' placeholder='Ваша відповідь...' style='width:90%;padding:8px;margin:10px 0;border-radius:6px;border:1px solid #ccc;'><br><button onclick='window.checkQuizAnswer("${q.a}")'>Перевірити</button><div id='quizResult'></div><button style='margin-top:10px;' onclick='this.parentNode.innerHTML = window.renderQuiz()'>Наступне питання</button>`;
  }
  window.renderQuiz = renderQuiz;
  window.checkQuizAnswer = function (ans) {
    const val = document.getElementById("quizAnswer").value.trim();
    document.getElementById("quizResult").innerHTML =
      val.toLowerCase() === ans.toLowerCase()
        ? '<span style="color:green;">Вірно!</span>'
        : '<span style="color:red;">Невірно. Спробуй ще!</span>';
  };

  function renderChallenge() {
    const task =
      challengeTasks[Math.floor(Math.random() * challengeTasks.length)];
    return `<h4>Виклик</h4><p>Виконай завдання на домашці:</p><div style='font-size:1.2em; font-weight:600; margin:1em 0;'>${task}</div><button onclick='this.parentNode.innerHTML = window.renderChallenge()'>Інший виклик</button>`;
  }
  window.renderChallenge = renderChallenge;

  // --- Ігри для компанії ---
  const showGamesButton = document.getElementById("showGames");
  const gamesSection = document.getElementById("gamesSection");
  const gameLinks = document.querySelectorAll(".game-link");

  showGamesButton.addEventListener("click", () => {
    gamesSection.style.display = "block";
    showGamesButton.style.display = "none";
    showQrButton.style.display = "none";
    getVerseButton.style.display = "none";
    showQuestionGeneratorButton.style.display = "none";
    backButton.style.display = "flex";
    verseContainer.innerHTML = "";
    qrImage.style.display = "none";
    questionContainer.textContent = "";
    nextQuestionButton.style.display = "none";
    showGamesButton.style.display = "none";
  });

  // Повернення з ігор у головне меню
  // (додаємо до вже існуючого backButton event)
  // --- Генератор Запитань для Обговорення ---
  const showQuestionGeneratorButton = document.getElementById(
    "showQuestionGenerator",
  );
  const nextQuestionButton = document.getElementById("nextQuestion");
  const questionContainer = document.getElementById("questionContainer");

  // Масив запитань для обговорення
  const discussionQuestions = [
    "Який найбільший виклик у стосунках із Богом ви пережили цього тижня?",
    "Що ви навчилися про служіння, допомагаючи іншій людині?",
    "Що для вас є найбільшим випробуванням віри?",
    "Як ви відчували Божу присутність останнім часом?",
    "Яка біблійна історія надихає вас у складні моменти?",
    "Яке питання про віру ви хотіли б обговорити з групою?",
    "Що допомагає вам зростати у стосунках із людьми?",
    "Який вчинок любові ви зробили цього тижня?",
    "Яка молитва була для вас особливою останнім часом?",
    "Що для вас означає бути частиною служіння?",
    "Який вірш чи фраза з Біблії найбільше зачепили вас цього тижня, і чому?",
    "Якби Бог попросив вас відмовитися від чогось важливого у вашому житті, що б це було?",
    "Опишіть момент, коли ви відчули, що ваша молитва була почута (навіть якщо відповідь була 'Ні').",
    "Яку звичку (корисну чи шкідливу) ви хотіли б змінити цього тижня, і чому це важко?",
    "Як ви використовуєте свій час і чи відчуваєте, що він приносить вам справжню радість?",
    "Яку одну добру якість ви бачите в собі, за яку ви вдячні Богові?",
    "Чи був цього тижня момент, коли вам потрібно було проявити милосердя (чи прощення), і як ви з цим впоралися?",
    "Що ви відчуваєте щодо необхідності ділитися своєю вірою з тими, хто не вірить?",
    "Що означає для вас 'довіряти Богу' у щоденних рішеннях?",
    "Як ви справляєтесь зі страхом чи тривогою, і яку роль у цьому відіграє ваша віра?",
    "Чи є людина у вашому житті, яку вам важко любити? Що допомагає вам у цьому?",
    "Розкажіть про момент, коли Бог змінив ваше ставлення до якоїсь ситуації.",
    "Що для вас найскладніше в молитві — починати, продовжувати чи вірити у відповідь?",
    "Якби ви могли запитати Бога про одну річ у своєму житті прямо зараз, що б це було?",
    "Як ваша група чи спільнота допомагає вам у духовному зростанні?",
    "Що вас надихає найбільше: богослужіння, спілкування, вивчення Слова чи служіння? Чому?",
    "Як ви реагуєте, коли плани, які здавалися вам Божими, не здійснюються?",
    "Чи є щось у вашому житті, що ви ще не довірили Богу? Що вас утримує?",
    "Яка риса характеру Ісуса надихає вас найбільше і як ви намагаєтесь її відображати?",
    "Як ви переживаєте кризу віри — і що допомогло вам знову знайти Бога після неї?",
    "Що б ви хотіли, щоб про вас сказали через 20 років, і як ваша віра допомагає вам до цього йти?",
    "Як ви відрізняєте Божий голос від власних думок чи бажань?",
    "Яку жертву ви зробили заради когось іншого, і що ви відчули після?",
    "Що для вас значить 'оновлення' — у духовному сенсі? Коли ви востаннє його відчували?",
    "Як ваші стосунки з Богом впливають на те, як ви ставитесь до людей навколо?",
    "Розкажіть про ситуацію, де вам було потрібно сказати 'ні' заради своїх цінностей.",
    "Що ви хочете змінити у своєму духовному житті в наступному місяці?",
    "Як ви підтримуєте одне одного в цій групі і що ще можна покращити?",
  ];
  let lastQuestionIndex = -1;

  function getRandomQuestion() {
    let idx;
    do {
      idx = Math.floor(Math.random() * discussionQuestions.length);
    } while (discussionQuestions.length > 1 && idx === lastQuestionIndex);
    lastQuestionIndex = idx;
    return discussionQuestions[idx];
  }

  showQuestionGeneratorButton.addEventListener("click", () => {
    questionContainer.textContent = getRandomQuestion();
    nextQuestionButton.style.display = "flex";
    showQrButton.style.display = "none";
    getVerseButton.style.display = "none";
    showQuestionGeneratorButton.style.display = "none";
    backButton.style.display = "flex";
    verseContainer.innerHTML = "";
    qrImage.style.display = "none";
    showGamesButton.style.display = "none";
  });

  nextQuestionButton.addEventListener("click", () => {
    questionContainer.textContent = getRandomQuestion();
  });
  // Приховування лоадера через 3 секунди
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000);

  // Інші елементи та функції
  const showQrButton = document.getElementById("showQr");
  const getVerseButton = document.getElementById("getVerse");
  const verseContainer = document.getElementById("verseContainer");
  const qrImage = document.getElementById("qrImage");
  const backButton = document.getElementById("backButton");

  // Відкриття QR-коду
  showQrButton.addEventListener("click", () => {
    qrImage.style.display = "block";
    showQuestionGeneratorButton.style.display = "none";
    toggleButtons(false);
    showGamesButton.style.display = "none";
  });

  // Показ випадкового вірша
  getVerseButton.addEventListener("click", () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    verseContainer.innerHTML = `<p>${randomVerse.text}</p><p><em>${randomVerse.reference}</em></p>`;
    qrImage.style.display = "none"; // Сховати QR-код, якщо був відкритий
    showQuestionGeneratorButton.style.display = "none";
    toggleButtons(false);
    showGamesButton.style.display = "none";
  });

  // Кнопка "Назад" для повернення на початковий екран
  backButton.addEventListener("click", () => {
    verseContainer.innerHTML = "";
    qrImage.style.display = "none"; // Сховати QR-код при поверненні
    questionContainer.textContent = "";
    nextQuestionButton.style.display = "none";
    showQuestionGeneratorButton.style.display = "flex";
    toggleButtons(true);
    gamesSection.style.display = "none";
    showGamesButton.style.display = "flex";
  });

  // Обробники кліків на ігрових картках (ініціалізуються одразу при завантаженні)
  gameLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const game = link.getAttribute("data-game");
      if (game === "guess-word") openGameModal(renderGuessWord());
      else if (game === "alias") openGameModal(renderAlias());
      else if (game === "bible-quiz") openGameModal(renderQuiz());
      else if (game === "challenge") openGameModal(renderChallenge());
    });
  });

  // Функція для показу/приховання кнопок
  function toggleButtons(showMain) {
    showQrButton.style.display = showMain ? "flex" : "none";
    getVerseButton.style.display = showMain ? "flex" : "none";
    backButton.style.display = showMain ? "none" : "flex";
  }
});
