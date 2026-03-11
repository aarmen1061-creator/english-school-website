import type { Locale } from "@/lib/i18n/settings"

export default function TermsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const isRu = params.lang === "ru"

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">
          {isRu ? "Пользовательское соглашение" : "Terms of Service"}
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
              ? "Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между ИП [ФИО] (далее — Администрация сайта) и пользователем сайта eweschool.ru (далее — Пользователь)."
              : "This Terms of Service (hereinafter — the Agreement) regulates the relationship between IE [Name] (hereinafter — the Website Administration) and the user of the website eweschool.ru (hereinafter — the User)."}
          </p>
          <p>
            {isRu
              ? "Соглашение разработано в соответствии с Федеральным законом от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации» и Законом РФ от 07.02.1992 № 2300-1 «О защите прав потребителей»."
              : "The Agreement has been developed in accordance with Federal Law No. 149-FZ and the Law of the Russian Federation No. 2300-1 \"On Consumer Rights Protection\"."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "2. Предмет соглашения" : "2. Subject of the Agreement"}
          </h2>
          <p>
            {isRu
              ? "Администрация сайта предоставляет Пользователю доступ к информации об образовательных услугах EwE School, включая описание курсов, расположение филиалов, отзывы, а также возможность подачи заявки на обучение через форму записи."
              : "The Website Administration provides the User with access to information about EwE School educational services, including course descriptions, branch locations, reviews, and the ability to submit enrollment applications."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "3. Информация об исполнителе" : "3. Service Provider Information"}
          </h2>
          <ul className="list-none space-y-1">
            <li>{isRu ? "ИП [ФИО]" : "IE [Name]"}</li>
            <li>{isRu ? "ИНН: [ИНН]" : "TIN: [TIN]"}</li>
            <li>{isRu ? "ОГРНИП: [ОГРНИП]" : "PSRNIE: [PSRNIE]"}</li>
            <li>{isRu ? "Адрес: [юридический адрес]" : "Address: [legal address]"}</li>
            <li>Email: info@eweschool.ru</li>
            <li>{isRu ? "Телефон" : "Phone"}: +7 (925) 263-00-88</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "4. Услуги" : "4. Services"}
          </h2>
          <p>
            {isRu
              ? "EwE School предоставляет услуги по обучению английскому и другим иностранным языкам для детей и взрослых. Подробная информация об услугах, включая описание программ и возрастные группы, размещена на сайте в разделе «Курсы». Стоимость услуг уточняется при обращении по телефону или в филиале школы."
              : "EwE School provides English and foreign language education services for children and adults. Detailed information about services is available on the website in the \"Courses\" section. Service prices are available upon request by phone or at a school branch."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "5. Права и обязанности сторон" : "5. Rights and Obligations"}
          </h2>
          <p className="font-medium">{isRu ? "Пользователь обязуется:" : "The User agrees to:"}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{isRu ? "Предоставлять достоверные данные при заполнении форм" : "Provide accurate data when filling out forms"}</li>
            <li>{isRu ? "Не использовать сайт в целях, противоречащих законодательству РФ" : "Not use the website for purposes contrary to Russian legislation"}</li>
          </ul>
          <p className="font-medium mt-3">{isRu ? "Администрация сайта обязуется:" : "The Website Administration agrees to:"}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{isRu ? "Обеспечивать работоспособность сайта" : "Ensure the website's operability"}</li>
            <li>{isRu ? "Обрабатывать персональные данные в соответствии с Политикой конфиденциальности" : "Process personal data in accordance with the Privacy Policy"}</li>
            <li>{isRu ? "Своевременно обрабатывать заявки пользователей" : "Process user applications in a timely manner"}</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "6. Интеллектуальная собственность" : "6. Intellectual Property"}
          </h2>
          <p>
            {isRu
              ? "Все материалы сайта (тексты, изображения, логотипы, дизайн) являются собственностью Администрации сайта и защищены законодательством РФ об интеллектуальной собственности."
              : "All website materials (texts, images, logos, design) are the property of the Website Administration and are protected by Russian intellectual property law."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "7. Ограничение ответственности" : "7. Limitation of Liability"}
          </h2>
          <p>
            {isRu
              ? "Администрация сайта не несёт ответственности за временную недоступность сайта, вызванную техническими причинами. Сайт предоставляется «как есть»."
              : "The Website Administration is not liable for temporary unavailability of the website due to technical reasons. The website is provided \"as is\"."}
          </p>

          <h2 className="text-lg font-semibold mt-6">
            {isRu ? "8. Заключительные положения" : "8. Final Provisions"}
          </h2>
          <p>
            {isRu
              ? "Настоящее Соглашение вступает в силу с момента начала использования сайта Пользователем. Администрация сайта оставляет за собой право вносить изменения в Соглашение без предварительного уведомления. Актуальная версия размещена на данной странице."
              : "This Agreement comes into force from the moment the User starts using the website. The Website Administration reserves the right to amend the Agreement without prior notice. The current version is available on this page."}
          </p>

          <p className="text-gray-500 text-xs mt-8">
            {isRu
              ? "Возрастная маркировка контента сайта: 0+ (в соответствии с Федеральным законом № 436-ФЗ «О защите детей от информации, причиняющей вред их здоровью и развитию»)."
              : "Website content age rating: 0+ (in accordance with Federal Law No. 436-FZ)."}
          </p>
        </div>
      </div>
    </section>
  )
}
