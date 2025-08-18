import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navbar
    home: 'الرئيسية',
    products: 'المنتجات',
    whyUs: 'لماذا نحن',
    timeline: 'الخط الزمني',
    testimonials: 'آراء العملاء',
    contact: 'تواصل معنا',
    contactNow: 'اتصل بنا الآن',
    
    // Company Info
    companyName: 'KING METAL',
    companySubtitle: 'ملوك الألوميتال والحدادة في مصر',
    
    // Hero
    heroTitle: 'ملوك الألوميتال والحدادة في مصر',
    heroSubtitle: 'نصنع الأمان والجمال بأجود الخامات وأحدث التقنيات',
    
    // Door Section
    openDoor: 'افتح الباب',
    closeDoor: 'أغلق الباب',
    royalProducts: 'منتجاتنا الملكية',
    openProductsDoor: 'افتح باب المنتجات',
    whyBest: 'لماذا نحن الأفضل',
    openExcellenceDoor: 'افتح باب التميز',
    ourJourney: 'رحلتنا عبر الزمن',
    openHistoryDoor: 'افتح باب التاريخ',
    clientReviews: 'آراء عملائنا الكرام',
    openTestimonialsDoor: 'افتح باب الشهادات',
    contactKings: 'تواصل مع الملوك',
    openContactDoor: 'افتح باب التواصل',
    
    // Products
    armoredDoors: 'أبواب مصفحة',
    armoredDoorsDesc: 'أعلى درجات الحماية والأمان',
    aluminumWindows: 'شبابيك ألوميتال',
    aluminumWindowsDesc: 'عازلة للصوت والحرارة',
    kitchenCabinets: 'مطابخ ألوميتال',
    kitchenCabinetsDesc: 'تصميمات عصرية وعملية',
    balconyRailings: 'درابزين بلكونات',
    balconyRailingsDesc: 'أمان وجمال للشرفات',
    decorativeGates: 'بوابات زخرفية',
    decorativeGatesDesc: 'تصميمات فاخرة ومميزة',
    steelStaircases: 'سلالم حديدية',
    steelStaircasesDesc: 'قوة وثبات استثنائي',
    
    // Why Us
    security: 'أمان فائق',
    securityDesc: 'حماية قصوى بأعلى معايير الجودة',
    materials: 'خامات مستوردة',
    materialsDesc: 'أجود الخامات من أفضل المصادر العالمية',
    design: 'تصميم ملكي',
    designDesc: 'تصميمات فاخرة تليق بالملوك',
    speed: 'سرعة في التنفيذ',
    speedDesc: 'التزام بالمواعيد وجودة في الإنجاز',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    addressText: 'القاهرة، مصر'
  },
  en: {
    // Navbar
    home: 'Home',
    products: 'Products',
    whyUs: 'Why Us',
    timeline: 'Timeline',
    testimonials: 'Testimonials',
    contact: 'Contact',
    contactNow: 'Contact Now',
    
    // Company Info
    companyName: 'KING METAL',
    companySubtitle: 'Kings of Aluminum & Metalwork in Egypt',
    
    // Hero
    heroTitle: 'Kings of Aluminum & Metalwork in Egypt',
    heroSubtitle: 'We craft safety and beauty with the finest materials and latest technology',
    
    // Door Section
    openDoor: 'Open Door',
    closeDoor: 'Close Door',
    royalProducts: 'Our Royal Products',
    openProductsDoor: 'Open Products Door',
    whyBest: 'Why We Are The Best',
    openExcellenceDoor: 'Open Excellence Door',
    ourJourney: 'Our Journey Through Time',
    openHistoryDoor: 'Open History Door',
    clientReviews: 'Our Valued Client Reviews',
    openTestimonialsDoor: 'Open Testimonials Door',
    contactKings: 'Contact The Kings',
    openContactDoor: 'Open Contact Door',
    
    // Products
    armoredDoors: 'Armored Doors',
    armoredDoorsDesc: 'Highest levels of protection and security',
    aluminumWindows: 'Aluminum Windows',
    aluminumWindowsDesc: 'Sound and heat insulation',
    kitchenCabinets: 'Aluminum Kitchens',
    kitchenCabinetsDesc: 'Modern and practical designs',
    balconyRailings: 'Balcony Railings',
    balconyRailingsDesc: 'Safety and beauty for balconies',
    decorativeGates: 'Decorative Gates',
    decorativeGatesDesc: 'Luxurious and distinctive designs',
    steelStaircases: 'Steel Staircases',
    steelStaircasesDesc: 'Exceptional strength and stability',
    
    // Why Us
    security: 'Superior Security',
    securityDesc: 'Maximum protection with highest quality standards',
    materials: 'Imported Materials',
    materialsDesc: 'Finest materials from the best global sources',
    design: 'Royal Design',
    designDesc: 'Luxurious designs fit for kings',
    speed: 'Fast Execution',
    speedDesc: 'Commitment to deadlines and quality delivery',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressText: 'Cairo, Egypt'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};