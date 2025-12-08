import { Search, ClipboardCheck, Package, Truck, Settings } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Поиск поставщиков в Китае",
    description: "Нахожу надежных поставщиков на платформах вроде 1688, Taobao, Alibaba и др.",
  },
  {
    icon: ClipboardCheck,
    title: "Проверка товара и поставщика",
    description: "Запрашиваю фото/видео, проверяю характеристики, отзывы, условия.",
  },
  {
    icon: Package,
    title: "Закупка и консолидация",
    description: "Организую выкуп товара, проверку на складе, объединение посылок.",
  },
  {
    icon: Truck,
    title: "Организация доставки",
    description: "Помощь с выбором способа доставки и сопровождением до склада/страны клиента.",
  },
  {
    icon: Settings,
    title: "Индивидуальный подбор под запрос",
    description: "Подбираю товар под конкретный бюджет, нишу и требования.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium mb-3 uppercase tracking-wider text-sm">
            Услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Что я делаю для вас
          </h2>
          <p className="text-muted-foreground">
            Полный спектр услуг по поиску и закупке товаров из Китая
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
