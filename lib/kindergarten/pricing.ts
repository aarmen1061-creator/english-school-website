import type { PricingTier, AdditionalService, Discount } from './types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'full-day',
    name: {
      ru: 'Полный день',
      en: 'Full Day'
    },
    description: {
      ru: 'Полный день пребывания с 5-разовым питанием и всеми занятиями по программе',
      en: 'Full day stay with 5 meals and all curriculum activities'
    },
    schedule: {
      type: 'full-day',
      hours: {
        ru: '8:30–19:30 (11 часов)',
        en: '8:30 AM–7:30 PM (11 hours)'
      }
    },
    pricing: {
      monthly: 45000,
      registration: 10000,
      currency: 'RUB'
    },
    includes: [
      {
        ru: '5-разовое питание (завтрак, 2-й завтрак, обед, полдник, ужин)',
        en: '5 meals per day (breakfast, morning snack, lunch, afternoon snack, dinner)'
      },
      {
        ru: 'Все образовательные занятия по программе',
        en: 'All educational activities per curriculum'
      },
      {
        ru: 'Творческие мастерские и занятия искусством',
        en: 'Creative workshops and art classes'
      },
      {
        ru: 'Музыка и хореография',
        en: 'Music and dance'
      },
      {
        ru: 'Физкультура и спортивные игры',
        en: 'Physical education and sports'
      },
      {
        ru: 'Английский язык с носителем',
        en: 'English with native speaker'
      },
      {
        ru: 'Прогулки 2 раза в день',
        en: 'Outdoor walks twice daily'
      },
      {
        ru: 'Учебные материалы и пособия',
        en: 'Learning materials and supplies'
      }
    ],
    programs: ['toddlers', 'preschool', 'pre-k'],
    featured: true
  },
  {
    id: 'half-day',
    name: {
      ru: 'Неполный день',
      en: 'Half Day'
    },
    description: {
      ru: 'Утренняя программа с основными занятиями и 2-разовым питанием',
      en: 'Morning program with core activities and 2 meals'
    },
    schedule: {
      type: 'half-day',
      hours: {
        ru: '8:30–13:00 (4.5 часа)',
        en: '8:30 AM–1:00 PM (4.5 hours)'
      }
    },
    pricing: {
      monthly: 28000,
      registration: 10000,
      currency: 'RUB'
    },
    includes: [
      {
        ru: '2-разовое питание (завтрак и обед)',
        en: '2 meals (breakfast and lunch)'
      },
      {
        ru: 'Основные образовательные занятия',
        en: 'Core educational activities'
      },
      {
        ru: 'Творчество и искусство',
        en: 'Arts and crafts'
      },
      {
        ru: 'Музыка',
        en: 'Music'
      },
      {
        ru: 'Прогулка',
        en: 'Outdoor walk'
      },
      {
        ru: 'Учебные материалы',
        en: 'Learning materials'
      }
    ],
    programs: ['preschool', 'pre-k'],
    featured: false
  },
  {
    id: 'extended',
    name: {
      ru: 'Полный день + продлёнка',
      en: 'Full Day + Extended'
    },
    description: {
      ru: 'Пребывание до 21:00 для родителей с плотным рабочим графиком',
      en: 'Stay until 9:00 PM for parents with busy schedules'
    },
    schedule: {
      type: 'extended',
      hours: {
        ru: '8:30–21:00 (12.5 часов)',
        en: '8:30 AM–9:00 PM (12.5 hours)'
      }
    },
    pricing: {
      monthly: 55000,
      registration: 10000,
      currency: 'RUB'
    },
    includes: [
      {
        ru: 'Всё из тарифа "Полный день"',
        en: 'Everything from "Full Day" tier'
      },
      {
        ru: 'Дополнительный вечерний перекус',
        en: 'Additional evening snack'
      },
      {
        ru: 'Вечерние игры и занятия',
        en: 'Evening games and activities'
      },
      {
        ru: 'Помощь с домашними заданиями (для старших)',
        en: 'Homework help (for older children)'
      },
      {
        ru: 'Спокойные вечерние мероприятия',
        en: 'Calm evening activities'
      }
    ],
    programs: ['preschool', 'pre-k'],
    featured: false
  }
]

export const additionalServices: AdditionalService[] = [
  {
    id: 'logoped',
    name: {
      ru: 'Логопед',
      en: 'Speech Therapist'
    },
    description: {
      ru: 'Индивидуальные занятия с логопедом для коррекции речи',
      en: 'Individual speech therapy sessions for speech correction'
    },
    pricing: {
      type: 'per-session',
      amount: 2000,
      currency: 'RUB'
    },
    category: 'education',
    icon: 'message-circle'
  },
  {
    id: 'psychologist',
    name: {
      ru: 'Детский психолог',
      en: 'Child Psychologist'
    },
    description: {
      ru: 'Консультации и занятия с детским психологом',
      en: 'Consultations and sessions with child psychologist'
    },
    pricing: {
      type: 'per-session',
      amount: 2500,
      currency: 'RUB'
    },
    category: 'education',
    icon: 'heart'
  },
  {
    id: 'chess',
    name: {
      ru: 'Шахматы',
      en: 'Chess'
    },
    description: {
      ru: 'Групповые занятия шахматами 2 раза в неделю',
      en: 'Group chess lessons twice per week'
    },
    pricing: {
      type: 'monthly',
      amount: 4000,
      currency: 'RUB'
    },
    category: 'activity',
    icon: 'crown'
  },
  {
    id: 'swimming',
    name: {
      ru: 'Бассейн',
      en: 'Swimming Pool'
    },
    description: {
      ru: 'Плавание в бассейне с инструктором 1 раз в неделю',
      en: 'Swimming with instructor once per week'
    },
    pricing: {
      type: 'monthly',
      amount: 6000,
      currency: 'RUB'
    },
    category: 'activity',
    icon: 'droplet'
  },
  {
    id: 'robotics',
    name: {
      ru: 'Робототехника',
      en: 'Robotics'
    },
    description: {
      ru: 'Конструирование и программирование роботов (для 5-7 лет)',
      en: 'Building and programming robots (ages 5-7)'
    },
    pricing: {
      type: 'monthly',
      amount: 5000,
      currency: 'RUB'
    },
    category: 'education',
    icon: 'cpu'
  },
  {
    id: 'extra-hours',
    name: {
      ru: 'Дополнительные часы',
      en: 'Extra Hours'
    },
    description: {
      ru: 'Дополнительное время пребывания сверх выбранного тарифа',
      en: 'Additional time beyond selected plan'
    },
    pricing: {
      type: 'per-session',
      amount: 500,
      currency: 'RUB'
    },
    category: 'care',
    icon: 'clock'
  },
  {
    id: 'photo-video',
    name: {
      ru: 'Фото и видео',
      en: 'Photo & Video'
    },
    description: {
      ru: 'Профессиональная фото и видеосъёмка на праздниках',
      en: 'Professional photo and video at events'
    },
    pricing: {
      type: 'per-session',
      amount: 3000,
      currency: 'RUB'
    },
    category: 'other',
    icon: 'camera'
  }
]

export const discounts: Discount[] = [
  {
    id: 'sibling',
    name: {
      ru: 'Скидка на второго ребёнка',
      en: 'Sibling Discount'
    },
    description: {
      ru: 'При посещении двух и более детей из одной семьи',
      en: 'When two or more children from the same family attend'
    },
    type: 'percentage',
    amount: 15,
    conditions: [
      {
        ru: 'Скидка применяется на младшего ребёнка',
        en: 'Discount applied to younger child'
      },
      {
        ru: 'Суммируется с другими акциями',
        en: 'Can be combined with other promotions'
      },
      {
        ru: 'Действует весь период посещения',
        en: 'Valid for entire attendance period'
      }
    ],
    icon: 'users'
  },
  {
    id: 'referral',
    name: {
      ru: 'Приведи друга',
      en: 'Referral Bonus'
    },
    description: {
      ru: 'Скидка за каждого приведённого друга',
      en: 'Discount for each friend referred'
    },
    type: 'fixed',
    amount: 5000,
    conditions: [
      {
        ru: 'Ваш друг должен посещать сад минимум 3 месяца',
        en: 'Friend must attend for at least 3 months'
      },
      {
        ru: 'Скидка применяется к следующему месяцу оплаты',
        en: 'Discount applied to next month payment'
      },
      {
        ru: 'Можно привести несколько друзей',
        en: 'You can refer multiple friends'
      }
    ],
    icon: 'gift'
  },
  {
    id: 'early-bird',
    name: {
      ru: 'Ранняя запись',
      en: 'Early Registration'
    },
    description: {
      ru: 'Скидка при записи за 3+ месяца до начала посещения',
      en: 'Discount for registration 3+ months in advance'
    },
    type: 'percentage',
    amount: 10,
    conditions: [
      {
        ru: 'Действует только на первый месяц обучения',
        en: 'Valid for first month only'
      },
      {
        ru: 'Только для новых учеников',
        en: 'New students only'
      },
      {
        ru: 'Требуется внесение регистрационного взноса',
        en: 'Registration fee payment required'
      }
    ],
    icon: 'calendar',
    validUntil: '2026-06-01'
  },
  {
    id: 'annual',
    name: {
      ru: 'Годовой абонемент',
      en: 'Annual Pass'
    },
    description: {
      ru: 'Оплата за весь год со скидкой',
      en: 'Pay for full year with discount'
    },
    type: 'percentage',
    amount: 20,
    conditions: [
      {
        ru: 'Оплата за 12 месяцев единовременно',
        en: 'Payment for 12 months upfront'
      },
      {
        ru: 'Скидка распространяется на базовый тариф',
        en: 'Discount applies to base rate'
      },
      {
        ru: 'Дополнительные услуги оплачиваются отдельно',
        en: 'Additional services paid separately'
      }
    ],
    icon: 'percent'
  },
  {
    id: 'september-promo',
    name: {
      ru: 'Сентябрьская акция',
      en: 'September Promotion'
    },
    description: {
      ru: 'Специальное предложение для записи на новый учебный год',
      en: 'Special offer for new academic year enrollment'
    },
    type: 'percentage',
    amount: 15,
    conditions: [
      {
        ru: 'Действует при записи до 15 августа',
        en: 'Valid for enrollments before August 15'
      },
      {
        ru: 'Скидка на первые 3 месяца',
        en: 'Discount for first 3 months'
      },
      {
        ru: 'Ограниченное количество мест',
        en: 'Limited spots available'
      }
    ],
    icon: 'tag',
    validUntil: '2026-08-15'
  }
]

// Helper functions
export function getPricingTierById(id: string): PricingTier | undefined {
  return pricingTiers.find(t => t.id === id)
}

export function getFeaturedPricingTiers(): PricingTier[] {
  return pricingTiers.filter(t => t.featured)
}

export function getAdditionalServicesByCategory(category: string): AdditionalService[] {
  return additionalServices.filter(s => s.category === category)
}

export function getActiveDiscounts(): Discount[] {
  const now = new Date()
  return discounts.filter(d => {
    if (!d.validUntil) return true
    return new Date(d.validUntil) > now
  })
}

export function calculateDiscountedPrice(basePrice: number, discountId: string): number {
  const discount = discounts.find(d => d.id === discountId)
  if (!discount) return basePrice

  if (discount.type === 'percentage') {
    return basePrice * (1 - discount.amount / 100)
  } else {
    return Math.max(0, basePrice - discount.amount)
  }
}

export function formatPrice(amount: number, currency: 'RUB' = 'RUB'): string {
  return `${amount.toLocaleString('ru-RU')} ₽`
}
