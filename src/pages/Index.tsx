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
import WorksGallery from '@/components/WorksGallery';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <Hero />
      
      <DoorSection 
        id="products" 
        title={t('royalProducts')}
        buttonText={t('openProductsDoor')}
        doorColor="from-primary/20 to-secondary/20"
      >
        <Products />
      </DoorSection>
      
      <DoorSection 
        id="why-us" 
        title={t('whyBest')}
        buttonText={t('openExcellenceDoor')}
        doorColor="from-accent/20 to-primary/20"
      >
        <WhyUs />
      </DoorSection>
      
      <DoorSection 
        id="timeline" 
        title={t('ourJourney')}
        buttonText={t('openHistoryDoor')}
        doorColor="from-secondary/20 to-accent/20"
      >
        <Timeline />
      </DoorSection>
      
      <DoorSection 
        id="testimonials" 
        title={t('clientReviews')}
        buttonText={t('openTestimonialsDoor')}
        doorColor="from-primary/20 to-primary-glow/20"
      >
        <Testimonials />
      </DoorSection>
      
      <DoorSection 
        id="works" 
        title="معرض أعمالنا الملكية"
        buttonText="افتح معرض الأعمال"
        doorColor="from-purple/20 to-accent/20"
      >
        <WorksGallery />
      </DoorSection>
      
      <DoorSection 
        id="contact" 
        title={t('contactKings')}
        buttonText={t('openContactDoor')}
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
