import { motion } from 'framer-motion';
import { Crown, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-steel-doors.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="أبواب أمان فاخرة من الستيل بتصميم ملكي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Crown Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <Crown className="w-16 h-16 text-primary animate-royal-glow" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-tajawal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-royal-gradient bg-clip-text text-transparent text-shadow-royal">
              KING METAL
            </span>
          </motion.h1>

          {/* Arabic Subtitle */}
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-foreground font-tajawal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            ملوك الألوميتال في مصر
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-tajawal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            تصنيع وتركيب الأبواب الأمان والنوافذ الألوميتال بأعلى جودة وتصميم ملكي فاخر
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-royal-gradient hover:bg-royal-reverse border-royal shadow-royal hover-lift text-lg px-8 py-6 font-tajawal"
              onClick={scrollToContact}
            >
              تواصل معنا الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-royal text-primary hover:bg-primary/10 text-lg px-8 py-6 font-tajawal"
              onClick={scrollToProducts}
            >
              استكشف منتجاتنا
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <button
              onClick={scrollToProducts}
              className="text-primary hover:text-primary-glow transition-royal"
            >
              <ArrowDown className="w-8 h-8 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <motion.div
          className="w-32 h-32 border-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <motion.div
          className="w-24 h-24 border-2 border-secondary rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Hero;