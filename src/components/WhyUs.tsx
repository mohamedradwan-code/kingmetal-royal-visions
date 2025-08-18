import { motion } from 'framer-motion';
import { Shield, Hammer, Crown, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'أمان فائق',
      description: 'منتجات تضمن أعلى مستوى من الأمان والحماية لعائلتك',
      gradient: 'from-accent to-accent-light'
    },
    {
      icon: Hammer,
      title: 'خامات مستوردة',
      description: 'نستخدم أجود الخامات المستوردة من أوروبا وتركيا',
      gradient: 'from-primary to-primary-glow'
    },
    {
      icon: Crown,
      title: 'تصميم ملكي',
      description: 'تصميمات فاخرة تضفي لمسة ملكية على مكانك',
      gradient: 'from-secondary to-secondary-light'
    },
    {
      icon: Zap,
      title: 'سرعة في التنفيذ',
      description: 'التزام كامل بالمواعيد وتسليم في الوقت المحدد',
      gradient: 'from-primary-glow to-accent'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-tajawal mb-4 text-accent-foreground">
            لماذا نحن الأفضل؟
          </h2>
          <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto font-tajawal">
            أربعة أسباب تجعلنا الخيار الأول لكل من يبحث عن الجودة والفخامة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-background/95 border-border hover-lift royal-shine text-center p-8 h-full group backdrop-blur-sm">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-royal`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold font-tajawal mb-4 text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-tajawal leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: '+1000', label: 'مشروع مكتمل' },
            { number: '18+', label: 'سنة خبرة' },
            { number: '100%', label: 'رضا العملاء' },
            { number: '24/7', label: 'خدمة عملاء' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground font-tajawal mb-2">
                {stat.number}
              </div>
              <div className="text-accent-foreground/80 font-tajawal">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <blockquote className="text-2xl md:text-3xl font-semibold text-accent-foreground font-tajawal italic max-w-3xl mx-auto">
            "الجودة ليست فقط ما نصنعه، بل هي شعورك بالأمان والفخر عندما تنظر إلى منزلك"
          </blockquote>
          <cite className="block mt-4 text-accent-foreground/80 font-tajawal">
            - فريق KING METAL
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;