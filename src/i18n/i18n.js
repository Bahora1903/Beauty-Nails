import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        services: "Xizmatlar",
        masters: "Ustalar",
        contact: "Aloqa",
        help: "Yordam / FAQ",
        bookNow: "Band qilish"
      },
      hero: {
        badge: "✨ Premium Manikyur Saloni",
        title: "Go'zalligingizni va Nafosatingizni Bizga Ishoning",
        subtitle: "Toshkentdagi eng mahoratli ustalar, steril uskunalar va premium sifatli manikyur xizmati.",
        bookBtn: "Uchrashuv tayinlash",
        servicesBtn: "Xizmatlar bilan tanishish",
        stats: {
          clients: "Mamnun Mijozlar",
          masters: "Tajribali Ustalar",
          services: "Xizmat Turlari",
          experience: "Yillik Tajriba"
        }
      },
      advantages: {
        title: "Nima Uchun Bizni Tanlashadi?",
        subtitle: "Biz har bir mijozning salomatligi, qulayligi va takrorlanmas go'zalligini birinchi o'ringa qo'yamiz.",
        sterile: "Steril Uskunalar",
        sterileDesc: "Avtoklav va dezinfeksiyaning 4 bosqichli tibbiy nazorati.",
        materials: "Premium Materiallar",
        materialsDesc: "Yevropaning sertifikatlangan, hipoallergenik gel va laklari.",
        masters: "Top Ustalar",
        mastersDesc: "Xalqaro darajadagi sertifikat va 5 yildan ortiq tajriba.",
        quality: "Kafolatlangan Sifat",
        qualityDesc: "Barcha xizmatlarimizga 14 kunlik rasmiy sifat kafolati."
      },
      homeServices: {
        title: "Ommabop Xizmatlarimiz",
        subtitle: "Eng ko'p tanlanadigan va mijozlarimiz yoqtirgan manikyur turlari",
        allBtn: "Barcha xizmatlar",
        selectBtn: "Tanlash"
      },
      testimonials: {
        title: "Mijozlarimiz Fikrlari",
        subtitle: "Salonimiz mehmonlarining samimiy izohlari va taassurotlari"
      },
      cta: {
        title: "Qo'llaringizga Shoxona Parvarish Hadiya Eting!",
        subtitle: "Hoziroq uchrashuv tayinlang va birinchi tashrifingiz uchun 10% chegirmaga ega bo'ling.",
        bookBtn: "Onlayn Yozilish"
      },
      aboutPage: {
        badge: "Bizning Falsafamiz va Tariximiz",
        title: "Beauty Nails Haqida",
        subtitle: "Biz shunchaki manikyur saloni emasmiz — biz tirnoqlaringiz salomatligi va nafosati uchun yaratilgan zamonaviy estetika makonimiz.",
        missionTitle: "Bizning Missiyamiz",
        missionP1: "2018-yildan buyon faoliyat yuritib kelayotgan Beauty Nails saloni Toshkent shahridagi eng talabchan va nafis didli mijozlarga premium darajadagi xizmatlarni taqdim etib kelmoqda.",
        missionP2: "Biz har bir tirnoq parvarishida Yevropaning eng so'nggi xavfsizlik va estetika standartlariga rioya qilamiz.",
        check1: "100% Avtoklav sterillash sertifikati",
        check2: "Xalqaro darajadagi 12+ malakali usta",
        check3: "Faqat gipoallergen va biologik xavfsiz laklar"
      },
      services: {
        badge: "Beauty & Polish Katalogi",
        title: "Bizning Xizmatlarimiz",
        subtitle: "Sizning qo'lingiz va tirnoqlaringiz uchun eng yaxshi g'amxo'rlik va dizaynlar",
        searchPlaceholder: "Xizmatni qidirish...",
        all: "Barchasi",
        manicure: "Manikyur",
        pedicure: "Pedikyur",
        extension: "Tirnoq O'stirish",
        design: "Nail Art Dizayn",
        duration: "daq",
        bookService: "Tanlash",
        priceLabel: "Narxi",
        items: {
          1: { title: "Klassik Manikyur", desc: "Klassik tirnoq ishlov berish, kutilikolani tozalash va oziqlantiruvchi moy bilan parvarish qilish." },
          2: { title: "Yevropa Manikyuri", desc: "Qaychilar va tig'larsiz yumshoq apparat manikyuri. Tirnoq atrofiga zararsiz ishlov." },
          3: { title: "Ruscha Manikyur", desc: "Mukammal chuqur apparat manikyuri. Teriga ideal silliqlik va uzoq muddat saqlanuvchi natija." },
          4: { title: "Gel Lak Qoplamasi", desc: "Mustahkamlovchi baza va rangli gel-lak qoplamasi. 3-4 hafta davomida mukammal jilo." },
          5: { title: "Fransuzcha Manikyur (French)", desc: "Nafis va klassik fransuzcha dizayn. Har qanday libos va tadbir uchun ideal tanlov." },
          6: { title: "Yaponcha Parvarish Manikyuri", desc: "Tabiiy mineral pastalar va asal mumi bilan tirnoqlarni tiklovchi va mustahkamlovchi terapiya." },
          7: { title: "SPA Manikyur va Qo'l Terapiyasi", desc: "Skrab, parafinli niqob, massaj va chuqur namlantiruvchi premium qo'l parvarishi." },
          8: { title: "Tirnoq O'stirish (Gel/Poligel)", desc: "Gel yoki poligel yordamida tirnoqlarni professional uzaytirish va forma berish." },
          9: { title: "Pedikyur va Oyoq Parvarishi", desc: "Oyoq terisi va tirnoqlariga to'liq gigiyenik ishlov berish va massaj." },
          10: { title: "Mualliflik Nail Art Dizayni", desc: "Kristallar, stikerlar va qo'lda chiziladigan mualliflik dizaynlari." }
        }
      },
      masters: {
        badge: "Top Nail Artistlar",
        title: "Bizning Professional Ustalar",
        subtitle: "Har bir mijoz uchun alohida e'tibor va yuksak mahorat egalari",
        exp: "Tajriba",
        clients: "Mijozlar",
        reviews: "Sharhlar",
        bookMaster: "Vaqt ajratish",
        specialityLabel: "Mutaxassisligi:"
      },
      contact: {
        badge: "Onlayn Bron & Joylashuv",
        title: "Uchrashuv Tayinlash va Aloqa",
        subtitle: "O'zingizga qulay vaqt va usta bilan uchrashuv belgilang",
        firstName: "Ism",
        lastName: "Familiya",
        phone: "Telefon raqami",
        email: "Email pochta",
        selectService: "Xizmatni tanlang",
        selectMaster: "Ustani tanlang",
        date: "Sana",
        time: "Vaqt",
        message: "Qo'shimcha izoh",
        submit: "Yozilishni tasdiqlash",
        successTitle: "Muvaffaqiyatli Yozildingiz!",
        success: "Rahmat! Arizangiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan bog'lanamiz!",
        newAppointBtn: "Yangi uchrashuv belgilash",
        infoTitle: "Salon Aloqa Ma'lumotlari",
        anyMaster: "Har qanday bo'sh usta",
        selectPrompt: "Tanlang...",
        workHours: "Ish Rejimi"
      },
      helpPage: {
        badge: "Qo'llab-quvvatlash va FAQ",
        title: "Ko'p Beriladigan Savollar",
        subtitle: "Sizni qiziqtirgan savollarga tezkor javoblar",
        noAnswerTitle: "Savolingizga javob topolmadingizmi?",
        noAnswerSub: "Bizning qo'llab-quvvatlash jamoamiz haftada 7 kun xizmatingizda.",
        tgBtn: "Telegram Bot",
        callBtn: "Qo'ng'iroq Qilish",
        faqList: {
          1: { q: "Uskunalar sterilizatsiya qilinadimi?", a: "Albatta! Barcha ko'p marotabalik uskunalarimiz 4 bosqichli dezinfeksiya va tibbiy Avtoklav (Dry Heat) apparatida 180°C issiqlikda sterilizatsiya qilinadi hamda har bir mijoz oldida maxsus kraft-paketda ochiladi." },
          2: { q: "Uchrashuvni qanday bekor qilish yoki ko'chirish mumkin?", a: "Uchrashuv vaqtidan kamida 3 soat oldin biz bilan telefon raqami (+998 93 113 33 11) yoki Telegram bot orqali bog'lansangiz, vaqtni bepul ko'chirib beramiz." },
          3: { q: "Gel-lak qoplamasi qancha vaqt ushlanib turadi?", a: "Bizning premium materiallar va apparatli ishlov berish texnologiyamiz tufayli qoplama 3 haftadan 5 haftagacha sifatini yo'qotmay saqlanadi." },
          4: { q: "To'lov usullari qanday?", a: "Naqd pul, Humo, Uzcard bank kartalari hamda Payme / Click elektron to'lov tizimlari orqali to'lov qilishingiz mumkin." }
        }
      },
      footer: {
        desc: "Beauty Nails - Sifat va nafosat uchrashadigan premium manikyur saloni.",
        quickLinks: "Tezkor havolalar",
        hours: "Ish vaqti",
        everyday: "Har kuni: 09:00 - 20:00",
        everydaySub: "Dam olish kunlarisiz, uzluksiz xizmat ko'rsatamiz.",
        rights: "Barcha huquqlar himoyalangan.",
        address: "Toshkent shahri, Amir Temur shoh ko'chasi 45-uy"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        masters: "Мастера",
        contact: "Контакты",
        help: "Помощь / FAQ",
        bookNow: "Записаться"
      },
      hero: {
        badge: "✨ Премиум Салон Маникюра",
        title: "Доверьте Свою Красоту и Элегантность Нам",
        subtitle: "Лучшие мастера Ташкента, стерильное оборудование и премиальный сервис маникюра.",
        bookBtn: "Записаться на прием",
        servicesBtn: "Смотреть услуги",
        stats: {
          clients: "Довольных Клиентов",
          masters: "Опытных Мастеров",
          services: "Видов Услуг",
          experience: "Лет Опыта"
        }
      },
      advantages: {
        title: "Почему Выбирают Нас?",
        subtitle: "Мы ставим здоровье, комфорт и неповторимую красоту каждого клиента на первое место.",
        sterile: "Стерильные Инструменты",
        sterileDesc: "4-этапный медицинский контроль, автоклав и дезинфекция.",
        materials: "Премиум Материалы",
        materialsDesc: "Сертифицированные гипоаллергенные гели и лаки из Европы.",
        masters: "Топ Мастера",
        mastersDesc: "Международные сертификаты и опыт работы более 5 лет.",
        quality: "Гарантия Качества",
        qualityDesc: "Официальная 14-дневная гарантия качества на все услуги."
      },
      homeServices: {
        title: "Популярные Услуги",
        subtitle: "Самые востребованные и любимые процедуры наших клиентов",
        allBtn: "Все услуги",
        selectBtn: "Выбрать"
      },
      testimonials: {
        title: "Отзывы Клиентов",
        subtitle: "Искренние отзывы и впечатления гостей нашего салона"
      },
      cta: {
        title: "Подарите Своим Рукам Королевский Уход!",
        subtitle: "Запишитесь прямо сейчас и получите скидку 10% на первый визит.",
        bookBtn: "Онлайн Запись"
      },
      aboutPage: {
        badge: "Наша Философия и История",
        title: "О Салоне Beauty Nails",
        subtitle: "Мы не просто салон маникюра — мы современное эстетическое пространство для здоровья и красоты ваших ногтей.",
        missionTitle: "Наша Миссия",
        missionP1: "Салон Beauty Nails, работающий с 2018 года, предоставляет услуги премиум-класса самым взыскательным клиентам Ташкента.",
        missionP2: "Мы соблюдаем самые современные европейские стандарты безопасности и эстетики при каждом уходе.",
        check1: "100% Сертификат стерилизации в автоклаве",
        check2: "12+ квалифицированных мастеров международного уровня",
        check3: "Только гипоаллергенные и безопасные лаки"
      },
      services: {
        badge: "Каталог Красоты и Маникюра",
        title: "Наши Услуги",
        subtitle: "Лучший уход и изысканный дизайн для ваших рук и ногтей",
        searchPlaceholder: "Поиск услуги...",
        all: "Все",
        manicure: "Маникюр",
        pedicure: "Педикюр",
        extension: "Наращивание",
        design: "Nail Art Дизайн",
        duration: "мин",
        bookService: "Выбрать",
        priceLabel: "Цена",
        items: {
          1: { title: "Классический Маникюр", desc: "Классическая обработка ногтей, удаление кутикулы и уход с питательным маслом." },
          2: { title: "Европейский Маникюр", desc: "Мягкий необрезной маникюр без ножниц и лезвий. Безопасный уход." },
          3: { title: "Русский Аппаратный Маникюр", desc: "Идеальный глубокий аппаратный маникюр. Гладкая кожа и долговечный результат." },
          4: { title: "Покрытие Гель-Лаком", desc: "Укрепляющая база и цветное гель-лаковое покрытие. Идеальный блеск на 3-4 недели." },
          5: { title: "Французский Маникюр (Френч)", desc: "Изящный и классический французский дизайн. Идеально для любого образа." },
          6: { title: "Японский Эко-Маникюр", desc: "Восстанавливающая терапия ногтей с натуральными минеральными пастами и пчелиным воском." },
          7: { title: "SPA Маникюр и Уход за Руками", desc: "Скраб, парафиновая маска, массаж и глубоко увлажняющий премиальный уход." },
          8: { title: "Наращивание Ногтей (Гель/Полигель)", desc: "Профессиональное удлинение и моделирование ногтей гелем или полигелем." },
          9: { title: "Педикюр и Уход за Ногами", desc: "Полная гигиеническая обработка кожи стоп и ногтей с расслабляющим массажем." },
          10: { title: "Авторский Nail Art Дизайн", desc: "Стразы, стикеры и эксклюзивные ручные рисунки любой сложности." }
        }
      },
      masters: {
        badge: "Топ Мастера Маникюра",
        title: "Наши Профессиональные Мастера",
        subtitle: "Индивидуальный подход и высочайшее мастерство для каждого клиента",
        exp: "Опыт",
        clients: "Клиентов",
        reviews: "Отзывов",
        bookMaster: "Записаться",
        specialityLabel: "Специализация:"
      },
      contact: {
        badge: "Онлайн Бронь и Локация",
        title: "Запись на Прием и Контакты",
        subtitle: "Выберите удобное время и любимого мастера",
        firstName: "Имя",
        lastName: "Фамилия",
        phone: "Номер телефона",
        email: "Электронная почта",
        selectService: "Выберите услугу",
        selectMaster: "Выберите мастера",
        date: "Дата",
        time: "Время",
        message: "Дополнительно",
        submit: "Подтвердить запись",
        successTitle: "Вы Успешно Записались!",
        success: "Спасибо! Ваша заявка успешно принята. Мы свяжемся с вами в ближайшее время!",
        newAppointBtn: "Записаться снова",
        infoTitle: "Контакты Салона",
        anyMaster: "Любой свободный мастер",
        selectPrompt: "Выберите...",
        workHours: "Режим работы"
      },
      helpPage: {
        badge: "Поддержка и FAQ",
        title: "Часто Задаваемые Вопросы",
        subtitle: "Быстрые ответы на интересующие вас вопросы",
        noAnswerTitle: "Не нашли ответ на свой вопрос?",
        noAnswerSub: "Наша служба поддержки работает 7 дней в неделю.",
        tgBtn: "Telegram Бот",
        callBtn: "Позвонить",
        faqList: {
          1: { q: "Стерилизуются ли инструменты?", a: "Конечно! Все наши инструменты проходят 4-этапную медицинскую дезинфекцию и стерилизацию в автоклаве при 180°C. Крафт-пакет вскрывается при вас!" },
          2: { q: "Как отменить или перенести запись?", a: "Позвоните нам или напишите в Telegram минимум за 3 часа до приема, и мы бесплатно перенесем ваше время." },
          3: { q: "Сколько держится гель-лак?", a: "Благодаря премиум материалам и правильной технике покрытие держится от 3 до 5 недель без сколов." },
          4: { q: "Какие способы оплаты доступны?", a: "Вы можете оплатить наличными, картами Uzcard/Humo или через Payme / Click." }
        }
      },
      footer: {
        desc: "Beauty Nails - салон маникюра премиум-класса, где встречаются качество и изящество.",
        quickLinks: "Быстрые ссылки",
        hours: "Время работы",
        everyday: "Ежедневно: 09:00 - 20:00",
        everydaySub: "Работаем без выходных и перерывов.",
        rights: "Все права защищены.",
        address: "г. Ташкент, проспект Амира Темура, 45"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        masters: "Masters",
        contact: "Contact",
        help: "Help / FAQ",
        bookNow: "Book Now"
      },
      hero: {
        badge: "✨ Premium Manicure Salon",
        title: "Entrust Your Beauty & Elegance to Us",
        subtitle: "Tashkent's top nail artists, 100% sterile equipment, and luxury nail care services.",
        bookBtn: "Book Appointment",
        servicesBtn: "Explore Services",
        stats: {
          clients: "Happy Clients",
          masters: "Expert Masters",
          services: "Nail Services",
          experience: "Years Experience"
        }
      },
      advantages: {
        title: "Why Choose Us?",
        subtitle: "We prioritize the health, comfort, and unique beauty of every single client.",
        sterile: "Sterile Equipment",
        sterileDesc: "4-stage medical control with autoclave & heat sterilization.",
        materials: "Premium Materials",
        materialsDesc: "Certified hypoallergenic gels & polishes imported from Europe.",
        masters: "Top Nail Artists",
        mastersDesc: "International certificates and over 5 years of experience.",
        quality: "Guaranteed Quality",
        qualityDesc: "Official 14-day quality warranty for all our services."
      },
      homeServices: {
        title: "Our Signature Services",
        subtitle: "Most requested & favorite nail treatments chosen by our clients",
        allBtn: "All Services",
        selectBtn: "Select"
      },
      testimonials: {
        title: "Client Testimonials",
        subtitle: "Heartfelt feedback & experiences from our valued guests"
      },
      cta: {
        title: "Treat Your Hands to Royal Care!",
        subtitle: "Book your appointment today and receive 10% OFF your first visit.",
        bookBtn: "Book Online"
      },
      aboutPage: {
        badge: "Our Philosophy & History",
        title: "About Beauty Nails",
        subtitle: "We are not just a nail salon — we are a modern aesthetic haven created for your nail health & beauty.",
        missionTitle: "Our Mission",
        missionP1: "Operating since 2018, Beauty Nails delivers premium luxury nail care to Tashkent's most discerning clients.",
        missionP2: "We strictly adhere to the latest European safety & aesthetic standards in every treatment.",
        check1: "100% Autoclave sterilization certificate",
        check2: "12+ certified international master technicians",
        check3: "Hypoallergenic and non-toxic gel polishes"
      },
      services: {
        badge: "Beauty & Polish Catalog",
        title: "Our Signature Services",
        subtitle: "The ultimate care and luxury nail art designs for your hands",
        searchPlaceholder: "Search services...",
        all: "All",
        manicure: "Manicure",
        pedicure: "Pedicure",
        extension: "Nail Extension",
        design: "Nail Art",
        duration: "min",
        bookService: "Select",
        priceLabel: "Price",
        items: {
          1: { title: "Classic Manicure", desc: "Classic nail shaping, cuticle removal, and nourishing oil treatment." },
          2: { title: "European Manicure", desc: "Gentle non-cutting hardware manicure without scissors or blades." },
          3: { title: "Russian Deep Manicure", desc: "Impeccable deep hardware manicure for smooth skin and long-lasting results." },
          4: { title: "Gel Polish Coating", desc: "Strengthening base coat & vibrant gel polish with 3-4 weeks of flawless shine." },
          5: { title: "French Manicure", desc: "Elegantly timeless French tip design suitable for any occasion." },
          6: { title: "Japanese Care Manicure", desc: "Restorative therapy with natural mineral pastes and beeswax for nail strength." },
          7: { title: "SPA Manicure & Hand Therapy", desc: "Exfoliating scrub, paraffin mask, massage, and deep hydrating hand care." },
          8: { title: "Nail Extension (Gel/Polygel)", desc: "Professional nail extensions and sculpting using gel or polygel." },
          9: { title: "Pedicure & Foot Care", desc: "Complete hygienic foot skin care, nail shaping, and relaxing massage." },
          10: { title: "Custom Nail Art Design", desc: "Rhinestones, stickers, and hand-drawn custom artistic nail designs." }
        }
      },
      masters: {
        badge: "Top Master Technicians",
        title: "Our Master Technicians",
        subtitle: "Dedicated professionals delivering perfection for every client",
        exp: "Experience",
        clients: "Clients",
        reviews: "Reviews",
        bookMaster: "Book Master",
        specialityLabel: "Speciality:"
      },
      contact: {
        badge: "Online Booking & Location",
        title: "Book an Appointment & Contact",
        subtitle: "Schedule your appointment with your preferred nail artist",
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone Number",
        email: "Email Address",
        selectService: "Select Service",
        selectMaster: "Select Master",
        date: "Date",
        time: "Time",
        message: "Additional Notes",
        submit: "Confirm Appointment",
        successTitle: "Appointment Confirmed!",
        success: "Thank you! Your appointment request has been submitted successfully.",
        newAppointBtn: "Book Another Appointment",
        infoTitle: "Salon Contact Information",
        anyMaster: "Any available master",
        selectPrompt: "Select...",
        workHours: "Working Hours"
      },
      helpPage: {
        badge: "Support & FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to all your inquiries",
        noAnswerTitle: "Didn't find your answer?",
        noAnswerSub: "Our support team is available 7 days a week.",
        tgBtn: "Telegram Bot",
        callBtn: "Call Us Now",
        faqList: {
          1: { q: "Are all tools sterilized?", a: "Yes! All reusable tools undergo 4-stage medical disinfection and 180°C autoclave sterilization. Kraft bags are opened in front of you." },
          2: { q: "How can I reschedule or cancel?", a: "Call us or message via Telegram at least 3 hours prior to your visit, and we will reschedule for free." },
          3: { q: "How long does gel polish last?", a: "Thanks to our premium European gels and technique, polish stays pristine for 3 to 5 weeks." },
          4: { q: "What payment methods are accepted?", a: "We accept Cash, Uzcard, Humo, and online payments via Payme / Click." }
        }
      },
      footer: {
        desc: "Beauty Nails - Premier luxury manicure salon where perfection meets elegance.",
        quickLinks: "Quick Links",
        hours: "Working Hours",
        everyday: "Daily: 09:00 - 20:00",
        everydaySub: "Open 7 days a week without breaks.",
        rights: "All rights reserved.",
        address: "Tashkent city, Amir Temur Ave 45"
      }
    }
  }
};

const savedLang = localStorage.getItem('beauty_nails_lang') || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
