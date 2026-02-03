import type { Program, ProgramSubject, ProgramActivity } from './types'

export const programs: Program[] = [
  {
    id: 'toddlers',
    slug: 'toddlers',
    name: {
      ru: 'Ясли',
      en: 'Toddlers'
    },
    ageRange: {
      min: 18, // 1.5 years in months
      max: 36, // 3 years in months
      display: {
        ru: '1.5–3 года',
        en: '1.5–3 years'
      }
    },
    description: {
      ru: 'Бережная адаптация и раннее развитие для самых маленьких. Развитие речи, сенсорики, моторики через игру в атмосфере заботы и безопасности.',
      en: 'Gentle adaptation and early development for the youngest. Speech, sensory, and motor development through play in an atmosphere of care and safety.'
    },
    goals: [
      {
        ru: 'Мягкая адаптация к детскому саду без стресса',
        en: 'Gentle stress-free kindergarten adaptation'
      },
      {
        ru: 'Развитие речи и коммуникативных навыков',
        en: 'Speech and communication skills development'
      },
      {
        ru: 'Сенсорное развитие через игру',
        en: 'Sensory development through play'
      },
      {
        ru: 'Развитие крупной и мелкой моторики',
        en: 'Gross and fine motor skills development'
      },
      {
        ru: 'Социализация и навыки взаимодействия',
        en: 'Socialization and interaction skills'
      }
    ],
    image: '/images/programs/toddlers.jpg',
    schedule: {
      arrival: '8:30',
      departure: '19:30',
      napTime: { start: '13:00', end: '15:30' }
    },
    curriculum: {
      subjects: [
        {
          id: 'speech-toddlers',
          name: { ru: 'Развитие речи', en: 'Speech Development' },
          description: {
            ru: 'Расширение словарного запаса, звукоподражание, простые фразы, пальчиковые игры',
            en: 'Vocabulary expansion, sound imitation, simple phrases, finger games'
          },
          weeklyHours: 2,
          icon: 'message-circle'
        },
        {
          id: 'sensory-toddlers',
          name: { ru: 'Сенсорное развитие', en: 'Sensory Play' },
          description: {
            ru: 'Изучение форм, цветов, размеров, текстур через тактильные игры и материалы',
            en: 'Learning shapes, colors, sizes, textures through tactile play and materials'
          },
          weeklyHours: 3,
          icon: 'hand'
        },
        {
          id: 'motor-toddlers',
          name: { ru: 'Физическое развитие', en: 'Physical Development' },
          description: {
            ru: 'Развитие координации, баланса, крупной моторики через подвижные игры',
            en: 'Coordination, balance, gross motor skills through active games'
          },
          weeklyHours: 5,
          icon: 'activity'
        }
      ],
      activities: [
        {
          id: 'music-toddlers',
          name: { ru: 'Музыка и ритм', en: 'Music & Rhythm' },
          description: {
            ru: 'Пение, ритмические игры, знакомство с простыми музыкальными инструментами',
            en: 'Singing, rhythm games, introduction to simple musical instruments'
          },
          frequency: { ru: '3 раза в неделю', en: '3 times per week' },
          icon: 'music'
        },
        {
          id: 'art-toddlers',
          name: { ru: 'Творчество', en: 'Arts & Crafts' },
          description: {
            ru: 'Рисование пальчиками и кистью, лепка из пластилина, простые аппликации',
            en: 'Finger and brush painting, clay modeling, simple collages'
          },
          frequency: { ru: 'Ежедневно', en: 'Daily' },
          icon: 'palette'
        },
        {
          id: 'outdoor-toddlers',
          name: { ru: 'Прогулки', en: 'Outdoor Play' },
          description: {
            ru: 'Игры на свежем воздухе, песочница, качели, изучение природы',
            en: 'Outdoor games, sandbox, swings, nature exploration'
          },
          frequency: { ru: '2 раза в день', en: 'Twice daily' },
          icon: 'sun'
        }
      ]
    },
    staffing: {
      teacherRatio: '1:6',
      maxGroupSize: 12
    },
    features: [
      {
        ru: 'Малые группы до 12 детей',
        en: 'Small groups up to 12 children'
      },
      {
        ru: '2 воспитателя + помощник в группе',
        en: '2 teachers + assistant per group'
      },
      {
        ru: 'Адаптация без слёз по индивидуальному графику',
        en: 'Tearless adaptation with individual schedule'
      },
      {
        ru: 'Безопасная развивающая среда',
        en: 'Safe developmental environment'
      },
      {
        ru: 'Ежедневная связь с родителями',
        en: 'Daily parent communication'
      }
    ],
    featured: true
  },
  {
    id: 'preschool',
    slug: 'preschool',
    name: {
      ru: 'Дошкольники',
      en: 'Preschool'
    },
    ageRange: {
      min: 36, // 3 years
      max: 60, // 5 years
      display: {
        ru: '3–5 лет',
        en: '3–5 years'
      }
    },
    description: {
      ru: 'Комплексное развитие ребёнка через игру и познание. Подготовка к школе, творческие занятия, английский язык, развитие самостоятельности.',
      en: 'Comprehensive child development through play and learning. School preparation, creative activities, English language, independence development.'
    },
    goals: [
      {
        ru: 'Развитие познавательных способностей',
        en: 'Cognitive abilities development'
      },
      {
        ru: 'Обучение чтению и основам математики',
        en: 'Reading and basic math education'
      },
      {
        ru: 'Английский язык в игровой форме',
        en: 'English language through play'
      },
      {
        ru: 'Творческое самовыражение',
        en: 'Creative self-expression'
      },
      {
        ru: 'Социальные навыки и работа в команде',
        en: 'Social skills and teamwork'
      }
    ],
    image: '/images/programs/preschool.jpg',
    schedule: {
      arrival: '8:30',
      departure: '19:30',
      napTime: { start: '13:30', end: '15:30' }
    },
    curriculum: {
      subjects: [
        {
          id: 'literacy-preschool',
          name: { ru: 'Грамота и чтение', en: 'Literacy & Reading' },
          description: {
            ru: 'Изучение букв, звуковой анализ, первые слова, развитие фонематического слуха',
            en: 'Letter learning, phonetic analysis, first words, phonemic awareness'
          },
          weeklyHours: 3,
          icon: 'book-open'
        },
        {
          id: 'math-preschool',
          name: { ru: 'Математика', en: 'Mathematics' },
          description: {
            ru: 'Цифры, счёт, простые задачи, геометрические фигуры, логика',
            en: 'Numbers, counting, simple problems, geometric shapes, logic'
          },
          weeklyHours: 3,
          icon: 'calculator'
        },
        {
          id: 'english-preschool',
          name: { ru: 'Английский язык', en: 'English Language' },
          description: {
            ru: 'Игровое изучение английского с носителем языка, песни, стихи, диалоги',
            en: 'Playful English with native speaker, songs, rhymes, dialogues'
          },
          weeklyHours: 4,
          icon: 'globe'
        },
        {
          id: 'world-preschool',
          name: { ru: 'Окружающий мир', en: 'World Around Us' },
          description: {
            ru: 'Изучение природы, животных, растений, времён года, профессий',
            en: 'Nature, animals, plants, seasons, professions exploration'
          },
          weeklyHours: 2,
          icon: 'leaf'
        }
      ],
      activities: [
        {
          id: 'art-preschool',
          name: { ru: 'Изобразительное искусство', en: 'Visual Arts' },
          description: {
            ru: 'Рисование, лепка, аппликация, работа с различными материалами',
            en: 'Drawing, sculpting, collage, working with various materials'
          },
          frequency: { ru: 'Ежедневно', en: 'Daily' },
          icon: 'paintbrush'
        },
        {
          id: 'music-preschool',
          name: { ru: 'Музыка', en: 'Music' },
          description: {
            ru: 'Пение, музыкальные игры, игра на инструментах, ритмика',
            en: 'Singing, musical games, playing instruments, rhythmics'
          },
          frequency: { ru: '3 раза в неделю', en: '3 times per week' },
          icon: 'music'
        },
        {
          id: 'dance-preschool',
          name: { ru: 'Хореография', en: 'Dance' },
          description: {
            ru: 'Танцевальные движения, пластика, постановка танцев',
            en: 'Dance movements, plasticity, choreography'
          },
          frequency: { ru: '2 раза в неделю', en: 'Twice a week' },
          icon: 'disc'
        },
        {
          id: 'pe-preschool',
          name: { ru: 'Физкультура', en: 'Physical Education' },
          description: {
            ru: 'Подвижные игры, упражнения, развитие ловкости и силы',
            en: 'Active games, exercises, agility and strength development'
          },
          frequency: { ru: 'Ежедневно', en: 'Daily' },
          icon: 'heart'
        }
      ]
    },
    staffing: {
      teacherRatio: '1:8',
      maxGroupSize: 15
    },
    features: [
      {
        ru: 'Программа по ФГОС с авторскими методиками',
        en: 'FSES curriculum with original methods'
      },
      {
        ru: 'Носитель английского языка',
        en: 'Native English speaker'
      },
      {
        ru: 'Творческие мастерские',
        en: 'Creative workshops'
      },
      {
        ru: 'Подготовка к школе',
        en: 'School preparation'
      },
      {
        ru: 'Развитие эмоционального интеллекта',
        en: 'Emotional intelligence development'
      }
    ],
    featured: true
  },
  {
    id: 'pre-k',
    slug: 'pre-k',
    name: {
      ru: 'Подготовка к школе',
      en: 'Pre-K / School Prep'
    },
    ageRange: {
      min: 60, // 5 years
      max: 84, // 7 years
      display: {
        ru: '5–7 лет',
        en: '5–7 years'
      }
    },
    description: {
      ru: 'Интенсивная подготовка к школе. Чтение, письмо, математика, логика, развитие усидчивости и самостоятельности. Формирование учебной мотивации.',
      en: 'Intensive school preparation. Reading, writing, mathematics, logic, developing perseverance and independence. Building learning motivation.'
    },
    goals: [
      {
        ru: 'Свободное чтение и понимание текстов',
        en: 'Fluent reading and text comprehension'
      },
      {
        ru: 'Письмо и каллиграфия',
        en: 'Writing and calligraphy'
      },
      {
        ru: 'Математика и логическое мышление',
        en: 'Mathematics and logical thinking'
      },
      {
        ru: 'Готовность к школьным требованиям',
        en: 'Readiness for school requirements'
      },
      {
        ru: 'Самостоятельность и ответственность',
        en: 'Independence and responsibility'
      }
    ],
    image: '/images/programs/pre-k.jpg',
    schedule: {
      arrival: '8:30',
      departure: '19:30',
      napTime: { start: '14:00', end: '15:30' } // Optional for older kids
    },
    curriculum: {
      subjects: [
        {
          id: 'reading-prek',
          name: { ru: 'Чтение', en: 'Reading' },
          description: {
            ru: 'Беглое чтение, работа с текстом, пересказ, анализ прочитанного',
            en: 'Fluent reading, text work, retelling, comprehension analysis'
          },
          weeklyHours: 4,
          icon: 'book'
        },
        {
          id: 'writing-prek',
          name: { ru: 'Письмо', en: 'Writing' },
          description: {
            ru: 'Прописи, каллиграфия, диктанты, развитие мелкой моторики руки',
            en: 'Penmanship, calligraphy, dictations, fine motor skills'
          },
          weeklyHours: 4,
          icon: 'pen-tool'
        },
        {
          id: 'math-prek',
          name: { ru: 'Математика', en: 'Mathematics' },
          description: {
            ru: 'Счёт до 100, состав числа, задачи, геометрия, логические игры',
            en: 'Counting to 100, number composition, problems, geometry, logic games'
          },
          weeklyHours: 4,
          icon: 'hash'
        },
        {
          id: 'english-prek',
          name: { ru: 'Английский язык', en: 'English Language' },
          description: {
            ru: 'Чтение на английском, диалоги, расширение словарного запаса, грамматика',
            en: 'English reading, dialogues, vocabulary expansion, grammar'
          },
          weeklyHours: 5,
          icon: 'globe'
        },
        {
          id: 'logic-prek',
          name: { ru: 'Логика и мышление', en: 'Logic & Thinking' },
          description: {
            ru: 'Головоломки, шахматы, стратегические игры, развитие внимания',
            en: 'Puzzles, chess, strategy games, attention development'
          },
          weeklyHours: 2,
          icon: 'brain'
        }
      ],
      activities: [
        {
          id: 'chess-prek',
          name: { ru: 'Шахматы', en: 'Chess' },
          description: {
            ru: 'Обучение игре в шахматы, турниры, развитие стратегического мышления',
            en: 'Chess training, tournaments, strategic thinking development'
          },
          frequency: { ru: '2 раза в неделю', en: 'Twice a week' },
          icon: 'crown'
        },
        {
          id: 'experiments-prek',
          name: { ru: 'Опыты и эксперименты', en: 'Experiments' },
          description: {
            ru: 'Простые научные опыты, изучение физики и химии через практику',
            en: 'Simple science experiments, physics and chemistry through practice'
          },
          frequency: { ru: '1 раз в неделю', en: 'Once a week' },
          icon: 'flask'
        },
        {
          id: 'projects-prek',
          name: { ru: 'Проектная деятельность', en: 'Project Work' },
          description: {
            ru: 'Работа над проектами, презентации, исследования',
            en: 'Working on projects, presentations, research'
          },
          frequency: { ru: '1 раз в неделю', en: 'Once a week' },
          icon: 'folder'
        }
      ]
    },
    staffing: {
      teacherRatio: '1:10',
      maxGroupSize: 15
    },
    features: [
      {
        ru: 'Программа соответствует школьным требованиям',
        en: 'Curriculum meets school requirements'
      },
      {
        ru: 'Психологическая готовность к школе',
        en: 'Psychological school readiness'
      },
      {
        ru: 'Индивидуальный подход',
        en: 'Individual approach'
      },
      {
        ru: 'Развитие учебной мотивации',
        en: 'Learning motivation development'
      },
      {
        ru: 'Тестирование перед поступлением в школу',
        en: 'Testing before school enrollment'
      }
    ],
    featured: true
  }
]

// Export helper functions
export function getProgramById(id: string): Program | undefined {
  return programs.find(p => p.id === id)
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug)
}

export function getFeaturedPrograms(): Program[] {
  return programs.filter(p => p.featured)
}

export function getProgramsByAgeInMonths(ageInMonths: number): Program[] {
  return programs.filter(p =>
    ageInMonths >= p.ageRange.min && ageInMonths <= p.ageRange.max
  )
}
