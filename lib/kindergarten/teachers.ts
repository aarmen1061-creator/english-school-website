import type { Teacher } from './types'

export const teachers: Teacher[] = [
  {
    id: 'ivanova-maria',
    slug: 'ivanova-maria',
    name: {
      ru: 'Иванова Мария Петровна',
      en: 'Maria Ivanova'
    },
    photo: '/images/teachers/ivanova-maria.jpg',
    role: {
      ru: 'Старший воспитатель, методист',
      en: 'Lead Teacher, Methodologist'
    },
    bio: {
      short: {
        ru: 'Опыт работы 15 лет. Специализация: раннее развитие и подготовка к школе.',
        en: '15 years of experience. Specialization: early development and school preparation.'
      },
      full: {
        ru: 'Мария Петровна работает с детьми уже 15 лет. Окончила МПГУ по специальности "Дошкольная педагогика". Имеет сертификаты международных методик раннего развития Монтессори и Вальдорфской педагогики. Особое внимание уделяет индивидуальному подходу к каждому ребёнку, учитывая его темперамент и особенности развития. Ведёт авторскую программу подготовки к школе, по которой успешно занимаются дети от 5 до 7 лет.',
        en: 'Maria has been working with children for 15 years. Graduated from Moscow Pedagogical State University with a degree in preschool education. Holds certificates in Montessori and Waldorf international early development methods. Pays special attention to an individual approach to each child, considering their temperament and developmental features. Leads an original school preparation program for children ages 5 to 7.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'МПГУ, дошкольная педагогика (2009)',
          en: 'Moscow Pedagogical State University, preschool education (2009)'
        },
        {
          ru: 'Курсы повышения квалификации по ФГОС ДО (2023)',
          en: 'FSES professional development courses (2023)'
        }
      ],
      certifications: [
        {
          ru: 'Сертификат Монтессори-педагога (AMI)',
          en: 'Montessori Teacher Certificate (AMI)'
        },
        {
          ru: 'Курс "Нейропсихология детства"',
          en: 'Childhood Neuropsychology Course'
        }
      ],
      specializations: [
        {
          ru: 'Раннее развитие',
          en: 'Early development'
        },
        {
          ru: 'Подготовка к школе',
          en: 'School preparation'
        },
        {
          ru: 'Развитие эмоционального интеллекта',
          en: 'Emotional intelligence development'
        }
      ]
    },
    experience: {
      years: 15,
      description: {
        ru: 'Работала в государственных и частных детских садах Москвы. Последние 8 лет — старший воспитатель. Автор методических пособий по подготовке к школе.',
        en: 'Worked in public and private kindergartens in Moscow. Last 8 years as lead teacher. Author of educational materials for school preparation.'
      }
    },
    programs: ['preschool', 'pre-k'],
    quote: {
      ru: 'Каждый ребёнок уникален, и моя задача — помочь раскрыть его потенциал через игру и творчество.',
      en: 'Every child is unique, and my goal is to help unlock their potential through play and creativity.'
    },
    featured: true
  },
  {
    id: 'smirnova-elena',
    slug: 'smirnova-elena',
    name: {
      ru: 'Смирнова Елена Викторовна',
      en: 'Elena Smirnova'
    },
    photo: '/images/teachers/smirnova-elena.jpg',
    role: {
      ru: 'Воспитатель ясельной группы',
      en: 'Toddler Group Teacher'
    },
    bio: {
      short: {
        ru: 'Опыт работы 10 лет. Специализация: работа с детьми раннего возраста и адаптация.',
        en: '10 years of experience. Specialization: working with toddlers and adaptation.'
      },
      full: {
        ru: 'Елена Викторовна — специалист по работе с детьми раннего возраста. Окончила педагогический колледж и продолжила образование в университете. Прошла курсы по детской психологии и методике раннего развития. Имеет огромный опыт мягкой адаптации детей к детскому саду. Знает, как найти подход к каждому малышу и помочь ему чувствовать себя комфортно в новой обстановке.',
        en: 'Elena is a specialist in working with young children. Graduated from pedagogical college and continued education at university. Completed courses in child psychology and early development methods. Has extensive experience in gentle kindergarten adaptation. Knows how to find an approach to each child and help them feel comfortable in a new environment.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'Педагогический колледж №8 (2014)',
          en: 'Pedagogical College #8 (2014)'
        },
        {
          ru: 'МГППУ, факультет психологии',
          en: 'Moscow State University of Psychology, Faculty of Psychology'
        }
      ],
      certifications: [
        {
          ru: 'Курс "Ранний возраст: развитие и воспитание"',
          en: 'Early Age: Development and Education Course'
        },
        {
          ru: 'Сертификат по детской психологии',
          en: 'Child Psychology Certificate'
        }
      ],
      specializations: [
        {
          ru: 'Адаптация к детскому саду',
          en: 'Kindergarten adaptation'
        },
        {
          ru: 'Сенсорное развитие',
          en: 'Sensory development'
        },
        {
          ru: 'Развитие речи',
          en: 'Speech development'
        }
      ]
    },
    experience: {
      years: 10,
      description: {
        ru: 'Работает с детьми от 1.5 до 3 лет. Помогла адаптироваться к садику более 150 малышам.',
        en: 'Works with children ages 1.5 to 3 years. Helped over 150 toddlers adapt to kindergarten.'
      }
    },
    programs: ['toddlers'],
    quote: {
      ru: 'Для меня важно, чтобы каждый ребёнок шёл в садик с радостью, а не со слезами.',
      en: 'It\'s important to me that every child comes to kindergarten with joy, not tears.'
    },
    featured: true
  },
  {
    id: 'johnson-sarah',
    slug: 'johnson-sarah',
    name: {
      ru: 'Сара Джонсон',
      en: 'Sarah Johnson'
    },
    photo: '/images/teachers/johnson-sarah.jpg',
    role: {
      ru: 'Преподаватель английского языка (носитель)',
      en: 'English Teacher (Native Speaker)'
    },
    bio: {
      short: {
        ru: 'Опыт работы 7 лет. Носитель английского языка из США. Специализация: обучение дошкольников.',
        en: '7 years of experience. Native English speaker from USA. Specialization: teaching preschoolers.'
      },
      full: {
        ru: 'Сара — носитель английского языка из США, работает с детьми дошкольного возраста уже 7 лет. Имеет сертификат TEFL и опыт работы в международных детских садах. Использует игровые методики обучения, что делает уроки английского увлекательными для детей. Сара создаёт англоязычную среду, где дети естественным образом погружаются в язык через песни, игры и творчество.',
        en: 'Sarah is a native English speaker from the USA, working with preschool children for 7 years. Holds a TEFL certificate and experience in international kindergartens. Uses playful teaching methods that make English lessons engaging for children. Sarah creates an English-speaking environment where children naturally immerse themselves in the language through songs, games, and creativity.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'Университет штата Калифорния, педагогика (2017)',
          en: 'California State University, Education (2017)'
        }
      ],
      certifications: [
        {
          ru: 'Сертификат TEFL',
          en: 'TEFL Certificate'
        },
        {
          ru: 'Курс "Teaching English to Young Learners"',
          en: 'Teaching English to Young Learners Course'
        }
      ],
      specializations: [
        {
          ru: 'Английский для дошкольников',
          en: 'English for preschoolers'
        },
        {
          ru: 'Игровые методики обучения',
          en: 'Playful teaching methods'
        },
        {
          ru: 'Билингвальное развитие',
          en: 'Bilingual development'
        }
      ]
    },
    experience: {
      years: 7,
      description: {
        ru: 'Работала в международных детских садах в Москве и Санкт-Петербурге. Специализируется на создании англоязычной среды для естественного погружения детей в язык.',
        en: 'Worked in international kindergartens in Moscow and St. Petersburg. Specializes in creating English-speaking environments for natural language immersion.'
      }
    },
    programs: ['preschool', 'pre-k'],
    quote: {
      ru: 'Learning should be fun! Английский через игру — это лучший способ для малышей.',
      en: 'Learning should be fun! English through play is the best way for young children.'
    },
    featured: true
  },
  {
    id: 'kozlova-anna',
    slug: 'kozlova-anna',
    name: {
      ru: 'Козлова Анна Сергеевна',
      en: 'Anna Kozlova'
    },
    photo: '/images/teachers/kozlova-anna.jpg',
    role: {
      ru: 'Музыкальный руководитель',
      en: 'Music Director'
    },
    bio: {
      short: {
        ru: 'Опыт работы 12 лет. Специализация: музыкальное развитие дошкольников.',
        en: '12 years of experience. Specialization: musical development of preschoolers.'
      },
      full: {
        ru: 'Анна Сергеевна — профессиональный музыкант и педагог. Окончила музыкальное училище и консерваторию. Ведёт музыкальные занятия, готовит детей к праздникам и утренникам. Использует методику Карла Орфа и элементы музыкальной терапии. Умеет находить подход даже к самым застенчивым детям, раскрывая их музыкальные способности.',
        en: 'Anna is a professional musician and teacher. Graduated from music college and conservatory. Conducts music classes, prepares children for holidays and events. Uses Carl Orff methodology and elements of music therapy. Knows how to reach even the shyest children, unlocking their musical abilities.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'Музыкальное училище им. Гнесиных (2012)',
          en: 'Gnessin Music College (2012)'
        },
        {
          ru: 'Московская консерватория, фортепиано',
          en: 'Moscow Conservatory, Piano'
        }
      ],
      certifications: [
        {
          ru: 'Курс по методике Карла Орфа',
          en: 'Carl Orff Methodology Course'
        },
        {
          ru: 'Сертификат музыкальной терапии',
          en: 'Music Therapy Certificate'
        }
      ],
      specializations: [
        {
          ru: 'Музыкальное воспитание',
          en: 'Musical education'
        },
        {
          ru: 'Ритмика',
          en: 'Rhythmics'
        },
        {
          ru: 'Постановка праздников',
          en: 'Event choreography'
        }
      ]
    },
    experience: {
      years: 12,
      description: {
        ru: 'Работала в детских музыкальных школах и детских садах. Подготовила более 50 праздничных программ.',
        en: 'Worked in children\'s music schools and kindergartens. Prepared over 50 holiday programs.'
      }
    },
    programs: ['toddlers', 'preschool', 'pre-k'],
    featured: false
  },
  {
    id: 'petrov-dmitry',
    slug: 'petrov-dmitry',
    name: {
      ru: 'Петров Дмитрий Александрович',
      en: 'Dmitry Petrov'
    },
    photo: '/images/teachers/petrov-dmitry.jpg',
    role: {
      ru: 'Инструктор по физической культуре',
      en: 'Physical Education Instructor'
    },
    bio: {
      short: {
        ru: 'Опыт работы 8 лет. Специализация: физическое развитие и спорт для детей.',
        en: '8 years of experience. Specialization: physical development and sports for children.'
      },
      full: {
        ru: 'Дмитрий Александрович — профессиональный тренер по детскому фитнесу. Имеет высшее физкультурное образование и сертификаты международных программ. Проводит занятия по физкультуре, подвижные игры, учит детей плаванию. Особое внимание уделяет правильной осанке и развитию координации движений.',
        en: 'Dmitry is a professional children\'s fitness trainer. Has higher physical education and certificates from international programs. Conducts PE classes, active games, teaches swimming. Pays special attention to proper posture and movement coordination development.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'Российский государственный университет физкультуры (2016)',
          en: 'Russian State University of Physical Education (2016)'
        }
      ],
      certifications: [
        {
          ru: 'Сертификат "Детский фитнес"',
          en: 'Children\'s Fitness Certificate'
        },
        {
          ru: 'Курс по ЛФК для детей',
          en: 'Therapeutic Exercise for Children Course'
        }
      ],
      specializations: [
        {
          ru: 'Физическая культура',
          en: 'Physical education'
        },
        {
          ru: 'Детский фитнес',
          en: 'Children\'s fitness'
        },
        {
          ru: 'Плавание',
          en: 'Swimming'
        }
      ]
    },
    experience: {
      years: 8,
      description: {
        ru: 'Работал тренером в детских спортивных клубах и детских садах. Помог сотням детей полюбить спорт.',
        en: 'Worked as a trainer in children\'s sports clubs and kindergartens. Helped hundreds of children fall in love with sports.'
      }
    },
    programs: ['preschool', 'pre-k'],
    featured: false
  },
  {
    id: 'orlova-tatyana',
    slug: 'orlova-tatyana',
    name: {
      ru: 'Орлова Татьяна Николаевна',
      en: 'Tatyana Orlova'
    },
    photo: '/images/teachers/orlova-tatyana.jpg',
    role: {
      ru: 'Логопед-дефектолог',
      en: 'Speech Therapist'
    },
    bio: {
      short: {
        ru: 'Опыт работы 14 лет. Специализация: коррекция речи и логопедический массаж.',
        en: '14 years of experience. Specialization: speech correction and speech therapy massage.'
      },
      full: {
        ru: 'Татьяна Николаевна — дипломированный логопед-дефектолог с большим опытом работы. Проводит индивидуальные занятия по коррекции звукопроизношения, развитию фонематического слуха, обогащению словарного запаса. Владеет методиками логопедического массажа. Работает как с детьми с задержкой речевого развития, так и с обычными дошкольниками для профилактики речевых нарушений.',
        en: 'Tatyana is a certified speech therapist with extensive experience. Conducts individual sessions on sound pronunciation correction, phonemic awareness development, vocabulary enrichment. Trained in speech therapy massage techniques. Works with children with speech delays and regular preschoolers for speech disorder prevention.'
      }
    },
    qualifications: {
      education: [
        {
          ru: 'МПГУ, дефектология (2010)',
          en: 'Moscow Pedagogical State University, Defectology (2010)'
        }
      ],
      certifications: [
        {
          ru: 'Курс "Логопедический массаж"',
          en: 'Speech Therapy Massage Course'
        },
        {
          ru: 'Сертификат по нейрологопедии',
          en: 'Neuro-Speech Therapy Certificate'
        }
      ],
      specializations: [
        {
          ru: 'Коррекция речи',
          en: 'Speech correction'
        },
        {
          ru: 'Логопедический массаж',
          en: 'Speech therapy massage'
        },
        {
          ru: 'Подготовка к школе',
          en: 'School preparation'
        }
      ]
    },
    experience: {
      years: 14,
      description: {
        ru: 'Работала в специализированных центрах и детских садах. Помогла более 300 детям наладить речь.',
        en: 'Worked in specialized centers and kindergartens. Helped over 300 children improve their speech.'
      }
    },
    programs: ['toddlers', 'preschool', 'pre-k'],
    featured: false
  }
]

// Helper functions
export function getTeacherById(id: string): Teacher | undefined {
  return teachers.find(t => t.id === id)
}

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachers.find(t => t.slug === slug)
}

export function getFeaturedTeachers(): Teacher[] {
  return teachers.filter(t => t.featured)
}

export function getTeachersByProgram(programId: string): Teacher[] {
  return teachers.filter(t => t.programs.includes(programId))
}

export function getTeachersByExperience(minYears: number): Teacher[] {
  return teachers.filter(t => t.experience.years >= minYears)
}
