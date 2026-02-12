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
    author: { ru: 'Дмитрий К.', en: 'Dmitry K.' },
    branch: 'lipoviy-park',
    rating: 5,
    text: {
      ru: 'Дочка с радостью бежит на занятия! Очень нравится игровой формат обучения. За 3 месяца заметный прогресс.',
      en: 'My daughter runs to class with joy! She loves the game-based learning format. Noticeable progress in 3 months.',
    },
    childAge: '7',
  },
  {
    id: '3',
    author: { ru: 'Елена С.', en: 'Elena S.' },
    branch: 'leninskiy',
    rating: 5,
    text: {
      ru: 'Готовили сына к ЕГЭ по английскому. Результат — 92 балла! Спасибо преподавателям за профессионализм и терпение.',
      en: 'We prepared our son for the English state exam. Result — 92 points! Thanks to the teachers for their professionalism and patience.',
    },
    childAge: '16',
  },
  {
    id: '4',
    author: { ru: 'Ольга В.', en: 'Olga V.' },
    branch: 'novaya-zvezda',
    rating: 5,
    text: {
      ru: 'Ходим уже второй год. Ребёнок стал уверенно общаться на английском. Очень удобное расположение филиала.',
      en: 'We have been attending for the second year. The child has become confident in communicating in English. Very convenient branch location.',
    },
    childAge: '9',
  },
  {
    id: '5',
    author: { ru: 'Михаил Т.', en: 'Mikhail T.' },
    branch: 'novye-vatutinki',
    rating: 5,
    text: {
      ru: 'Отличная школа! Маленькие группы, индивидуальный подход. Двое детей ходят с удовольствием.',
      en: 'Excellent school! Small groups, individual approach. Both of my children attend with pleasure.',
    },
    childAge: '8, 11',
  },
  {
    id: '6',
    author: { ru: 'Наталья Р.', en: 'Natalia R.' },
    branch: 'solntsevo',
    rating: 5,
    text: {
      ru: 'Младший сын (4 года) с первого занятия был в восторге. Сейчас уже знает цвета, животных, считает на английском.',
      en: 'My youngest son (4 years old) was delighted from the first lesson. Now he already knows colors, animals, and counts in English.',
    },
    childAge: '4',
  },
  {
    id: '7',
    author: { ru: 'Ирина Б.', en: 'Irina B.' },
    branch: 'universitet',
    rating: 5,
    text: {
      ru: 'Прекрасная школа с профессиональными преподавателями. Дочь занимается год, свободно читает и понимает английскую речь.',
      en: 'Wonderful school with professional teachers. My daughter has been studying for a year, reads freely and understands English speech.',
    },
    childAge: '10',
  },
  {
    id: '8',
    author: { ru: 'Сергей П.', en: 'Sergey P.' },
    branch: 'zhk-dubrovka',
    rating: 5,
    text: {
      ru: 'Сын перестал бояться говорить на английском. Занятия проходят интересно, преподаватели умеют заинтересовать детей.',
      en: 'My son stopped being afraid to speak English. Classes are interesting, teachers know how to engage children.',
    },
    childAge: '8',
  },
  {
    id: '9',
    author: { ru: 'Мария Л.', en: 'Maria L.' },
    branch: 'home-city',
    rating: 5,
    text: {
      ru: 'Очень довольны результатами! Ребёнок с удовольствием делает домашние задания и ждёт следующего занятия.',
      en: 'Very satisfied with the results! The child enjoys doing homework and looks forward to the next lesson.',
    },
    childAge: '6',
  },
]
