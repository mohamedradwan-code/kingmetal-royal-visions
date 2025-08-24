import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const contactInfo = [
  {
    icon: Phone,
    title: "phoneWhatsapp",
    details: "+20 11 15499159",
    color: "from-blue-500 to-cyan-500",
    isPhone: true
  },
  {
    icon: Mail,
    title: "emailAddress",
    details: "Kingmetal159@gmail.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    title: "factoryAddress",
    details: "factoryLocation",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "secondAddress", 
    details: "secondLocation",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: MapPin,
    title: "officeAddress",
    details: "officeLocation", 
    color: "from-pink-500 to-red-500"
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: "السبت - الخميس: 9 صباحاً - 6 مساءً",
    color: "from-orange-500 to-red-500"
  }
];

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen bg-dark-gradient overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-background/95 to-card/95 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 text-center shadow-2xl">
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="w-12 h-12 text-primary animate-royal-glow" />
                </motion.div>
                
                <h2 className="text-4xl font-bold text-primary font-tajawal mb-4">
                  {t('contactKings')}
                </h2>
                
                <h3 className="text-2xl font-bold text-secondary font-tajawal mb-8">
                  {t('companyFullName')}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-royal">
                        <CardContent className="p-6 text-center">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                            <info.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-primary mb-2 font-tajawal">
                            {t(info.title)}
                          </h3>
                          {info.isPhone ? (
                            <div className="space-y-2">
                              <p className="text-muted-foreground font-tajawal mb-3">
                                {info.details}
                              </p>
                              <div className="flex gap-2 justify-center">
                                <Button
                                  onClick={() => window.open(`tel:${info.details}`, '_self')}
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm"
                                >
                                  {t('callNow')}
                                </Button>
                                <Button
                                  onClick={() => window.open(`https://wa.me/${info.details.replace(/\s+/g, '')}`, '_blank')}
                                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm"
                                >
                                  {t('whatsappNow')}
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-muted-foreground font-tajawal">
                              {typeof info.details === 'string' && info.details.startsWith('http') ? (
                                <a 
                                  href={info.details} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-primary transition-colors"
                                >
                                  {info.details}
                                </a>
                              ) : info.details.includes('@') ? (
                                <a 
                                  href={`mailto:${info.details}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {info.details}
                                </a>
                              ) : (
                                t(info.details)
                              )}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    className="bg-royal-gradient hover:bg-royal-reverse border-2 border-primary text-primary-foreground font-tajawal shadow-royal group text-lg px-8 py-4"
                    onClick={() => window.open('tel:+201115499159', '_self')}
                  >
                    <Phone className="w-6 h-6 ml-3 group-hover:animate-pulse" />
                    {t('callNow')}
                  </Button>
                  <Button 
                    className="bg-green-gradient hover:bg-green-reverse border-2 border-green-400 text-white font-tajawal shadow-royal group text-lg px-8 py-4"
                    onClick={() => window.open('https://wa.me/201115499159', '_blank')}
                  >
                    <MessageCircle className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                    {t('whatsappNow')}
                  </Button>
                </div>

                {/* Facebook Link */}
                <div className="text-center mb-8">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-tajawal"
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61558336842967', '_blank')}
                  >
                    {t('facebook')}
                  </Button>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary font-tajawal mb-6">
                    أرسل لنا رسالة
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                          الاسم الكامل
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="أدخل اسمك الكامل"
                          className="w-full text-right bg-input/50 border-primary/20 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                          رقم الهاتف
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="أدخل رقم هاتفك"
                          className="w-full text-right bg-input/50 border-primary/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                        البريد الإلكتروني
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="أدخل بريدك الإلكتروني"
                        className="w-full text-right bg-input/50 border-primary/20 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                        نوع المشروع
                      </label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-input/50 border border-primary/20 focus:border-primary text-right font-tajawal"
                        required
                      >
                        <option value="">اختر نوع المشروع</option>
                        <option value="doors">أبواب مصفحة</option>
                        <option value="windows">شبابيك ألوميتال</option>
                        <option value="kitchen">مطابخ ألوميتال</option>
                        <option value="railings">درابزين بلكونات</option>
                        <option value="gates">بوابات زخرفية</option>
                        <option value="stairs">سلالم حديدية</option>
                        <option value="custom">مشروع مخصص</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground font-tajawal mb-2 text-right">
                        تفاصيل المشروع
                      </label>
                      <Textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="اكتب تفاصيل مشروعك هنا..."
                        rows={4}
                        className="w-full text-right bg-input/50 border-primary/20 focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-royal-gradient hover:bg-royal-reverse border-2 border-primary shadow-royal font-tajawal text-lg py-4"
                      >
                        <Send className="w-6 h-6 ml-3" />
                        أرسل الرسالة
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-blue-gradient rounded-2xl p-8 text-center shadow-2xl border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-tajawal">
                تحتاج استشارة فورية؟
              </h3>
              <p className="text-blue-100 mb-6 font-tajawal">
                تواصل مع خبرائنا الآن للحصول على استشارة مجانية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-tajawal shadow-lg group text-lg px-8 py-4"
                  onClick={() => window.open('tel:+201115499159', '_self')}
                >
                  <Phone className="w-6 h-6 ml-3 group-hover:animate-pulse" />
                  اتصل بخبير
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white font-tajawal shadow-lg group text-lg px-8 py-4"
                  onClick={() => window.open('https://wa.me/201115499159', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                  واتساب فوري
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;