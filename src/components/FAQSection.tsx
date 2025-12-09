import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "С какими товарами вы работаете?",
    answer: "Работаю практически с любыми товарами: одежда, электроника, косметика, товары для дома, оборудование для бизнеса и многое другое. Исключение составляют запрещенные к ввозу товары.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата происходит в несколько этапов: предоплата за товар поставщику, оплата услуг байера и доставки. Все расчеты прозрачны — вы всегда видите, за что платите.",
  },
  {
    question: "Есть ли минимальная сумма заказа?",
    answer: "Минимальная сумма заказа зависит от типа товара и условий поставщика. Обычно для оптовых закупок это от $500, для мелких заказов условия обсуждаются индивидуально.",
  },
  {
    question: "Сколько по времени занимает поиск и закуп?",
    answer: "Поиск поставщика занимает 1-3 дня. Закупка и проверка товара — 3-7 дней. Доставка зависит от выбранного способа: авиа — 7-14 дней, морем — 30-45 дней.",
  },
  {
    question: "Как я могу убедиться в качестве товара?",
    answer: "Перед отправкой я делаю фото и видео товара на складе, проверяю комплектность и качество. Вы получаете отчет и можете запросить дополнительные проверки.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold mb-3 uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы о работе байера
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
