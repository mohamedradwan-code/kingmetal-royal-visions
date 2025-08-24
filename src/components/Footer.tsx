import { motion } from 'framer-motion';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المنتجات', href: '#products' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'الخط الزمني', href: '#timeline' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'معرض الأعمال', href: '#works' },
    { label: 'تواصل معنا', href: '#contact' }
  ];

  const services = [
    'أبواب الأمان المدرعة',
    'نوافذ الألوميتال',
    'مطابخ الألوميتال',
    'درابزين الشرفات',
    'البوابات الزخرفية',
    'سلالم الستيل'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'فيسبوك' },
    { icon: Instagram, href: '#', label: 'إنستغرام' },
    { icon: Youtube, href: '#', label: 'يوتيوب' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-royal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-lg flex items-center justify-center shadow-xl border-2 border-amber-300">
                <span className="text-xl font-bold text-zinc-900 font-tajawal">KM</span>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-primary font-tajawal">KING METAL</h3>
                <p className="text-sm text-muted-foreground font-tajawal">ملوك الألوميتال والحدادة في مصر</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground font-tajawal leading-relaxed text-right">
              نحن متخصصون في تصنيع وتركيب منتجات الألوميتال والحدادة عالية الجودة بتصميمات ملكية فاخرة تضفي لمسة من الأناقة والأمان على مكانك.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-royal rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-royal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-foreground font-tajawal text-right">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-royal font-tajawal text-right block w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-foreground font-tajawal text-right">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground font-tajawal text-right">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-foreground font-tajawal text-right">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-right">
                  <p className="text-muted-foreground font-tajawal">+20 11 15499159</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-right">
                  <p className="text-muted-foreground font-tajawal">Kingmetal159@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-right space-y-2">
                  <p className="text-muted-foreground font-tajawal font-semibold">المصنع:</p>
                  <p className="text-muted-foreground font-tajawal">مدينة بدر – المنطقة الصناعية – مجمع التطبيقات</p>
                  <p className="text-muted-foreground font-tajawal font-semibold">العنوان الثاني:</p>
                  <p className="text-muted-foreground font-tajawal">الحي الثاني – مول ضيوف الرحمن – بجوار السنتر الأحمر</p>
                  <p className="text-muted-foreground font-tajawal font-semibold">عنوان المكتب:</p>
                  <p className="text-muted-foreground font-tajawal">مدينة الشروق – حي النرجس – مول اسكوير فايف</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Facebook className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-right">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61558336842967" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-tajawal hover:text-primary transition-colors"
                  >
                    صفحتنا على فيسبوك
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-tajawal text-center md:text-right">
              © {currentYear} KING METAL. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex space-x-6 space-x-reverse">
              <button className="text-muted-foreground hover:text-primary transition-royal font-tajawal">
                سياسة الخصوصية
              </button>
              <button className="text-muted-foreground hover:text-primary transition-royal font-tajawal">
                الشروط والأحكام
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-8 left-8 w-12 h-12 bg-royal-gradient border border-royal rounded-full flex items-center justify-center shadow-royal hover-lift z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection('#home')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center">
            <span className="text-xs font-bold text-zinc-900">KM</span>
          </div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;