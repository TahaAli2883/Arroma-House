// Aroma House Website JavaScript
// Features: Mobile menu, Menu modals, Scroll reveal, Nav shadow, Language switcher (EN/AR)

// ── TRANSLATIONS ───────────────────────────────────────────────────
const translations = {
  en: {
    page_title: 'Aroma House — Taste. Elegance. Experience.',
    nav_brand: 'Aroma House',
    nav_about: 'About',
    nav_menu: 'Menu',
    nav_experience: 'Experience',
    nav_reviews: 'Reviews',
    nav_contact: 'Contact',
    nav_cta: 'Reserve a Table',

    // Features strip
    feat1_title: 'Crown Crust Pizza',
    feat1_sub: 'Our signature creation',
    feat2_title: 'Live Charcoal Grill',
    feat2_sub: 'Authentic Arabian BBQ',
    feat3_title: '12+ Signature Dishes',
    feat3_sub: 'Crafted with passion',
    feat4_title: '98% Guest Satisfaction',
    feat4_sub: "Madinah's finest",
    feat5_title: 'Special Mocktails',
    feat5_sub: 'Refreshing drinks & more',

    // About
    about_eyebrow: 'Our Story',
    about_title: 'Where Flavor<br>Becomes Art',
    about_p1: 'Born in the heart of Saudi Arabia, Aroma House is more than a restaurant — it is a sanctuary where centuries of culinary heritage collide with modern elegance. Every dish is a story told through spice, smoke, and precision.',
    about_p2: 'Our chefs draw from the rich traditions of the Arabian Peninsula, sourcing the finest local ingredients and pairing them with techniques refined across three continents.',
    stat1: 'Signature Dishes',
    stat2: 'Guest Satisfaction',
    stat3: 'Award Nominations',
    about_photo: 'Restaurant Photo',
    badge: 'Fine<br>Dining',

    // Menu
    menu_eyebrow: 'Our Selections',
    menu_title: 'The Menu',
    menu_pdf: 'Open Full Menu PDF',

    // Menu cards
    card_pizza_kicker: 'Pizza',
    card_pizza_title: 'Aroma Special Pizza',
    card_pizza_desc: 'Crown crust, stuffed crust, pepperoni, tikka, and giant pizza options.',
    card_pizza_price: 'From 28 SAR',
    card_pizza_view: 'View Selection',

    card_burger_kicker: 'Burgers',
    card_burger_title: 'Aroma Burgers',
    card_burger_desc: 'Classic beef, cheesy beef supreme, baziago, and crispy chicken.',
    card_burger_price: 'From 28 SAR',
    card_burger_view: 'View Selection',

    card_bbq_kicker: 'BBQ',
    card_bbq_title: 'Arabic & Pakistani BBQ',
    card_bbq_desc: 'Adana kabab, chicken kabab, shish tawook, tikka, and mixed platters.',
    card_bbq_price: 'From 16 SAR',
    card_bbq_view: 'View Selection',

    card_starters_kicker: 'Starters',
    card_starters_title: 'Arabic Starters',
    card_starters_desc: 'Hummus, mutabal, baba ganoush, fattoush, ayran, wraps, and fateer.',
    card_starters_price: 'From 5 SAR',
    card_starters_view: 'View Selection',

    card_asian_kicker: 'Cuisine',
    card_asian_title: 'Asian Cuisine',
    card_asian_desc: 'Mutton rosh, karahi, chicken handi, biryani, pulao, fried rice, and sides.',
    card_asian_price: 'See PDF',
    card_asian_view: 'View Selection',

    card_desserts_kicker: 'Sweets',
    card_desserts_title: 'Desserts',
    card_desserts_desc: 'Brownies, cookies, sundaes, tarts, donuts, eclairs, and loaves.',
    card_desserts_price: 'See PDF',
    card_desserts_view: 'View Selection',

    // Experience
    exp1_eyebrow: 'The Ambience',
    exp1_title: 'Dine Like<br>Royalty',
    exp1_p1: 'Step into a world of sculpted archways, hand-carved woodwork, and candlelit alcoves. Every corner of Aroma House is designed to evoke the grandeur of a Saudi palace — intimate, opulent, and timeless.',
    exp1_p2: 'Whether you are celebrating a milestone or simply savoring a quiet evening, our space bends to your occasion.',
    exp1_photo: 'Interior Photo',

    exp2_eyebrow: 'Private Dining',
    exp2_title: 'Reserved<br>For You',
    exp2_p1: 'Our private majlis rooms offer an exclusive dining experience for families and corporate gatherings. Fully customizable — from the florals to the menu — for moments that deserve nothing less than perfection.',
    exp2_p2: 'Accommodates groups of 8 to 40 guests with dedicated service staff and personalized menus.',
    exp2_photo: 'Private Majlis Photo',

    // Testimonials
    testi_eyebrow: 'Guest Reviews',
    testi_title: 'What Our Guests Say',
    testi1_text: '"The Mutton Ouzi was an absolute revelation. We\'ve dined across the Kingdom, and nothing comes close to the depth of flavor at Aroma House. The ambience made it a complete experience."',
    testi1_name: 'Abdullah Al-Rashid',
    testi1_role: 'Jeddah Resident',
    testi2_text: '"We hosted a private family dinner in the majlis room — flawless service, the menu was tailored exactly to our preferences. Aroma House set a new standard for what a Saudi restaurant can be."',
    testi2_name: 'Noura Al-Zahrani',
    testi2_role: 'Riyadh, Business Owner',
    testi3_text: '"The Saffron Qahwa alone is worth the visit. But every dish carries a soulfulness that is rare. Aroma House doesn\'t just feed you — it takes you somewhere. Unforgettable."',
    testi3_name: 'Khalid Al-Otaibi',
    testi3_role: 'Food Blogger, Makkah',

    // Reservation
    res_eyebrow: 'Book Your Table',
    res_title: 'Reserve<br>A Table',
    res_desc: 'Secure your dining experience at Aroma House. For large groups or private events, call us directly and our team will curate your evening.',
    res_call_label: 'Call Us',
    res_location_label: 'Location',
    res_email_label: 'Email',
    res_hours_label: 'Hours',
    res_hours_val: 'Daily: 12:00 PM – 12:00 AM',
    res_form_title: 'Make a Reservation',
    res_fname: 'First Name',
    res_lname: 'Last Name',
    res_phone: 'Phone Number',
    res_guests: 'Guests',
    res_date: 'Date',
    res_time: 'Time',
    res_special: 'Special Request',
    res_special_ph: 'Anniversary setup, dietary needs, etc.',
    res_submit: 'Confirm Reservation',

    // Footer
    footer_tagline: 'A Saudi dining experience rooted in heritage, elevated by craft. Taste. Elegance. Experience.',
    footer_nav_title: 'Navigate',
    footer_dining_title: 'Dining',
    footer_find_title: 'Find Us',
    footer_copy: '© 2026 Aroma House. All rights reserved. Madinah Munawah KSA.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms',
    footer_nav_story: 'Our Story',
    footer_nav_menu: 'The Menu',
    footer_nav_exp: 'Experience',
    footer_nav_reviews: 'Reviews',
    footer_nav_res: 'Reservations',
    footer_dining_majlis: 'Private Majlis',
    footer_dining_corp: 'Corporate Events',
    footer_dining_family: 'Family Gatherings',
    footer_dining_seasonal: 'Seasonal Menus',

    // WhatsApp
    whatsapp_label: 'Order Now',
  },
  ar: {
    page_title: 'أروما هاوس — ذوق. أناقة. تجربة.',
    nav_brand: 'أروما هاوس',
    nav_about: 'من نحن',
    nav_menu: 'القائمة',
    nav_experience: 'التجربة',
    nav_reviews: 'التقييمات',
    nav_contact: 'تواصل',
    nav_cta: 'احجز طاولة',

    // Features strip
    feat1_title: 'بيتزا كراون كراست',
    feat1_sub: 'إبداعنا المميز',
    feat2_title: 'مشوى الفحم الحي',
    feat2_sub: 'مشاوي عربية أصيلة',
    feat3_title: '+12 طبق مميز',
    feat3_sub: 'مصنوع بعشق واحتراف',
    feat4_title: '98% رضا الضيوف',
    feat4_sub: 'الأفضل في المدينة',
    feat5_title: 'موكتيلات خاصة',
    feat5_sub: 'مشروبات منعشة وأكثر',

    // About
    about_eyebrow: 'قصتنا',
    about_title: 'حيث يصبح النكهة<br>فناً',
    about_p1: 'وُلد أروما هاوس في قلب المملكة العربية السعودية، ليكون أكثر من مجرد مطعم — إنه ملاذ تلتقي فيه قرون من الإرث الطهوي مع الأناقة الحديثة. كل طبق قصة تُحكى بالتوابل والدخان والدقة.',
    about_p2: 'يستلهم طهاتنا من التقاليد العريقة لشبه الجزيرة العربية، مستخدمين أجود المكونات المحلية ومقترنةً بتقنيات صُقلت عبر ثلاث قارات.',
    stat1: 'طبق مميز',
    stat2: 'رضا الضيوف',
    stat3: 'ترشيح للجوائز',
    about_photo: 'صورة المطعم',
    badge: 'مطعم<br>راقي',

    // Menu
    menu_eyebrow: 'اختياراتنا',
    menu_title: 'القائمة',
    menu_pdf: 'فتح قائمة الأسعار PDF',

    // Menu cards
    card_pizza_kicker: 'بيتزا',
    card_pizza_title: 'بيتزا أروما الخاصة',
    card_pizza_desc: 'كراون كراست، كراست محشي، بيبروني، تكا، وخيارات البيتزا العملاقة.',
    card_pizza_price: 'من 28 ريال',
    card_pizza_view: 'عرض الاختيارات',

    card_burger_kicker: 'برغر',
    card_burger_title: 'برغر أروما',
    card_burger_desc: 'لحم كلاسيكي، أعلى بالجبن، بازياغو، ودجاج مقرمش.',
    card_burger_price: 'من 28 ريال',
    card_burger_view: 'عرض الاختيارات',

    card_bbq_kicker: 'مشويات',
    card_bbq_title: 'مشاوي عربية وباكستانية',
    card_bbq_desc: 'كباب عدنة، كباب دجاج، شيش طاووق، تكا، وأطباق مشكلة.',
    card_bbq_price: 'من 16 ريال',
    card_bbq_view: 'عرض الاختيارات',

    card_starters_kicker: 'مقبلات',
    card_starters_title: 'مقبلات عربية',
    card_starters_desc: 'حمص، متبل، بابا غنوج، فتوش، عيران، لفائف، وفطير.',
    card_starters_price: 'من 5 ريال',
    card_starters_view: 'عرض الاختيارات',

    card_asian_kicker: 'مطبخ',
    card_asian_title: 'المطبخ الآسيوي',
    card_asian_desc: 'خروف روش، كراهي، هندي دجاج، برياني، پلاو، أرز مقلي، ومرافق.',
    card_asian_price: 'انظر PDF',
    card_asian_view: 'عرض الاختيارات',

    card_desserts_kicker: 'حلويات',
    card_desserts_title: 'الحلويات',
    card_desserts_desc: 'براوني، كوكيز، صندي، تارت، دونات، إكلير، وكيك.',
    card_desserts_price: 'انظر PDF',
    card_desserts_view: 'عرض الاختيارات',

    // Experience
    exp1_eyebrow: 'الأجواء',
    exp1_title: 'تناول الطعام<br>كالملوك',
    exp1_p1: 'ادخل إلى عالم من الأقواس المنحوتة والأخشاب المحفورة يدوياً والكوات المضيئة بالشموع. كل ركن في أروما هاوس مصمم لاستحضار عظمة القصر السعودي — حميمي وفاخر وخالد.',
    exp1_p2: 'سواء كنت تحتفل بمناسبة أو تستمتع بسهرة هادئة، مكاننا يتكيف مع مناسبتك.',
    exp1_photo: 'صورة الديكور الداخلي',

    exp2_eyebrow: 'غرف خاصة',
    exp2_title: 'محجوزة<br>لك',
    exp2_p1: 'تقدم غرف المجلس الخاصة بنا تجربة طعام حصرية للعائلات والتجمعات. قابلة للتخصيص الكامل — من الزهور إلى القائمة — للحظات التي تستحق الكمال.',
    exp2_p2: 'تستوعب مجموعات من 8 إلى 40 ضيفاً مع طاقم خدمة مخصص وقوائم طعام مخصصة.',
    exp2_photo: 'صورة المجلس الخاص',

    // Testimonials
    testi_eyebrow: 'تقييمات الضيوف',
    testi_title: 'ماذا قال ضيوفنا',
    testi1_text: '"كان المطلوب الوزي كشفاً مطلقاً. تناولنا الطعام في أرجاء المملكة، ولم يقترب أي شيء من عمق النكهة في أروما هاوس. جعلت الأجواء التجربة متكاملة."',
    testi1_name: 'عبدالله الراشد',
    testi1_role: 'مقيم في جدة',
    testi2_text: '"استضفنا عشاء عائلياً خاصاً في غرفة المجلس — خدمة لا تشوبها شائبة، والقائمة مصممة بدقة وفق تفضيلاتنا. وضع أروما هاوس معياراً جديداً لما يمكن أن يكون عليه المطعم السعودي."',
    testi2_name: 'نورة الزهراني',
    testi2_role: 'رياض، صاحبة أعمال',
    testi3_text: '"القهوة السعودية بالزعفران وحدها تستحق الزيارة. لكن كل طبق يحمل روحانية نادرة. أروما هاوس لا يُطعمك فحسب — بل ينقلك إلى مكان آخر. لا يُنسى."',
    testi3_name: 'خالد العتيبي',
    testi3_role: 'مدوّن طعام، مكة',

    // Reservation
    res_eyebrow: 'احجز طاولتك',
    res_title: 'احجز<br>طاولة',
    res_desc: 'أكّد تجربتك في أروما هاوس. للمجموعات الكبيرة أو الفعاليات الخاصة، اتصل بنا مباشرة وسيتكفل فريقنا بتنظيم أمسيتك.',
    res_call_label: 'اتصل بنا',
    res_location_label: 'الموقع',
    res_email_label: 'البريد الإلكتروني',
    res_hours_label: 'أوقات العمل',
    res_hours_val: 'يومياً: 12:00 ظهراً – 12:00 منتصف الليل',
    res_form_title: 'قدّم حجزك',
    res_fname: 'الاسم الأول',
    res_lname: 'اسم العائلة',
    res_phone: 'رقم الهاتف',
    res_guests: 'عدد الضيوف',
    res_date: 'التاريخ',
    res_time: 'الوقت',
    res_special: 'طلب خاص',
    res_special_ph: 'إعداد مناسبة، احتياجات غذائية، إلخ.',
    res_submit: 'تأكيد الحجز',

    // Footer
    footer_tagline: 'تجربة مطاعم سعودية أصيلة، متجذرة في التراث، مرتقية بالفن. ذوق. أناقة. تجربة.',
    footer_nav_title: 'روابط سريعة',
    footer_dining_title: 'خدمات الطعام',
    footer_find_title: 'جدنا',
    footer_copy: '© 2026 أروما هاوس. جميع الحقوق محفوظة. المدينة المنورة، المملكة العربية السعودية.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'الشروط',
    footer_nav_story: 'قصتنا',
    footer_nav_menu: 'القائمة',
    footer_nav_exp: 'التجربة',
    footer_nav_reviews: 'التقييمات',
    footer_nav_res: 'الحجوزات',
    footer_dining_majlis: 'المجلس الخاص',
    footer_dining_corp: 'الفعاليات المؤسسية',
    footer_dining_family: 'التجمعات العائلية',
    footer_dining_seasonal: 'قوائم موسمية',

    // WhatsApp
    whatsapp_label: 'اطلب الآن',
  }
};

// ── i18n APPLY ──────────────────────────────────────────────────────
function applyLanguage(lang) {
  const t = translations[lang];
  const isAr = lang === 'ar';

  // Set document direction and lang
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.documentElement.classList.toggle('lang-arabic', isAr);

  // Update page title
  document.title = t.page_title;

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Save preference
  localStorage.setItem('aroma_lang', lang);
}

// ── MENU DETAILS ────────────────────────────────────────────────────
const menuDetails = {
  en: {
    pizza: {
      kicker: 'Pizza',
      title: 'Our Special Pizzas',
      intro: 'Signature Aroma pizzas made for the first bite to feel premium: rich cheese, bold sauces, fresh toppings, and crusts built to be remembered.',
      images: [
        { src: 'assets/pizza-crown-crust.png', alt: 'Aroma Crown Crust Pizza' },
        { src: 'assets/pizza-stuffed-crust.png', alt: 'Aroma Special Stuffed Pizza' }
      ],
      items: [
        { name: 'Aroma Crown Crust Pizza', desc: 'Tender chicken, Aroma special sauce, premium mozzarella, fresh vegetables, and a crown-style crust baked golden.', price: 'Regular 43 SAR' },
        { name: 'Aroma Special Stuffed Pizza', desc: 'Loaded chicken, creamy cheese, fresh vegetables, and stuffed crust filled with cheese, chicken kabab, and mutton kabab.', price: 'Regular 43 SAR' },
        { name: 'Aroma Giant Pizza', desc: 'Half meter and one meter pizza options served with wings, fries, and cold drink for groups and family tables.', price: 'From 82 SAR' },
        { name: 'Pizza Collection', desc: 'BBQ Supreme Blaze, Chicken Supreme, Green Garden, Four Seasons, Margherita, Pepperoni, and Tikka Pizza.', price: 'From 28 SAR' }
      ]
    },
    burgers: {
      kicker: 'Burgers', title: 'Aroma Burgers',
      intro: 'Juicy burgers with rich sauces, fresh toppings, and meal deals made for quick cravings and relaxed dine-in meals.',
      images: [{ src: 'assets/food-burger.jpg', alt: 'Aroma burgers with fries' }],
      items: [
        { name: 'Aroma Classic Burger', desc: 'Juicy beef patty, fresh lettuce, tomato, onion, pickles, and special sauce.', price: '28 SAR' },
        { name: 'Cheesy Beef Supreme', desc: 'Beef patty topped with melted cheese, lettuce, tomato, onions, and special sauce.', price: '32 SAR' },
        { name: 'Aroma BaziaGo', desc: 'Beef patty, bazai sauce, lettuce, tomato, onion, and jalapenos.', price: '32 SAR' },
        { name: 'Aroma Crispy Chicken', desc: 'Crispy chicken fillet with lettuce and mayo sauce.', price: '28 SAR' }
      ]
    },
    bbq: {
      kicker: 'BBQ', title: 'Arabic & Pakistani BBQ',
      intro: 'Charcoal-grilled favorites with deep seasoning, smoky edges, fresh sides, and platters for sharing.',
      images: [{ src: 'assets/food-bbq.jpg', alt: 'Arabic and Pakistani BBQ skewers' }],
      items: [
        { name: 'Adana Kabab', desc: 'Seasoned grilled kabab served hot with fresh sides.', price: '18 SAR' },
        { name: 'Chicken Kabab', desc: 'Tender chicken skewers grilled over charcoal.', price: '16 SAR' },
        { name: 'Shish Tawook Boneless', desc: 'Boneless grilled chicken with bold marinade and smoky finish.', price: '18 SAR' },
        { name: 'Mix Platters', desc: 'Half kilogram and one kilogram mixed BBQ platters for sharing.', price: 'From 49 SAR' }
      ]
    },
    starters: {
      kicker: 'Arabic', title: 'Arabic Starters',
      intro: 'Fresh Arabic starters, wraps, and fateer made for sharing before the main meal.',
      images: [{ src: 'assets/food-starters.jpg', alt: 'Arabic starters and hummus' }],
      items: [
        { name: 'Hummus', desc: 'Creamy chickpea starter served small or large.', price: 'From 5 SAR' },
        { name: 'Mutabal', desc: 'Smoky eggplant dip with rich, smooth texture.', price: 'From 5 SAR' },
        { name: 'Wraps', desc: 'Meat ball wrap, tortilla wrap, and Adana wrap with fresh vegetables and sauce.', price: 'From 11 SAR' },
        { name: 'Fateer', desc: 'Cheese, lahmacun, chicken, mutton, mixed, and tray kabab fateer.', price: 'From 11 SAR' }
      ]
    },
    asian: {
      kicker: 'Cuisine', title: 'Asian Cuisine',
      intro: 'Comforting Asian-style mains with karahi, handi, biryani, pulao, fried rice, and traditional sauces.',
      images: [{ src: 'assets/food-biryani.jpg', alt: 'Asian cuisine biryani and rice dish' }],
      items: [
        { name: 'Mutton Special', desc: 'Mutton dum pukht, mutton rosh, karahi, shinwari, white desi ghee, and kabab masala.', price: 'Ask for Prices' },
        { name: 'Chicken Special', desc: 'Chicken karahi, chicken white, makhni masala, boneless handi, Mughlai handi, and kabab masala.', price: 'Ask for Prices' },
        { name: 'Rice Special', desc: 'Biryani, mutton pulao, and fried rice prepared fresh.', price: 'Ask for Prices' },
        { name: 'Traditional Sides', desc: 'Mint sauce, tomato sauce, and zeera raita.', price: 'Ask for Prices' }
      ]
    },
    desserts: {
      kicker: 'Sweets', title: 'Desserts',
      intro: 'Sweet finishes with rich chocolate, creamy sundaes, filled cookies, tarts, donuts, eclairs, and loaves.',
      images: [{ src: 'assets/food-dessert.jpg', alt: 'Chocolate dessert' }],
      items: [
        { name: 'Brownies', desc: 'Hot molten lava, double chocolate, walnut brownie, and hot fudge brownie.', price: 'Ask for Prices' },
        { name: 'Cookies', desc: 'Chocolate hazelnut, double chocolate, red velvet, and kunafa chocolate filled cookies.', price: 'Ask for Prices' },
        { name: 'Sundaes & Tarts', desc: 'Three milk, lotus, red velvet, chocolate mart sundaes, plus lemon, walnut, and chocolate tarts.', price: 'Ask for Prices' },
        { name: 'Donuts & Eclairs', desc: 'Chocolate, caramel, strawberry, lotus donuts, chocolate eclair, and caramel eclair.', price: 'Ask for Prices' }
      ]
    }
  },
  ar: {
    pizza: {
      kicker: 'بيتزا', title: 'بيتزا أروما الخاصة',
      intro: 'بيتزا أروما المميزة لأول قضمة تشعر بالفخامة: جبن غني، صلصات جريئة، إضافات طازجة، وعجائن لا تُنسى.',
      images: [
        { src: 'assets/pizza-crown-crust.png', alt: 'بيتزا كراون كراست من أروما' },
        { src: 'assets/pizza-stuffed-crust.png', alt: 'بيتزا كراست المحشو الخاصة' }
      ],
      items: [
        { name: 'بيتزا كراون كراست أروما', desc: 'دجاج طري، صلصة أروما الخاصة، موزاريلا فاخرة، خضروات طازجة، وكراست كراون محمّر.', price: 'ريقيولر 43 ريال' },
        { name: 'بيتزا كراست المحشو الخاصة', desc: 'دجاج وافر، جبن كريمي، خضروات طازجة، وكراست محشو بالجبن وكباب الدجاج وكباب الغنم.', price: 'ريقيولر 43 ريال' },
        { name: 'بيتزا أروما العملاقة', desc: 'بيتزا نصف متر ومتر كامل تُقدم مع أجنحة وبطاطس ومشروب بارد للمجموعات والعائلات.', price: 'من 82 ريال' },
        { name: 'تشكيلة البيتزا', desc: 'BBQ سوبريم بلايز، تشيكن سوبريم، جرين جاردن، فور سيزونز، مارغريتا، بيبروني، وتكا.', price: 'من 28 ريال' }
      ]
    },
    burgers: {
      kicker: 'برغر', title: 'برغر أروما',
      intro: 'برغر طري بصلصات غنية وإضافات طازجة ووجبات مميزة للشهية السريعة والجلسات المريحة.',
      images: [{ src: 'assets/food-burger.jpg', alt: 'برغر أروما مع البطاطس' }],
      items: [
        { name: 'برغر أروما الكلاسيكي', desc: 'لحم بقري طري، خس طازج، طماطم، بصل، مخلل، وصلصة خاصة.', price: '28 ريال' },
        { name: 'تشيزي بيف سوبريم', desc: 'لحم بقري مع جبن مذاب، خس، طماطم، بصل، وصلصة خاصة.', price: '32 ريال' },
        { name: 'برغر بازياغو', desc: 'لحم بقري بصلصة البازاي، خس، طماطم، بصل، وهالبينيو.', price: '32 ريال' },
        { name: 'دجاج مقرمش أروما', desc: 'فيليه دجاج مقرمش مع خس وصلصة مايو.', price: '28 ريال' }
      ]
    },
    bbq: {
      kicker: 'مشويات', title: 'مشاوي عربية وباكستانية',
      intro: 'مفضلات مشوية على الفحم بتوابل عميقة وحواف مدخنة وأطباق مشتركة.',
      images: [{ src: 'assets/food-bbq.jpg', alt: 'مشاوي عربية وباكستانية' }],
      items: [
        { name: 'كباب عدنة', desc: 'كباب مشوي متبل يُقدم ساخناً مع مرافق طازجة.', price: '18 ريال' },
        { name: 'كباب دجاج', desc: 'أسياخ دجاج طرية مشوية على الفحم.', price: '16 ريال' },
        { name: 'شيش طاووق بدون عظم', desc: 'دجاج مشوي بلا عظم بتتبيلة جريئة ونهاية مدخنة.', price: '18 ريال' },
        { name: 'أطباق مشكلة', desc: 'أطباق مشاوي مشكلة نصف كيلو وكيلو كامل للمشاركة.', price: 'من 49 ريال' }
      ]
    },
    starters: {
      kicker: 'مقبلات', title: 'مقبلات عربية',
      intro: 'مقبلات عربية طازجة ولفائف وفطير للمشاركة قبل الطبق الرئيسي.',
      images: [{ src: 'assets/food-starters.jpg', alt: 'مقبلات عربية وحمص' }],
      items: [
        { name: 'حمص', desc: 'مقبل حمص كريمي يُقدم صغيراً أو كبيراً.', price: 'من 5 ريال' },
        { name: 'متبل', desc: 'غموس باذنجان مدخن بقوام غني وناعم.', price: 'من 5 ريال' },
        { name: 'لفائف', desc: 'لفيفة كفتة، تورتيلا، ولفيفة عدنة مع خضروات طازجة وصلصة.', price: 'من 11 ريال' },
        { name: 'فطير', desc: 'فطير جبن، لحم بالعجين، دجاج، غنم، مشكل، وكباب صينية.', price: 'من 11 ريال' }
      ]
    },
    asian: {
      kicker: 'مطبخ', title: 'المطبخ الآسيوي',
      intro: 'أطباق آسيوية مريحة بكراهي وهندي وبرياني وپلاو وأرز مقلي وصلصات تقليدية.',
      images: [{ src: 'assets/food-biryani.jpg', alt: 'برياني وأرز' }],
      items: [
        { name: 'خاص الغنم', desc: 'غنم دم پخت، غنم روش، كراهي، شينواري، سمن بلدي أبيض، ومسالة كباب.', price: 'اسأل عن السعر' },
        { name: 'خاص الدجاج', desc: 'كراهي دجاج، أبيض، مخني مسالة، هندي بدون عظم، مغلاي هندي، ومسالة كباب.', price: 'اسأل عن السعر' },
        { name: 'خاص الأرز', desc: 'برياني، پلاو غنم، وأرز مقلي طازج.', price: 'اسأل عن السعر' },
        { name: 'مرافق تقليدية', desc: 'صلصة نعناع، صلصة طماطم، ورايتا الكمون.', price: 'اسأل عن السعر' }
      ]
    },
    desserts: {
      kicker: 'حلويات', title: 'الحلويات',
      intro: 'ختامات حلوة بشوكولاتة غنية وصندي كريمي وكوكيز محشو وتارت ودونات وإكلير وكيك.',
      images: [{ src: 'assets/food-dessert.jpg', alt: 'حلويات شوكولاتة' }],
      items: [
        { name: 'براوني', desc: 'لابا مولتن ساخن، شوكولاتة مزدوجة، براوني جوز، وبراوني فدج ساخن.', price: 'اسأل عن السعر' },
        { name: 'كوكيز', desc: 'كوكيز بالنوتيلا، شوكولاتة مزدوجة، ريد فيلفيت، وكنافة شوكولاتة.', price: 'اسأل عن السعر' },
        { name: 'صندي وتارت', desc: 'صندي ثري ميلك ولوتس وريد فيلفيت وشوكولاتة، وتارت ليمون وجوز وشوكولاتة.', price: 'اسأل عن السعر' },
        { name: 'دونات وإكلير', desc: 'دونات شوكولاتة وكراميل وفراولة ولوتس، وإكلير شوكولاتة وكراميل.', price: 'اسأل عن السعر' }
      ]
    }
  }
};

// ── MAIN DOM READY ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('#mobileMenu a');
  const revealEls = document.querySelectorAll('.reveal');
  const nav = document.querySelector('nav');
  const menuCards = document.querySelectorAll('[data-menu]');
  const menuModal = document.getElementById('menuModal');
  const menuModalHero = document.getElementById('menuModalHero');
  const menuModalKicker = document.getElementById('menuModalKicker');
  const menuModalTitle = document.getElementById('menuModalTitle');
  const menuModalIntro = document.getElementById('menuModalIntro');
  const menuModalItems = document.getElementById('menuModalItems');
  const menuModalClose = document.querySelector('.menu-modal-close');
  const langToggle = document.getElementById('langToggle');

  let currentLang = localStorage.getItem('aroma_lang') || 'en';

  // Apply saved language on load
  applyLanguage(currentLang);

  // Language toggle click
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(currentLang);
    });
  }

  // ── Mobile Menu ──
  function closeMobileMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // ── Menu Modal ──
  function closeMenuModal() {
    if (!menuModal) return;
    menuModal.classList.remove('open');
    menuModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openMenuModal(key) {
    const langData = menuDetails[currentLang] || menuDetails['en'];
    const detail = langData[key];
    if (!detail || !menuModal) return;

    menuModalHero.className = `menu-modal-hero${detail.images.length === 1 ? ' single' : ''}`;
    menuModalHero.innerHTML = detail.images.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('');
    menuModalKicker.textContent = detail.kicker;
    menuModalTitle.textContent = detail.title;
    menuModalIntro.textContent = detail.intro;
    menuModalItems.innerHTML = detail.items.map(item => `
      <article class="menu-modal-item">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="menu-modal-price">${item.price}</span>
      </article>
    `).join('');

    menuModal.classList.add('open');
    menuModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  menuCards.forEach(card => card.addEventListener('click', () => openMenuModal(card.dataset.menu)));

  if (menuModalClose) menuModalClose.addEventListener('click', closeMenuModal);
  if (menuModal) menuModal.addEventListener('click', e => { if (e.target === menuModal) closeMenuModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenuModal(); });

  // ── Scroll reveal ──
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ── Nav shadow + scrolled class ──
  window.addEventListener('scroll', () => {
    if (!nav) return;
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('scrolled', scrolled);
    nav.style.boxShadow = scrolled ? '0 4px 32px rgba(0,0,0,.6)' : 'none';
  }, { passive: true });
});
