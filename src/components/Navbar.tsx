import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المنتجات', href: '#products' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'الخط الزمني', href: '#timeline' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glossy border-b border-royal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 space-x-reverse"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-8 h-8 text-primary animate-crown-spin" />
            <div className="text-right">
              <h1 className="text-xl font-bold text-primary font-tajawal">KING METAL</h1>
              <p className="text-xs text-muted-foreground">ملوك الألوميتال</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-royal relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-gradient group-hover:w-full transition-royal"></span>
              </motion.button>
            ))}
            <Button
              variant="default"
              className="bg-royal-gradient hover:bg-royal-reverse border-royal shadow-royal hover-lift"
              onClick={() => scrollToSection('#contact')}
            >
              اتصل بنا الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card-royal border-t border-royal"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-right text-foreground hover:text-primary transition-royal py-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button
                  variant="default"
                  className="w-full bg-royal-gradient hover:bg-royal-reverse border-royal shadow-royal"
                  onClick={() => scrollToSection('#contact')}
                >
                  اتصل بنا الآن
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;