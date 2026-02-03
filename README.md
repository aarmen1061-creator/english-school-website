# Сайт сети школ английского языка

Современный сайт для сети школ английского языка, обучающих детей начальных классов.

## Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Sanity.io** - headless CMS
- **React Hook Form + Zod** - формы и валидация
- **React Leaflet** - интерактивная карта
- **Resend** - email рассылка
- **Telegram Bot API** - уведомления

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Скопируйте `.env.example` в `.env.local` и заполните переменные:
```bash
cp .env.example .env.local
```

3. Запустите dev сервер:
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
├── app/                    # Next.js app router
│   ├── (marketing)/       # Маркетинговые страницы
│   ├── blog/              # Блог
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # shadcn/ui компоненты
│   ├── layout/            # Header, Footer
│   ├── sections/          # Секции главной страницы
│   ├── forms/             # Формы
│   └── map/               # Карта
├── lib/                   # Утилиты
├── sanity/                # Sanity CMS
├── public/                # Статические файлы
└── styles/                # Стили
```

## Функционал

- ✅ Две темы дизайна (яркая и минималистичная)
- ✅ Форма записи на пробный урок
- ✅ Интеграция с Telegram для уведомлений
- ✅ Email рассылка
- ✅ Интерактивная карта с 8 филиалами
- ✅ Блог на Sanity CMS
- ✅ SEO оптимизация
- ✅ Адаптивный дизайн

## Деплой

Проект оптимизирован для деплоя на Vercel:

```bash
npm run build
```

## Разработка

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка production
- `npm run start` - запуск production сервера
- `npm run lint` - проверка кода
