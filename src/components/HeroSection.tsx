import { Button } from "@/components/ui/button";
import { Search, CheckCircle, Package, Truck } from "lucide-react";
import heroBg from "@1111.jpg";

const benefits = [
  { icon: Search, text: "Поиск поставщиков на китайских платформах" },
  { icon: CheckCircle, text: "Переговоры и проверка качества" },
  { icon: Package, text: "Контроль оплаты и отправки" },
  { icon: Truck, text: "Сопровождение заказа до доставки" },
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Профессиональный байер в Китае — 
            <span className="text-secondary"> Жакыпбекова Акбота</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Помогаю находить, проверять и закупать товары из Китая для частных клиентов и бизнеса.
          </p>
          
          {/* Benefits List */}
          <ul className="space-y-3 mb-10">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 text-primary-foreground/90 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <benefit.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" onClick={scrollToForm}>
              Оставить заявку
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
