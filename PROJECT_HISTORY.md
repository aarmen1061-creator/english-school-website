# EwE School — История изменений проекта

## Информация о проекте
- **Сайт:** https://eweschool.ru (домен подключён к Vercel)
- **Vercel:** https://english-school-website.vercel.app/ru
- **GitHub:** https://github.com/aarmen1061-creator/english-school-website
- **Локальный сервер:** http://localhost:3002/ru
- **Технологии:** Next.js 14, TypeScript, Tailwind CSS, i18n (ru/en)

## Telegram бот
- **Бот:** @ewe_school_enroll_bot
- **Токен:** 8504752869:AAHhS3MQSovi33lsgm-ul6PBnw0xpjXjvBM
- **Chat ID группы "EWE Лиды":** -5136336432
- **API endpoint:** /app/api/enroll/route.ts

## Email
- **Почта:** eweschool@yandex.ru
- **SMTP:** smtp.yandex.ru:465
- ⚠️ Пока не настроена (нужен пароль приложения от Yandex)

## Домен
- **Домен:** eweschool.ru
- **NS серверы:** ns1.vercel-dns.com / ns2.vercel-dns.com
- **Статус:** DNS обновляется (настроено 01.03.2026)

---

## Все внесённые изменения

### 1. Главная страница (hero секция)
- Убран заголовок "Сеть школ иностранных языков" / "EwE School"
- Главным заголовком стала фраза: **"Ваш ребёнок заговорит на английском через 2 месяца"**
- Изменено: `lib/dictionaries/ru.json` и `en.json` → `hero.subtitle`

### 2. "3 месяца" → "2 месяца" везде
- В описании на главной: "результаты уже через 2 месяца"
- В отзыве родителя: "За 2 месяца заметный прогресс"
- Файлы: `lib/dictionaries/ru.json`, `lib/dictionaries/en.json`, `lib/data.ts`

### 3. Целевая аудитория
- Везде заменено "для детей от 3 до 17 лет" → **"для детей и взрослых"**

### 4. Навигация — убрано "Расписание"
- Удалена ссылка "Расписание" из меню навигации
- Удалена ссылка "Расписание" из footer
- Файлы: `lib/dictionaries/ru.json`, `lib/dictionaries/en.json`, `components/layout/footer.tsx`

### 5. Страница курсов
- Убрана кнопка "Подробнее" — осталась только кнопка "Записаться"
- Файл: `app/[lang]/courses/page.tsx`

### 6. Форма записи — поле "Филиал"
- Поле "Выберите филиал" сделано необязательным (убрана звёздочка)
- Файл: `app/[lang]/enroll/page.tsx`

### 7. Форма записи — форматирование телефона
- При вводе 8, +7 или 9 — автоматически подставляется +7
- Формат: +7 (XXX) XXX-XX-XX
- Файл: `app/[lang]/enroll/page.tsx`

### 8. Страница акций (/promo)
- Добавлена карточка программы "Амбассадор EwE School"
- Теперь две карточки: "Приведи друга" + "Амбассадор"
- Файл: `app/[lang]/promo/page.tsx`

### 9. Telegram бот для заявок
- Создан API endpoint: `app/api/enroll/route.ts`
- При заполнении формы заявка падает в Telegram группу "EWE Лиды"
- Установлен пакет: nodemailer (для будущей email-рассылки)
- ⚠️ Нужно добавить в Vercel → Environment Variables:
  - TELEGRAM_BOT_TOKEN = 8504752869:AAHhS3MQSovi33lsgm-ul6PBnw0xpjXjvBM
  - TELEGRAM_CHAT_ID = -5136336432

### 10. Социальные сети в footer
- Убрана кнопка VK
- Telegram → https://t.me/EwE_school_admin
- WhatsApp → https://wa.link/cac4r4
- Файл: `components/layout/footer.tsx`

---

## Pending задачи (что ещё нужно сделать)
- [ ] Добавить в Vercel переменные окружения: TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID = -5136336432
- [ ] Настроить email уведомления (нужен пароль приложения от eweschool@yandex.ru)
- [ ] Дождаться обновления DNS для домена eweschool.ru

---

## Структура проекта
```
english-school-website/
├── app/
│   ├── [lang]/
│   │   ├── page.tsx          — главная страница
│   │   ├── courses/          — страница курсов
│   │   ├── enroll/           — форма записи
│   │   ├── promo/            — акции
│   │   ├── ambassador/       — программа амбассадора
│   │   ├── branches/         — филиалы
│   │   └── ...
│   └── api/
│       └── enroll/route.ts   — API для заявок (Telegram)
├── components/
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   ├── dictionaries/
│   │   ├── ru.json           — тексты на русском
│   │   └── en.json           — тексты на английском
│   └── data.ts               — данные (курсы, филиалы, отзывы)
└── .env.local                — переменные окружения (не в git)
```
