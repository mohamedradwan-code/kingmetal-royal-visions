import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+20 100 123 4567', '+20 101 234 5678'],
      color: 'from-accent to-accent-light'
    },
    {
      icon: Mail,
      title: 'راسلنا',
      details: ['info@kingmetal.com', 'sales@kingmetal.com'],
      color: 'from-primary to-primary-glow'
    },
    {
      icon: MapPin,
      title: 'زورنا',
      details: ['شارع الصناعة، مدينة العبور', 'القاهرة، جمهورية مصر العربية'],
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Clock,
      title: 'مواعيد العمل',
      details: ['السبت - الخميس: 8 ص - 6 م', 'الجمعة: 1 م - 5 م'],
      color: 'from-primary-glow to-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Crown className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold font-tajawal mb-4">
            <span className="bg-royal-gradient bg-clip-text text-transparent">
              تواصل مع الملوك
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-tajawal">
            نحن في خدمتك دائماً. تواصل معنا الآن واحصل على استشارة مجانية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-royal shadow-royal hover-lift royal-shine p-6 text-right h-full">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mr-auto`}>
                      <item.icon className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-lg font-bold text-primary font-tajawal mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground font-tajawal text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-foreground font-tajawal text-right mb-4">
                تواصل سريع
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-tajawal w-full"
                  onClick={() => window.open('tel:+201001234567')}
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-royal text-primary hover:bg-primary/10 font-tajawal w-full"
                  onClick={() => window.open('https://wa.me/201001234567')}
                >
                  <Send className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card border-royal shadow-royal p-8">
              <h3 className="text-2xl font-bold text-primary font-tajawal mb-6 text-right">
                أرسل لنا رسالة
              </h3>
              
              <form className="space-y-6" dir="rtl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                      الاسم الكامل
                    </label>
                    <Input
                      placeholder="أدخل اسمك الكامل"
                      className="w-full text-right bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                      رقم الهاتف
                    </label>
                    <Input
                      placeholder="أدخل رقم هاتفك"
                      className="w-full text-right bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full text-right bg-input border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                    نوع المشروع
                  </label>
                  <select className="w-full p-3 rounded-lg bg-input border border-border focus:border-primary text-right font-tajawal">
                    <option value="">اختر نوع المشروع</option>
                    <option value="doors">أبواب الأمان</option>
                    <option value="windows">نوافذ الألوميتال</option>
                    <option value="kitchen">مطابخ</option>
                    <option value="railings">درابزين</option>
                    <option value="gates">بوابات</option>
                    <option value="stairs">سلالم</option>
                    <option value="custom">مشروع مخصص</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                    تفاصيل المشروع
                  </label>
                  <Textarea
                    placeholder="اكتب تفاصيل مشروعك هنا..."
                    rows={4}
                    className="w-full text-right bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-royal-gradient hover:bg-royal-reverse border-royal shadow-royal font-tajawal"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    أرسل الرسالة
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-blue-gradient rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-accent-foreground font-tajawal mb-4">
              هل تحتاج استشارة فورية؟
            </h3>
            <p className="text-accent-foreground/90 font-tajawal mb-6">
              فريق الخبراء لدينا متاح للرد على استفساراتك وتقديم المشورة المجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-accent hover:bg-background/90 font-tajawal"
                onClick={() => window.open('tel:+201001234567')}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بخبير الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-tajawal"
                onClick={() => window.open('https://wa.me/201001234567')}
              >
                <Send className="w-5 h-5 ml-2" />
                محادثة واتساب
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;