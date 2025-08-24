import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// للأسف لا يمكنني الوصول للصور المرفوعة، لذا سأستخدم أسماء وصفية
const worksData = [
  {
    id: 1,
    title: 'بوابات زخرفية مخرمة',
    description: 'بوابات بتصميمات إسلامية فاخرة مع زخارف مخرمة',
    category: 'gates'
  },
  {
    id: 2,
    title: 'بوابات مزدوجة مخرمة',
    description: 'بوابات مزدوجة بتصميمات زخرفية معقدة',
    category: 'gates'
  },
  {
    id: 3,
    title: 'أبواب منزلية مخرمة',
    description: 'أبواب منزلية بتصميمات زخرفية أنيقة',
    category: 'doors'
  },
  {
    id: 4,
    title: 'درابزين بلكونات مخرم',
    description: 'درابزين للبلكونات بتصميمات زخرفية جميلة',
    category: 'railings'
  },
  {
    id: 5,
    title: 'بوابات منزلية كلاسيكية',
    description: 'بوابات حديدية بتصميمات كلاسيكية فاخرة',
    category: 'gates'
  },
  {
    id: 6,
    title: 'بوابات حديثة مميزة',
    description: 'بوابات بتصميمات حديثة وعملية',
    category: 'gates'
  },
  {
    id: 7,
    title: 'بوابات صغيرة أنيقة',
    description: 'بوابات صغيرة بتصميمات أنيقة ومميزة',
    category: 'gates'
  },
  {
    id: 8,
    title: 'نوافذ ألوميتال حديثة',
    description: 'نوافذ ألوميتال بتصميمات هندسية حديثة',
    category: 'windows'
  },
  {
    id: 9,
    title: 'نوافذ ألوميتال مزخرفة',
    description: 'نوافذ ألوميتال بزخارف ديكورية جميلة',
    category: 'windows'
  }
];

const WorksGallery = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-dark-gradient overflow-hidden py-20">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Crown className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold font-tajawal mb-4">
            <span className="bg-royal-gradient bg-clip-text text-transparent">
              معرض أعمالنا الملكية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-tajawal">
            تصفح مجموعة من أفضل أعمالنا في الحدادة والألوميتال
          </p>
        </motion.div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-royal group overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Crown className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-lg font-bold font-tajawal">عمل رقم {work.id}</p>
                      </div>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 font-tajawal">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground font-tajawal text-sm">
                      {work.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-tajawal">
                        {work.category === 'gates' && 'بوابات'}
                        {work.category === 'doors' && 'أبواب'}
                        {work.category === 'railings' && 'درابزين'}
                        {work.category === 'windows' && 'نوافذ'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-royal-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-tajawal">
              هل أعجبتك أعمالنا؟
            </h3>
            <p className="text-white/90 mb-6 font-tajawal">
              تواصل معنا الآن للحصول على عمل مماثل بأعلى جودة
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksGallery;