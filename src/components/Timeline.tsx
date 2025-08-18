import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Award, Crown } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2005',
      title: 'التأسيس',
      description: 'بداية رحلتنا في عالم الألوميتال بورشة صغيرة وحلم كبير',
      icon: Calendar,
      color: 'from-accent to-accent-light'
    },
    {
      year: '2010',
      title: 'التوسع',
      description: 'افتتاح أول مصنع متخصص وبداية الإنتاج على نطاق واسع',
      icon: TrendingUp,
      color: 'from-primary to-primary-glow'
    },
    {
      year: '2018',
      title: 'مشاريع كبرى',
      description: 'تنفيذ مشاريع ضخمة وشراكات مع كبرى الشركات العقارية',
      icon: Award,
      color: 'from-secondary to-secondary-light'
    },
    {
      year: '2025',
      title: 'رواد الصناعة',
      description: 'أصبحنا الرقم واحد في مصر بأحدث التقنيات والتصميمات الملكية',
      icon: Crown,
      color: 'from-primary-glow to-accent'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-dark-gradient relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold font-tajawal mb-4">
            <span className="bg-royal-gradient bg-clip-text text-transparent">
              رحلتنا عبر الزمن
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-tajawal">
            من البداية المتواضعة إلى قمة الإبداع والتميز في صناعة الألوميتال
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className="bg-card border border-royal shadow-royal rounded-xl p-6 royal-shine hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                        <milestone.icon className="w-6 h-6 text-background" />
                      </div>
                      <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                        <h3 className="text-2xl font-bold text-primary font-tajawal">
                          {milestone.year}
                        </h3>
                        <h4 className="text-lg font-semibold text-foreground font-tajawal">
                          {milestone.title}
                        </h4>
                      </div>
                    </div>
                    <p className={`text-muted-foreground font-tajawal leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Central Point */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-background shadow-glow`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-glossy border border-royal rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary font-tajawal mb-4">
              كن جزءاً من قصة نجاحنا
            </h3>
            <p className="text-muted-foreground font-tajawal mb-6">
              انضم إلى آلاف العملاء الراضين واجعل مشروعك جزءاً من إنجازاتنا
            </p>
            <motion.button
              className="bg-royal-gradient hover:bg-royal-reverse border border-royal px-8 py-3 rounded-lg font-tajawal font-semibold shadow-royal hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ابدأ مشروعك معنا
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;