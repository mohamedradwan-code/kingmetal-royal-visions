import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyUs from '@/components/WhyUs';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DoorSection from '@/components/DoorSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <Hero />
      
      <DoorSection 
        id="products" 
        title="منتجاتنا الملكية"
        buttonText="افتح باب المنتجات"
        doorColor="from-primary/20 to-secondary/20"
      >
        <Products />
      </DoorSection>
      
      <DoorSection 
        id="why-us" 
        title="لماذا نحن الأفضل"
        buttonText="افتح باب التميز"
        doorColor="from-accent/20 to-primary/20"
      >
        <WhyUs />
      </DoorSection>
      
      <DoorSection 
        id="timeline" 
        title="رحلتنا عبر الزمن"
        buttonText="افتح باب التاريخ"
        doorColor="from-secondary/20 to-accent/20"
      >
        <Timeline />
      </DoorSection>
      
      <DoorSection 
        id="testimonials" 
        title="آراء عملائنا الكرام"
        buttonText="افتح باب الشهادات"
        doorColor="from-primary/20 to-primary-glow/20"
      >
        <Testimonials />
      </DoorSection>
      
      <DoorSection 
        id="contact" 
        title="تواصل مع الملوك"
        buttonText="افتح باب التواصل"
        doorColor="from-accent/20 to-secondary/20"
      >
        <Contact />
      </DoorSection>
      
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
