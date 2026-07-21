export interface Branch {
  id: string
  slug: string
  name: { ru: string; en: string }
  address: { ru: string; en: string }
  phone: string
  coordinates: [number, number] // [lat, lng]
  yandexMapsUrl: string
}

export const branches: Branch[] = [
  {
    id: '1',
    slug: 'kommunarka-monakhovoy',
    name: {
      ru: 'Коммунарка, ул. Александры Монаховой, д. 10',
      en: 'Kommunarka, Aleksandry Monakhovoy St., 10',
    },
    address: {
      ru: 'Москва, посёлок Коммунарка, ул. Александры Монаховой, 10',
      en: 'Moscow, Kommunarka, Aleksandry Monakhovoy St., 10',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.5728, 37.4735],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/100180887853/',
  },
  {
    id: '2',
    slug: 'lipoviy-park',
    name: {
      ru: 'Липовый Парк, ул. Липовый Парк, д. 5',
      en: 'Lipovy Park, Lipovy Park St., 5',
    },
    address: {
      ru: 'Москва, Липовый Парк, ул. Липовый Парк, д. 5',
      en: 'Moscow, Lipovy Park, Lipovy Park St., 5',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.5615, 37.4690],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/128686209977/',
  },
  {
    id: '3',
    slug: 'novaya-zvezda',
    name: {
      ru: 'Новая Звезда, Бачуринская ул., д. 7/1',
      en: 'Novaya Zvezda, Bachurinskaya St., 7/1',
    },
    address: {
      ru: 'Москва, Новая Звезда, Бачуринская ул., д. 7/1',
      en: 'Moscow, Novaya Zvezda, Bachurinskaya St., 7/1',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.5772, 37.4805],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/137342625080/',
  },
  {
    id: '4',
    slug: 'zhk-dubrovka',
    name: {
      ru: 'ЖК Дубровка, Сосновая ул., 1Б',
      en: 'ZhK Dubrovka, Sosnovaya St., 1B',
    },
    address: {
      ru: 'Москва, ЖК Дубровка, Сосновая ул., 1Б',
      en: 'Moscow, ZhK Dubrovka, Sosnovaya St., 1B',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.5680, 37.4465],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/39623816484/',
  },
  {
    id: '5',
    slug: 'solntsevo',
    name: {
      ru: 'Солнцево, ул. Лётчика Грицевца, 10',
      en: 'Solntsevo, Lyotchika Gritsevtsa St., 10',
    },
    address: {
      ru: 'Москва, Солнцево, ул. Лётчика Грицевца, 10',
      en: 'Moscow, Solntsevo, Lyotchika Gritsevtsa St., 10',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.6235, 37.3112],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/54080616315/',
  },
  {
    id: '6',
    slug: 'leninskiy',
    name: {
      ru: 'Ленинский проспект, 113/1',
      en: 'Leninsky Prospekt, 113/1',
    },
    address: {
      ru: 'Москва, Ленинский проспект, 113/1',
      en: 'Moscow, Leninsky Prospekt, 113/1',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.6558, 37.4982],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/178842357663/',
  },
  {
    id: '7',
    slug: 'universitet',
    name: {
      ru: 'м. Университет, Ломоносовский пр-т, 25к3',
      en: 'Universitet Metro, Lomonosovsky Prospekt, 25/3',
    },
    address: {
      ru: 'Москва, м. Университет, Ломоносовский проспект, 25к3',
      en: 'Moscow, Universitet Metro, Lomonosovsky Prospekt, 25/3',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.6942, 37.5287],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/172922456146/',
  },
  {
    id: '8',
    slug: 'home-city',
    name: {
      ru: 'Home City, ул. Инженера Кнорре, 7, корп. 3',
      en: 'Home City, Inzhenera Knorre St., 7, Bldg. 3',
    },
    address: {
      ru: 'Москва, ул. Инженера Кнорре, 7, корп. 3',
      en: 'Moscow, Inzhenera Knorre St., 7, Bldg. 3',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.6379, 37.4298],
    yandexMapsUrl: '',
  },
  {
    id: '9',
    slug: 'novye-vatutinki',
    name: {
      ru: 'Новые Ватутинки, 3-я Нововатутинская ул., 4',
      en: 'Novye Vatutinki, 3rd Novovatutinskaya St., 4',
    },
    address: {
      ru: 'Москва, Новые Ватутинки, 3-я Нововатутинская ул., 4',
      en: 'Moscow, Novye Vatutinki, 3rd Novovatutinskaya St., 4',
    },
    phone: '+7 (925) 263-00-88',
    coordinates: [55.5207, 37.3478],
    yandexMapsUrl: 'https://yandex.ru/maps/org/ewe_school/59304002722/',
  },
]

export interface PriceItem {
  format: { ru: string; en: string }
  schedule: { ru: string; en: string }
  price: { ru: string; en: string }
}

export interface PriceTier {
  id: string
  branchSlugs: string[]
  items: PriceItem[]
}

export const priceTiers: PriceTier[] = [
  {
    id: 'standard',
    branchSlugs: [
      'kommunarka-monakhovoy',
      'novaya-zvezda',
      'lipoviy-park',
      'solntsevo',
      'home-city',
      'leninskiy',
    ],
    items: [
      {
        format: { ru: 'Группа (4–6 человек)', en: 'Group (4–6 students)' },
        schedule: { ru: '2 раза в неделю · 80 минут', en: 'Twice a week · 80 minutes' },
        price: { ru: '9 200 ₽ в месяц', en: '9,200 ₽ per month' },
      },
      {
        format: { ru: 'Мини-группа (2–3 человека)', en: 'Mini group (2–3 students)' },
        schedule: { ru: '2 раза в неделю · 60 минут', en: 'Twice a week · 60 minutes' },
        price: { ru: '10 900 ₽ в месяц', en: '10,900 ₽ per month' },
      },
      {
        format: { ru: 'Индивидуальные занятия с носителем', en: 'Individual lessons with a native speaker' },
        schedule: { ru: '45 минут', en: '45 minutes' },
        price: { ru: 'от 2 000 ₽ за занятие', en: 'from 2,000 ₽ per lesson' },
      },
    ],
  },
  {
    id: 'premium',
    branchSlugs: ['zhk-dubrovka', 'universitet'],
    items: [
      {
        format: { ru: 'Группа (4–6 человек)', en: 'Group (4–6 students)' },
        schedule: { ru: '2 раза в неделю · 80 минут', en: 'Twice a week · 80 minutes' },
        price: { ru: '9 900 ₽ в месяц', en: '9,900 ₽ per month' },
      },
      {
        format: { ru: 'Мини-группа (2–3 человека)', en: 'Mini group (2–3 students)' },
        schedule: { ru: '2 раза в неделю · 60 минут', en: 'Twice a week · 60 minutes' },
        price: { ru: '13 500 ₽ в месяц', en: '13,500 ₽ per month' },
      },
      {
        format: { ru: 'Индивидуальные занятия с носителем', en: 'Individual lessons with a native speaker' },
        schedule: { ru: '45 минут', en: '45 minutes' },
        price: { ru: 'от 3 000 ₽ за занятие', en: 'from 3,000 ₽ per lesson' },
      },
    ],
  },
  {
    id: 'vatutinki',
    branchSlugs: ['novye-vatutinki'],
    items: [
      {
        format: { ru: 'Группа (4–6 человек)', en: 'Group (4–6 students)' },
        schedule: { ru: '2 раза в неделю · 80 минут', en: 'Twice a week · 80 minutes' },
        price: { ru: '8 500 ₽ в месяц', en: '8,500 ₽ per month' },
      },
      {
        format: { ru: 'Мини-группа (2–3 человека)', en: 'Mini group (2–3 students)' },
        schedule: { ru: '2 раза в неделю · 60 минут', en: 'Twice a week · 60 minutes' },
        price: { ru: '8 500 ₽ в месяц', en: '8,500 ₽ per month' },
      },
      {
        format: { ru: 'Группа (4–6 человек)', en: 'Group (4–6 students)' },
        schedule: { ru: '2 раза в неделю · 60 минут', en: 'Twice a week · 60 minutes' },
        price: { ru: '6 500 ₽ в месяц', en: '6,500 ₽ per month' },
      },
      {
        format: { ru: 'Группа (4–6 человек)', en: 'Group (4–6 students)' },
        schedule: { ru: '2 раза в неделю · 45 минут', en: 'Twice a week · 45 minutes' },
        price: { ru: '5 200 ₽ в месяц', en: '5,200 ₽ per month' },
      },
      {
        format: { ru: 'Мини-группа (2–3 человека)', en: 'Mini group (2–3 students)' },
        schedule: { ru: '2 раза в неделю · 45 минут', en: 'Twice a week · 45 minutes' },
        price: { ru: '6 900 ₽ в месяц', en: '6,900 ₽ per month' },
      },
      {
        format: { ru: 'Индивидуальные занятия с носителем', en: 'Individual lessons with a native speaker' },
        schedule: { ru: '45 / 60 минут', en: '45 / 60 minutes' },
        price: { ru: '1 500 ₽ / 2 000 ₽ за занятие', en: '1,500 ₽ / 2,000 ₽ per lesson' },
      },
    ],
  },
]

export function getPricesForBranch(slug: string): PriceItem[] {
  return priceTiers.find((tier) => tier.branchSlugs.includes(slug))?.items ?? []
}

export interface Course {
  id: string
  slug: string
  ageGroup: string
  name: { ru: string; en: string }
  ageRange: { ru: string; en: string }
  description: { ru: string; en: string }
  features: { ru: string[]; en: string[] }
  image: string
}

export const courses: Course[] = [
  {
    id: 'preschool',
    slug: 'preschool',
    ageGroup: 'preschool',
    name: { ru: 'Дошкольники', en: 'Preschoolers' },
    ageRange: { ru: '3–6 лет', en: '3–6 years' },
    image: '/images/photos/courses/preschool.jpg',
    description: {
      ru: 'Знакомство с английским через игры, песни и творчество. Формируем интерес к языку с раннего возраста.',
      en: 'Introduction to English through games, songs and creativity. Building interest in language from an early age.',
    },
    features: {
      ru: [
        'Занятия в игровой форме',
        'Группы до 6 человек',
        'Длительность до 80 минут',
        'Развитие речи и аудирования',
      ],
      en: [
        'Game-based lessons',
        'Groups up to 6 students',
        'Up to 80-minute sessions',
        'Speaking and listening development',
      ],
    },
  },
  {
    id: 'school',
    slug: 'school',
    ageGroup: 'school',
    name: { ru: 'Школьники', en: 'School Children' },
    ageRange: { ru: '7–12 лет', en: '7–12 years' },
    image: '/images/photos/courses/school.jpg',
    description: {
      ru: 'Развиваем все языковые навыки: чтение, письмо, говорение и аудирование. Помогаем с школьной программой.',
      en: 'Developing all language skills: reading, writing, speaking and listening. Helping with school curriculum.',
    },
    features: {
      ru: [
        'Все 4 языковых навыка',
        'Группы до 6 человек',
        'Длительность до 80 минут',
        'Помощь с школьной программой',
      ],
      en: [
        'All 4 language skills',
        'Groups up to 6 students',
        'Up to 80-minute sessions',
        'School curriculum support',
      ],
    },
  },
  {
    id: 'teens',
    slug: 'teens',
    ageGroup: 'teens',
    name: { ru: 'Подростки', en: 'Teenagers' },
    ageRange: { ru: '13–17 лет', en: '13–17 years' },
    image: '/images/photos/courses/teens.jpg',
    description: {
      ru: 'Настоящий разговорный английский, подготовка к международным экзаменам, полная готовность к ОГЭ/ЕГЭ.',
      en: 'Real conversational English, international exam preparation, full readiness for state exams.',
    },
    features: {
      ru: [
        'Подготовка к ОГЭ и ЕГЭ',
        'Группы до 6 человек',
        'Длительность 80 минут',
        'Международные сертификаты',
      ],
      en: [
        'State exam preparation',
        'Groups up to 6 students',
        '80-minute sessions',
        'International certificates',
      ],
    },
  },
  {
    id: 'adults',
    slug: 'adults',
    ageGroup: 'adults',
    name: { ru: 'Взрослые', en: 'Adults' },
    ageRange: { ru: '18+ лет', en: '18+ years' },
    image: '/images/photos/courses/adults.jpg',
    description: {
      ru: 'Английский для работы, путешествий и саморазвития. Гибкий график, индивидуальный подход к целям каждого студента.',
      en: 'English for work, travel and self-development. Flexible schedule, individual approach to each student\'s goals.',
    },
    features: {
      ru: [
        'Разговорная практика с носителями',
        'Группы до 6 человек',
        'Длительность 80 минут',
        'Английский для повседневной жизни',
      ],
      en: [
        'Conversational practice with native speakers',
        'Groups up to 6 students',
        '80-minute sessions',
        'English for everyday life',
      ],
    },
  },
]

export interface Review {
  id: string
  author: { ru: string; en: string }
  branch: string
  rating: number
  text: { ru: string; en: string }
  childAge: string
}

export const reviews: Review[] = [
  {
    id: '1',
    author: { ru: 'Анна М.', en: 'Anna M.' },
    branch: 'kommunarka-monakhovoy',
    rating: 5,
    text: {
      ru: 'Ребёнок ходит уже полгода и результаты впечатляют! Начал говорить простые фразы на английском. Преподаватели замечательные, находят подход к каждому ребёнку.',
      en: 'My child has been attending for six months and the results are impressive! Started speaking simple phrases in English. The teachers are wonderful and find an approach to every child.',
    },
    childAge: '5',
  },
  {
    id: '2',
    author: { ru: 'Айс Пул', en: 'Ays Pul' },
    branch: 'novye-vatutinki',
    rating: 5,
    text: {
      ru: 'Отличное место для развития ребёнка с носителем языка, рядом с домом, где ребёнку комфортно и нравится ходить на курсы. За 4 месяца занятий (2 раза в неделю) ребёнок с нуля умеет читать свободно на английском и выполнять самостоятельно поставленные задания.',
      en: 'An excellent place for a child\'s development with a native speaker, close to home. After 4 months of lessons (twice a week) the child went from zero to reading freely in English and completing tasks independently.',
    },
    childAge: '6',
  },
  {
    id: '3',
    author: { ru: 'Султыгов Тамерлан', en: 'Sultygov Tamerlan' },
    branch: 'kommunarka-monakhovoy',
    rating: 5,
    text: {
      ru: 'Замечательная школа! Сын второй год с большим удовольствием посещает занятия! Огромный плюс — это изучение языка с его носителем. Импонирует серьёзный подход к обучению, но при этом в игровой форме. Огромная благодарность Эстер за организацию учебного процесса и подбор прекрасных педагогов!',
      en: 'A wonderful school! My son has been attending with great pleasure for the second year! A huge plus is learning with a native speaker. Impressive serious approach combined with a playful format. Many thanks to Ester for organizing the educational process and selecting excellent teachers!',
    },
    childAge: '',
  },
  {
    id: '4',
    author: { ru: 'Инна', en: 'Inna' },
    branch: 'leninskiy',
    rating: 5,
    text: {
      ru: 'На занятиях много разговорной практики, дети учатся рассказывать, обсуждать какие-либо темы без стеснения, без боязни сделать ошибку. Они получают возможность не только выучить правила, но и научиться именно разговаривать на английском.',
      en: 'Classes include a lot of speaking practice — children learn to discuss topics without embarrassment or fear of making mistakes. They get the opportunity not just to learn the rules, but to actually learn to speak English.',
    },
    childAge: '10, 11',
  },
  {
    id: '5',
    author: { ru: 'Ирма Д.', en: 'Irma D.' },
    branch: 'novaya-zvezda',
    rating: 5,
    text: {
      ru: 'Хочу поделиться своими впечатлениями об английской школе, в которой учатся мои дети, и я в том числе! С первого дня посещения мы почувствовали здесь особую атмосферу дружелюбия и профессионализма. Преподаватели не только отлично владеют языком, но и умеют найти подход к каждому ребёнку, делая процесс обучения интересным и увлекательным. Особенное спасибо руководителю Эстер, которая ориентирована на каждого ученика своей прекрасной школы!',
      en: 'I want to share my impressions of the English school where my children and I study! From the very first day we felt a special atmosphere of friendliness and professionalism. The teachers not only speak the language excellently, but also find an approach to every child. Special thanks to director Ester, who is focused on every student in her wonderful school!',
    },
    childAge: '9, 11',
  },
  {
    id: '6',
    author: { ru: 'Наталья Юрчак', en: 'Natalya Yurchak' },
    branch: 'solntsevo',
    rating: 5,
    text: {
      ru: 'Давно хотела написать о школе EwE School, наконец то руки дошли! Посещаем школу в районе Солнцево-Парк. Сыну она понравилась больше всего — свободная дружественная атмосфера, ребёнок не привязан к парте. Конечно преподаватель — очень приятная, располагающая к себе детей (носитель английского). Сын ходит с удовольствием, начал болтать на английском, постоянно поёт английские песенки! P.S. На Новый Год для детей был организован прекрасный праздник — ребёнок в восторге!',
      en: 'I\'ve been meaning to write about EwE School for a long time! We attend in the Solntsevo-Park area. My son loves it most — free and friendly atmosphere, the child is not tied to a desk. The teacher is very pleasant and engaging (a native English speaker). My son attends with pleasure, has started chatting in English, constantly sings English songs! P.S. A wonderful New Year party was organized — my son was thrilled!',
    },
    childAge: '8',
  },
]
