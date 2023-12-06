export const corollaData = {
  name: 'Model Toyota Corolla',
  startColor: 'img/corolla/black.jpg',
  characteristics: {
    engine: {
      title: 'Двигун',
      types: [
        { name: 'engine1400', label: '1.4 л', value: '56200' },
        { name: 'engine1600', label: '1.6 л', value: '62200' },
        { name: 'engine2000', label: '2.0 л', value: '78300' },
      ],
    },
    package: {
      title: 'Пакет',
      types: [
        { name: 'packageActive', label: 'Active', value: '0' },
        { name: 'packageActivePlus', label: 'Active Plus', value: '24560' },
      ],
    },

    transmission: {
      title: 'Коробка передач',
      types: [
        { name: 'auto', label: 'Автомат', value: '23000' },
        { name: 'manual', label: 'Ручна', value: '12000' },
      ],
    },
  },
  colors: [
    { className: 'colorWhite', imgPath: 'img/corolla/white.jpg' },
    { className: 'colorBlack active', imgPath: 'img/corolla/black.jpg' },
    { className: 'colorBronz', imgPath: 'img/corolla/bronz.jpg' },
    { className: 'colorSilver', imgPath: 'img/corolla/silver.jpg' },
    { className: 'colorGray', imgPath: 'img/corolla/gray.jpg' },
    { className: 'colorRed', imgPath: 'img/corolla/red.png' },
  ],
  variants: [
    {
      title: 'Екстер′єр',
      content: [
        {
          configName: 'City',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: false },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Live 2023',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: false },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Active 2023',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Style',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: true,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: true,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'GR Sport',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: true,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: true,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
      ],
    },
    {
      title: 'Фари',
      content: [
        {
          configName: 'City',
          configProperties: [
            {
              name: 'Прожекторні галогенові фари головного світла',
              value: true,
            },
            {
              name: 'Прожекторні світлодіодні фари головного світла',
              value: false,
            },
            {
              name: 'Механічний коректор кута нахилу передніх фар',
              value: true,
            },
            { name: 'Світлодіодні вогні денного світла', value: true },
            { name: 'Світлодіодні передні протитуманні фари', value: false },
            { name: 'Світлодіодний протитуманний ліхтар', value: true },
            {
              name: 'Світлодіодні задні габаритні ліхтарі та стоп-сигнали',
              value: true,
            },
            { name: 'Світлодіодні задні ліхтарі', value: false },
            { name: 'Датчик освітлення', value: true },
            {
              name: 'Система головного освітлення з функцією супровідного освітлення «Follow me home»',
              value: true,
            },
          ],
        },
        {
          configName: 'Live 2023',
          configProperties: [
            {
              name: 'Прожекторні галогенові фари головного світла',
              value: true,
            },
            {
              name: 'Прожекторні світлодіодні фари головного світла',
              value: false,
            },
            {
              name: 'Механічний коректор кута нахилу передніх фар',
              value: true,
            },
            { name: 'Світлодіодні вогні денного світла', value: true },
            { name: 'Світлодіодні передні протитуманні фари', value: true },
            { name: 'Світлодіодний протитуманний ліхтар', value: true },
            {
              name: 'Світлодіодні задні габаритні ліхтарі та стоп-сигнали',
              value: true,
            },
            { name: 'Світлодіодні задні ліхтарі', value: false },
            { name: 'Датчик освітлення', value: true },
            {
              name: 'Система головного освітлення з функцією супровідного освітлення «Follow me home»',
              value: true,
            },
          ],
        },
        {
          configName: 'Active 2023',
          configProperties: [
            {
              name: 'Прожекторні галогенові фари головного світла',
              value: true,
            },
            {
              name: 'Прожекторні світлодіодні фари головного світла',
              value: false,
            },
            {
              name: 'Механічний коректор кута нахилу передніх фар',
              value: true,
            },
            { name: 'Світлодіодні вогні денного світла', value: true },
            { name: 'Світлодіодні передні протитуманні фари', value: false },
            { name: 'Світлодіодний протитуманний ліхтар', value: true },
            {
              name: 'Світлодіодні задні габаритні ліхтарі та стоп-сигнали',
              value: true,
            },
            { name: 'Світлодіодні задні ліхтарі', value: false },
            { name: 'Датчик освітлення', value: true },
            {
              name: 'Система головного освітлення з функцією супровідного освітлення «Follow me home»',
              value: true,
            },
          ],
        },
        {
          configName: 'Style',
          configProperties: [
            {
              name: 'Прожекторні галогенові фари головного світла',
              value: false,
            },
            {
              name: 'Прожекторні світлодіодні фари головного світла',
              value: true,
            },
            {
              name: 'Механічний коректор кута нахилу передніх фар',
              value: true,
            },
            { name: 'Світлодіодні вогні денного світла', value: true },
            { name: 'Світлодіодні передні протитуманні фари', value: false },
            { name: 'Світлодіодний протитуманний ліхтар', value: true },
            {
              name: 'Світлодіодні задні габаритні ліхтарі та стоп-сигнали',
              value: false,
            },
            { name: 'Світлодіодні задні ліхтарі', value: false },
            { name: 'Датчик освітлення', value: true },
            {
              name: 'Система головного освітлення з функцією супровідного освітлення «Follow me home»',
              value: true,
            },
          ],
        },
        {
          configName: 'GR Sport',
          configProperties: [
            {
              name: 'Прожекторні галогенові фари головного світла',
              value: false,
            },
            {
              name: 'Прожекторні світлодіодні фари головного світла',
              value: true,
            },
            {
              name: 'Механічний коректор кута нахилу передніх фар',
              value: true,
            },
            { name: 'Світлодіодні вогні денного світла', value: true },
            { name: 'Світлодіодні передні протитуманні фари', value: false },
            { name: 'Світлодіодний протитуманний ліхтар', value: true },
            {
              name: 'Світлодіодні задні габаритні ліхтарі та стоп-сигнали',
              value: false,
            },
            { name: 'Світлодіодні задні ліхтарі', value: false },
            { name: 'Датчик освітлення', value: true },
            {
              name: 'Система головного освітлення з функцією супровідного освітлення «Follow me home»',
              value: true,
            },
          ],
        },
      ],
    },
    {
      title: 'Скло',
      content: [
        {
          configName: 'City',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: false },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Live 2023',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: false },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Active 2023',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: false,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: false,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'Style',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: true,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: true,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
        {
          configName: 'GR Sport',
          configProperties: [
            {
              name: 'Тоновані стекла задніх дверей та заднє скло',
              value: true,
            },
            {
              name: 'Передні склоочисники з інтервалом роботи, що регулюється',
              value: true,
            },
            { name: 'Склоочисники з сенсором дощу', value: true },
            { name: 'Обігрів заднього скла з автотаймером', value: true },
            {
              name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
              value: true,
            },
            {
              name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
              value: true,
            },
          ],
        },
      ],
    },
    {
      title: 'Система кондиціонування',
      content: [
        {
          configName: 'City',
          configProperties: [
            { name: 'Кондиціонер', value: true },
            {
              name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир',
              value: false,
            },
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: false },
          ],
        },
        {
          configName: 'Live 2023',
          configProperties: [
            { name: 'Кондиціонер', value: true },
            {
              name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир',
              value: true,
            },
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: false },
          ],
        },
        {
          configName: 'Active 2023',
          configProperties: [
            { name: 'Кондиціонер', value: false },
            {
              name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир',
              value: true,
            },
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: false },
          ],
        },
        {
          configName: 'Style',
          configProperties: [
            { name: 'Кондиціонер', value: false },
            {
              name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир',
              value: true,
            },
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: false },
          ],
        },
        {
          configName: 'GR Sport',
          configProperties: [
            { name: 'Кондиціонер', value: false },
            {
              name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир',
              value: true,
            },
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: false },
          ],
        },
      ],
    },
  ],
  review: {
    positions: [
      {
        name: 'Безпека',
        descr: [
          {
            title: 'Безпека',
            image: 'img/corolla/1.jpg',
            text: [
              'Всі системи, встановлені в Toyota Corolla, мають на меті зробити будь-яку поїздку максимально безпечною та комфортною для кожного пасажира. В авто присутній круїз-контроль, за допомогою нього водій може не тільки зберігати розумну дистанцію між своїм та автомобілем, що їде попереду, а і підтримувати певну швидкість. Камери заднього виду дозволяють комфортно паркуватись та прогнозувати траєкторію всього руху машини.',
              "Основне навантаження на себе бере система, відповідальна за безпеку, у цій моделі вона вдосконалена та представлена Safety Sense версія 2.0. Розроблена відповідно до стандартів та відповідає за попередження про небезпеку зіткнення і оснащена функцією автоматичного гальма. Також сюди входить система оповіщення про з'їзд зі смуги руху, автоматичне перемикання між далеким світлом та ближнім. Оновлена система повідомляє водія про наявність певних дорожніх знаків. ",
              'Окрім розумної системи, яка створена, щоб передбачити будь-які інциденти на дорозі, машину обладнано основними засобами безпеки. Передні подушки безпеки розташовані з боку водія та пасажира. Також подібні подушки встановлені на всіх сидіннях другого ряду, сигналізація, кріплення, створені за останнім словом техніки, призначені для дитячих крісел. Враховуючи всі переваги даної моделі автомобіля, стає зрозуміло, чому вона така популярна у всьому світі. Власник отримує чудовий автомобіль, який не просто справляється з дорогами різної складності, а і дарує комфорт, почуття впевненості та шикарно виглядає.',
            ],
          },
          {
            title: 'Технології',
            image: 'img/corolla/2.jpg',
            text: [
              'Доповненням і без того повного комплекту стане безключовий доступ за допомогою відбитка пальця та наявність радару, який бере на себе функцію полегшення паркування. Камера заднього виду призначена для комфорту водія та застосовується не лише під час їзди, а і під час паркування. До списку додатків варто віднести систему допомоги водієві, яка також зазнала вдосконалення та повністю допомагає під час підйому або крутого спуску, запобігає зіткненню та розпізнає дорожні знаки.',
            ],
          },
          {
            title: 'Двигун',
            image: 'img/corolla/3.jpg',
            text: [
              "Для українського ринку доступний лише один силовий агрегат. Представлений він рядною атмосферною бензиновою четвіркою об'ємом 1,6 літри. Вона має 2 розподільні вали, система подачі палива в неї багатоточкова, а також має систему зміни фаз газорозподілу. За рахунок вищеперерахованих пунктів інженери змогли досягти результату в 122 кінські сили, істотно виріс і крутний момент, а обороти колінчастого валу досягли 5200 на хвилину. Роль трансмісії виконує шестиступінчаста механіка або безступеневий варіатор.",
              'Авторяд Королли для України представлений у передньопривідному варіанті. Розгін до 100 км залежить від коробки передач, показники становлять 9,7-10,2 секунд, при цьому позначка максимальної швидкості зупинилася на 190-200 кілометрах на годину. Варто віддати належне інженерам за роботу над витратою палива. Завдяки комбінованому циклу він складатиме всього 6,2-6,4 літри.',
            ],
          },
        ],
      },
      {
        name: "Інтер'єр",
        descr: [
          {
            title: "Інтер'єр",
            image: 'img/corolla/4.jpg',
            text: [
              "Інтер'єр Toyota Corolla виконаний у стилі Hi-Tech на преміальному рівні. Матеріал, яким оброблений салон, це натуральна шкіра і відноситься до класу високої якості. Усі 5 сидінь авто були розроблені з акцентом на комфорт та протестовані, отримавши статус підвищеної комфортності. Сам салон має неймовірну шумоізоляцію, в першу чергу за рахунок високоміцного скла.",
              'Оцінити якість та смак, з яким виконано роботу, зможе не тільки водій, а і всі пасажири автомобіля. Панель приладів виконана з застосуванням 3D ефекту. Метаморфози, яких зазнав зовнішній вигляд автомобіля, чудово поєднуються з новим дизайном, який був продуманий для салону. Зрештою виходить ідеальний тандем стилю, якості та розкоші. Яскравий салон притягує своєю комфортністю, змушує відчути себе не просто пасажиром або водієм, а VIP-персоною.',
            ],
          },
          {
            title: 'Мультимедіа',
            image: 'img/corolla/5.jpg',
            text: [
              'Безперечно, нова мультимедійна система вражає, адже вона стала майже візитною карткою моделі. В ній доступний як Apple Сar play, так і Android Auto, таким чином, водій не відволікається під час руху, а вся необхідна інформація висвічується на кольоровому дисплеї лобового скла.',
            ],
          },
        ],
      },
      {
        name: "Екстер'єр",
        descr: [
          {
            title: "Екстер'єр",
            image: 'img/corolla/6.jpg',
            text: [
              'Автомобіль Тойота Королла ми бачимо зовсім з новими формами. Його передня частина має вузькі, трохи загострені фари головного світла та доповнення у вигляді денних ходових вогнів. Грати радіатора стали виключно частиною декору та представлені у вигляді накладки чорного кольору з доповненням логотипу, який виконаний з хрому. Внизу знаходиться повітрозабірник, в даній моделі він виконаний явно масивніше за попередні та суттєво впливає на весь зовнішній вигляд автомобіля. З боків повітрозабірника розташувалися поглиблення з «протитуманками», вони також виконані з хромованих накладок та мають с-подібну форму.',
            ],
          },
          {
            title: 'Зовнішній вигляд',
            image: 'img/corolla/7.jpg',
            text: [
              'Toyota Corolla є бестселером серед автомобільного ряду Toyota. Вже понад 50 років автомобілі розходяться неймовірними тиражами по всьому світу. Автомобіль неодноразово генерувався та видозмінювався. Таким чином, зібралося близько 12 моделей. Останнє з удосконалених авто отримало маркування Е210. В розширеному форматі було виконане оснащення автомобіля, був видозмінений салон, а також вцілому машина отримала новий дизайн. Нове авто має довжину 4630 мм, ширина складає 1780 мм, висота 1435 мм, а колісна база дорівнює 2700 мм. Загалом зовнішні зміни Toyota Corolla пішли їй тільки на користь.',
            ],
          },
        ],
      },
      {
        name: 'Комфорт',
        descr: [
          {
            title: 'Комфорт',
            image: 'img/corolla/8.jpg',
            text: [
              'Комфортну поїздку забезпечить функція підігріву задніх сидінь та доступний клімат-контроль. Що стосується водія, тут не буде жодного дискомфорту. Крім того, крісло водія має статус підвищеного комфорту, має кілька режимів нахилу спинки, присутня функція підігріву керма, а також світлодіодне підсвічування простору для ніг водія.',
              "Доречним для нашого клімату нововведенням стане пакет, який одержав назву зимовий комфорт. Деякі функції цього пакета раніше були присутніми в попередніх моделях авто, проте вперше вони об'єдналися в одну та доповнились рядом функцій. Таким чином, у пакет входить:",
              `Обігрів лобового скла
            Підігрів усіх 5 сидінь.
            Індикатор рівня рідини для обмивання.
            Підігрів керма.
            Повітропроводи для сидінь 2 ряду.
            Обігрів дзеркала заднього виду.
            Електричний обігрівач салону.`,
              'Саме за допомогою цього пакету водієві забезпечений повний комфорт та безперешкодний рух навіть у найхолоднішу пору року',
            ],
          },
          {
            title: 'Ходова частина',
            image: 'img/corolla/9.jpg',
            text: [
              'Найбільшою зміною став перехід на вдосконалену модульну платформу. Збереглося своєрідне компонування з розташуванням силового агрегату поперечно, стійки залишилися спереду, але задня частина значно змінилася. На місце торсованої балки, яка була напівзалежною, стала повністю незалежна конструкція.',
              ' За рахунок таких змін не тільки повністю видозмінився зовнішній вигляд автомобіля, а і збільшився розмір багажника. На даній моделі його обсяг становить майже 470 літрів. За рахунок абсолютно нової модульної архітектури, яка стала основою седана, авто отримало занижений центр ваги, а жорсткість кузова збільшилася.',
              'Таким чином, зросла динаміка і, звичайно ж, керованість. Баланс, який вдалося втілити інженерам, впливає на плавність руху, додалася маневреність, так що впоратися з автомобілем навіть на високій швидкості не складатиме труднощів.',
            ],
          },
        ],
      },
    ],
  },
  questions: [
    {
      title:"У чому різниця між двома цінами на одну комплектацію?",
      content:"Біля кожного автомобіля вказано 2 ціни. Вони відрізняються тим, що перша показує вартість авто, яке знаходиться на території України, а друга - ціну, за якою ви можете замовити новий автомобіль у виробництво.",
    },
    {
      title:"Які додаткові послуги надає Тойота ВІДІ Автострада?",
      content:"У нашому дилерському центрі ви можете вибрати та придбати нове авто, оформити Трейд-ін та обміняти свій старий авто, купити Авто з пробігом, ми також можемо викупити ваш автомобіль та ви не повинні купувати новий. Крім цього, ми надаємо послуги сервісного обслуговування, кузовного ремонту, продажу оригінальних запчастин та аксесуарів, реєстрації авто в салоні, оформлення страховки та кредиту.",
    },
    {
      title:"Яка витрата палива бензинової Тойота Королла?",
      content:"Toyota Corolla доступна до замовлення з двигуном 1.6 л, потужністю 132 к.с., з механічною КПП або Варіатором (CVT). Залежно від обраної КПП витрата палива по місту 8.4 л/100 км (механіка) та 8.0 л/100 км (варіатор). У комбінованому циклі витрата буде 6.2 та 6.4 л/100 км відповідно.",
    },
    {
      title:"Як часто потрібно обслуговувати Toyota Corolla?",
      content:"Технічне обслуговування бензинової Тойота Королла рекомендується проводити кожні 15 тис. км пробігу або один раз на рік, залежно від того, що настане раніше. Детальніше по кожній моделі ви можете дізнатися в розділі Регламент ТО.",
    },
    {
      title:"Чи можу я купити машину в кредит у вашому дилерському центрі?",
      content:"Так, ми працюємо з фінансовими партнерами (Ощадбанк, OTPbank, Credit Agricole, Укргазбанк, KredoBank). Ви можете вибрати цікаву для вас програму кредитування, а наші фахівці допоможуть вам розібратися в усіх умовах.",
    },
  ]
};
