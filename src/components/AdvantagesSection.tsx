import { Shield, Clock, Globe, Heart, MessageCircle } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Проверенные поставщики",
    description: "Работаю только с надежными и проверенными поставщиками",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Беру на себя всю рутину — вы экономите время и нервы",
  },
  {
    icon: Globe,
    title: "Знание рынка Китая",
    description: "Понимание рынка и менталитета поставщиков",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "К каждому запросу подхожу индивидуально",
  },
  {
    icon: MessageCircle,
    title: "Всегда на связи",
    description: "Поддержка в мессенджерах на всех этапах работы",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-secondary font-medium mb-3 uppercase tracking-wider text-sm">
              Преимущества
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Почему работать со мной
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Выбирая меня как вашего байера в Китае, вы получаете надежного партнера, 
              который возьмет на себя все сложности закупки товаров.
            </p>
            
            {/* Advantages List */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <div className="aspect-square max-w-sm mx-auto hero-gradient rounded-xl flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="text-6xl font-display font-bold mb-2">5+</div>
                    <p className="text-primary-foreground/80">лет опыта работы</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 card-shadow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground">надежность</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <Heart className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
