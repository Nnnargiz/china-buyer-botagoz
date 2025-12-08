import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Жакыпбекова Ботагоз
            </h3>
            <p className="text-primary-foreground/80 mb-2">
              Профессиональный байер в Китае
            </p>
            <p className="text-primary-foreground/70 text-sm flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Китай
            </p>
          </div>
          
          {/* Contact Text */}
          <p className="text-center text-primary-foreground/80 mb-8">
            Свяжитесь со мной удобным для вас способом
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button variant="telegram" size="lg" asChild>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:example@email.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
          </div>
          
          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-primary-foreground/60 text-sm">
              Байер в Китае • Поиск и закуп товаров под заказ
            </p>
            <p className="text-center text-primary-foreground/40 text-xs mt-4">
              © {new Date().getFullYear()} Жакыпбекова Ботагоз. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
