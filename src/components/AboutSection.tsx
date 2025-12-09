import { User, MapPin, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-card rounded-2xl overflow-hidden relative card-shadow">
              {/* Abstract pattern */}
              <div className="absolute inset-0 hero-gradient opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6 shadow-xl">
                    <User className="w-16 h-16 text-secondary-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Китай</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 border-2 border-secondary/30 rounded-full" />
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-secondary/20 rounded-lg" />
            </div>
          </div>
          
          {/* Right: Text Content */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-3 uppercase tracking-wider text-sm">
              Обо мне
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ваш надёжный партнёр в Китае
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Меня зовут <strong className="text-foreground">Жакыпбекова Акбота</strong>, 
                я профессиональный байер в Китае. Помогаю клиентам безопасно и выгодно 
                заказывать товары напрямую от китайских поставщиков.
              </p>
              <p>
                Беру на себя поиск, переговоры, проверку качества, а также сопровождение 
                сделки и отправку. Моя задача — сделать процесс закупки максимально 
                простым и прозрачным для вас.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg card-shadow">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-foreground">Проверенные поставщики</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg card-shadow">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-foreground">Работаю в Китае</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
