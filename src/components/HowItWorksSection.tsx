import { Send, MessageSquare, Handshake, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Оставляете заявку",
    description: "Вы оставляете заявку на сайте с описанием нужного товара",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Уточняю детали",
    description: "Я уточняю детали и подбираю подходящие варианты",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Согласование",
    description: "Согласовываем поставщика и стоимость заказа",
  },
  {
    number: "04",
    icon: Truck,
    title: "Закупка и отправка",
    description: "Провожу закупку и сопровождаю отправку",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3 uppercase tracking-wider text-sm">
            Процесс
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-muted-foreground">
            Простой и понятный процесс сотрудничества
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border">
            <div className="absolute inset-y-0 left-0 w-1/3 gold-gradient" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-lg mx-auto">
                    <step.icon className="w-9 h-9 text-secondary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
