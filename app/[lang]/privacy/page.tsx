import type { Locale } from "@/lib/i18n/settings"

export default function PrivacyPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const isRu = params.lang === "ru"

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">
          {isRu ? "Политика конфиденциальности" : "Privacy Policy"}
        </h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
          <p className="text-gray-500">
            {isRu ? "Дата публикации: 11 марта 2026 г." : "Published: March 11, 2026"}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "1. Общие положения" : "1. General Provisions"}
          </h2>
          <p>
            {isRu
              ? "Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта eweschool.ru (далее — Сайт), принадлежащего ИП [ФИО] (далее — Оператор)."
              : "This Privacy Policy defines the procedure for processing and protecting personal data of users of the website eweschool.ru (hereinafter — the Website), owned by IE [Name] (hereinafter — the Operator)."}
          </p>
          <p>
            {isRu
              ? "Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»."
              : "This Policy has been developed in accordance with Federal Law No. 152-FZ dated July 27, 2006 \"On Personal Data\"."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "2. Какие данные мы собираем" : "2. Data We Collect"}
          </h2>
          <p>{isRu ? "При заполнении формы записи на курс мы собираем:" : "When filling out the enrollment form, we collect:"}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{isRu ? "Имя родителя" : "Parent name"}</li>
            <li>{isRu ? "Номер телефона" : "Phone number"}</li>
            <li>{isRu ? "Адрес электронной почты (при указании)" : "Email address (if provided)"}</li>
            <li>{isRu ? "Имя и возраст ребёнка" : "Child's name and age"}</li>
          </ul>
          <p>
            {isRu
              ? "Также автоматически собираются: IP-адрес, данные о браузере и устройстве, информация о посещённых страницах (через Яндекс.Метрику)."
              : "The following data is also collected automatically: IP address, browser and device data, information about visited pages (via Yandex.Metrika)."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "3. Цели обработки данных" : "3. Purpose of Data Processing"}
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{isRu ? "Обработка заявок на обучение и связь с клиентами" : "Processing enrollment applications and contacting clients"}</li>
            <li>{isRu ? "Информирование об услугах, акциях и мероприятиях школы" : "Informing about school services, promotions and events"}</li>
            <li>{isRu ? "Улучшение качества работы сайта и анализ посещаемости" : "Improving website quality and traffic analysis"}</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "4. Сроки хранения данных" : "4. Data Retention Period"}
          </h2>
          <p>
            {isRu
              ? "Персональные данные хранятся до момента отзыва согласия субъектом персональных данных или до истечения 3 (трёх) лет с момента их получения, если иное не предусмотрено законодательством РФ."
              : "Personal data is stored until consent is withdrawn by the data subject or for 3 (three) years from the date of receipt, unless otherwise provided by Russian legislation."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "5. Права субъекта персональных данных" : "5. Data Subject Rights"}
          </h2>
          <p>{isRu ? "Вы имеете право:" : "You have the right to:"}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{isRu ? "Получить информацию об обработке ваших персональных данных" : "Obtain information about the processing of your personal data"}</li>
            <li>{isRu ? "Требовать уточнения, блокирования или уничтожения данных" : "Request clarification, blocking or destruction of data"}</li>
            <li>{isRu ? "Отозвать согласие на обработку персональных данных" : "Withdraw consent to data processing"}</li>
            <li>{isRu ? "Обжаловать действия оператора в Роскомнадзор" : "Appeal the operator's actions to Roskomnadzor"}</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "6. Защита данных" : "6. Data Protection"}
          </h2>
          <p>
            {isRu
              ? "Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования и распространения."
              : "The Operator takes necessary organizational and technical measures to protect personal data from unauthorized access, destruction, modification, blocking, copying and distribution."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "7. Контактные данные оператора" : "7. Operator Contact Details"}
          </h2>
          <p>{isRu ? "Оператор персональных данных:" : "Personal data operator:"}</p>
          <ul className="list-none space-y-1">
            <li>{isRu ? "ИП [ФИО]" : "IE [Name]"}</li>
            <li>{isRu ? "ИНН: [ИНН]" : "TIN: [TIN]"}</li>
            <li>{isRu ? "ОГРНИП: [ОГРНИП]" : "PSRNIE: [PSRNIE]"}</li>
            <li>{isRu ? "Адрес: [юридический адрес]" : "Address: [legal address]"}</li>
            <li>Email: info@eweschool.ru</li>
            <li>{isRu ? "Телефон" : "Phone"}: +7 (925) 263-00-88</li>
          </ul>

          <p className="text-gray-500 text-xs mt-8">
            {isRu
              ? "Оператор вправе вносить изменения в настоящую Политику. Актуальная версия размещена на данной странице."
              : "The Operator reserves the right to amend this Policy. The current version is available on this page."}
          </p>
        </div>
      </div>
    </section>
  )
}
