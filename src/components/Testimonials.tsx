import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد علي',
      role: 'مهندس معماري',
      location: 'القاهرة الجديدة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'تعاملت مع KING METAL في مشروع فيلا كاملة، والنتيجة فاقت توقعاتي. الجودة ممتازة والتصميم ملكي حقاً. أنصح بهم بشدة.',
      project: 'فيلا سكنية - 2024'
    },
    {
      id: 2,
      name: 'فاطمة السيد حسن',
      role: 'ربة منزل',
      location: 'الإسكندرية',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'مطبخ الألوميتال الذي ركبوه لي رائع جداً. عملي واشكله جميل، والأهم أنه سهل التنظيف والصيانة. فريق العمل محترف ومؤدب.',
      project: 'مطبخ ألوميتال - 2024'
    },
    {
      id: 3,
      name: 'خالد عبد الرحمن',
      role: 'مطور عقاري',
      location: 'العاصمة الإدارية',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'شركة محترفة وملتزمة بالمواعيد. نفذوا لنا مشروع مجمع سكني كامل بأعلى جودة وفي الوقت المحدد. الثقة في التعامل معهم مضمونة.',
      project: 'مجمع سكني - 2023'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-tajawal mb-4">
            <span className="bg-royal-gradient bg-clip-text text-transparent">
              آراء عملائنا الكرام
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-tajawal">
            ثقة عملائنا هي أغلى ما نملك، وكلماتهم هي شهادة على جودة عملنا
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card border-royal shadow-royal hover-lift royal-shine p-6 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center justify-end mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground font-tajawal leading-relaxed mb-6 text-right">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Info */}
                <div className="text-sm text-primary font-tajawal font-semibold mb-4 text-right">
                  {testimonial.project}
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="text-right">
                    <h4 className="font-semibold text-foreground font-tajawal">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-tajawal">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground font-tajawal">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: '⭐', value: '4.9/5', label: 'تقييم العملاء' },
            { icon: '🏆', value: '98%', label: 'معدل الرضا' },
            { icon: '🔁', value: '85%', label: 'عملاء متكررون' },
            { icon: '📞', value: '24/7', label: 'دعم مستمر' }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className="text-center bg-glossy border border-royal rounded-lg p-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-2xl mb-2">{indicator.icon}</div>
              <div className="text-xl font-bold text-primary font-tajawal">
                {indicator.value}
              </div>
              <div className="text-sm text-muted-foreground font-tajawal">
                {indicator.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-royal-gradient rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground font-tajawal mb-4">
              انضم إلى عائلة العملاء السعداء
            </h3>
            <p className="text-primary-foreground/90 font-tajawal mb-6">
              اكتشف بنفسك لماذا يثق بنا الآلاف عبر مصر
            </p>
            <motion.button
              className="bg-background text-primary hover:bg-background/90 px-8 py-3 rounded-lg font-tajawal font-semibold shadow-glow hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              احجز استشارة مجانية
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;