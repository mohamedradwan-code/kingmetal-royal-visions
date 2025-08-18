import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyUs from '@/components/WhyUs';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
