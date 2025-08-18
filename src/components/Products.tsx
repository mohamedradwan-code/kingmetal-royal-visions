import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import armoredDoor from '@/assets/armored-door.jpg';
import aluminumWindow from '@/assets/aluminum-window.jpg';
import kitchenAluminum from '@/assets/kitchen-aluminum.jpg';
import balconyRailing from '@/assets/balcony-railing.jpg';
import decorativeGate from '@/assets/decorative-gate.jpg';
import steelStaircase from '@/assets/steel-staircase.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'أبواب الأمان المدرعة',
      description: 'أبواب أمان فائقة الجودة بتصميم ملكي وحماية كاملة',
      image: armoredDoor,
      features: ['مقاومة للكسر', 'تصميم ملكي', 'ضمان 10 سنوات']
    },
    {
      id: 2,
      title: 'نوافذ الألوميتال',
      description: 'نوافذ عصرية بخامات مستوردة وعزل حراري ممتاز',
      image: aluminumWindow,
      features: ['عزل حراري', 'مقاومة العوامل الجوية', 'سهولة الصيانة']
    },
    {
      id: 3,
      title: 'مطابخ الألوميتال',
      description: 'مطابخ فاخرة بتصميمات عصرية وخامات عالية الجودة',
      image: kitchenAluminum,
      features: ['مقاومة الرطوبة', 'تصميم عصري', 'سهولة التنظيف']
    },
    {
      id: 4,
      title: 'درابزين الشرفات',
      description: 'درابزين أنيق بنقوش ملكية وأمان كامل',
      image: balconyRailing,
      features: ['نقوش ملكية', 'مقاومة الصدأ', 'تصميم آمن']
    },
    {
      id: 5,
      title: 'البوابات الزخرفية',
      description: 'بوابات فاخرة بتصميمات تراثية وحديثة',
      image: decorativeGate,
      features: ['تصميم تراثي', 'خامات فاخرة', 'حرفية عالية']
    },
    {
      id: 6,
      title: 'سلالم الستيل',
      description: 'سلالم عصرية بتصميم أنيق ومتانة فائقة',
      image: steelStaircase,
      features: ['متانة عالية', 'تصميم عصري', 'أمان كامل']
    }
  ];

  return (
    <section id="products" className="py-20 bg-dark-gradient">
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
              منتجاتنا الملكية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-tajawal">
            مجموعة متكاملة من المنتجات عالية الجودة بتصميمات ملكية فاخرة
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-royal shadow-royal hover-lift royal-shine overflow-hidden group h-full">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-royal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-tajawal">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-tajawal leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-foreground font-tajawal"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full mt-6 bg-royal-gradient hover:bg-royal-reverse border border-royal py-2 px-4 rounded-lg font-tajawal font-semibold transition-royal"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    اطلب عرض سعر
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground mb-6 font-tajawal">
            هل تريد منتج مخصص؟ نحن نصنع ما تحلم به
          </p>
          <motion.button
            className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-3 rounded-lg font-tajawal font-semibold shadow-glow hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            اطلب تصميم مخصص
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;