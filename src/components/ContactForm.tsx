import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_TOKEN = "8382452511:AAE1cI7rPGW-pdm1WvBijCR0MsjgCOli1Cg";
const TELEGRAM_CHAT_ID = "434119615";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    order: "",
    budget: "",
    preferredContact: "whatsapp",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async () => {
    const contactMethod = formData.preferredContact === "whatsapp" ? "WhatsApp" : "Telegram";
    
    const message = `🛒 *Новая заявка!*

👤 *Имя:* ${formData.name}
📱 *Контакт:* ${formData.contact}
${formData.email ? `📧 *Email:* ${formData.email}` : ""}
📦 *Заказ:* ${formData.order}
${formData.budget ? `💰 *Бюджет:* ${formData.budget}` : ""}
📞 *Способ связи:* ${contactMethod}`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendToTelegram();
      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в ближайшее время.",
      });
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Спасибо за заявку!
            </h2>
            <p className="text-muted-foreground mb-8">
              Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  contact: "",
                  email: "",
                  order: "",
                  budget: "",
                  preferredContact: "whatsapp",
                });
              }}
            >
              Отправить еще одну заявку
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold mb-3 uppercase tracking-wider text-sm">
              Заявка
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Оставить заявку
            </h2>
            <p className="text-muted-foreground">
              Заполните, пожалуйста, форму и я свяжусь с вами для обсуждения деталей
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-6 md:p-10 card-shadow">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Имя <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="mt-2"
                />
              </div>
              
              {/* Contact */}
              <div>
                <Label htmlFor="contact" className="text-foreground font-medium">
                  Телефон / WhatsApp / Telegram <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+7 XXX XXX XX XX или @username"
                  required
                  className="mt-2"
                />
              </div>
              
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email (необязательно)
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="mt-2"
                />
              </div>
              
              {/* Order description */}
              <div>
                <Label htmlFor="order" className="text-foreground font-medium">
                  Что хотите заказать? <span className="text-secondary">*</span>
                </Label>
                <Textarea
                  id="order"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="Опишите товар, который вас интересует..."
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>
              
              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="text-foreground font-medium">
                  Примерный бюджет
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Например: $500-1000 или 50 000 - 100 000 ₽"
                  className="mt-2"
                />
              </div>
              
              {/* Preferred contact method */}
              <div>
                <Label className="text-foreground font-medium mb-3 block">
                  Предпочитаемый способ связи
                </Label>
                <RadioGroup
                  value={formData.preferredContact}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, preferredContact: value }))
                  }
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                    <Label htmlFor="whatsapp" className="flex items-center gap-2 cursor-pointer">
                      <MessageCircle className="w-4 h-4 text-[hsl(142,70%,45%)]" />
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="telegram" id="telegram" />
                    <Label htmlFor="telegram" className="flex items-center gap-2 cursor-pointer">
                      <Send className="w-4 h-4 text-[hsl(200,80%,50%)]" />
                      Telegram
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Submit button */}
              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Отправка...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
