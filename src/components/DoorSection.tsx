import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorOpen, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface DoorSectionProps {
  id: string;
  title: string;
  buttonText?: string;
  children: React.ReactNode;
  className?: string;
  doorColor?: string;
}

const DoorSection: React.FC<DoorSectionProps> = ({
  id,
  title,
  buttonText,
  children,
  className = "",
  doorColor = "from-card to-card-royal"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const defaultButtonText = buttonText || t('openDoor');

  const doorVariants = {
    closed: {
      rotateY: 0,
      transformOrigin: "right center",
    },
    open: {
      rotateY: -120,
      transformOrigin: "right center",
      transition: {
        duration: 1.2,
        ease: "anticipate" as const
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id={id} className={`relative min-h-screen ${className}`}>
      {/* Door Frame */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        {/* Door Background */}
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Door Handle Area - Centered but higher */}
          {!isOpen && (
            <motion.div
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-glossy border-2 border-royal rounded-xl p-6 text-center shadow-royal">
                <Crown className="w-8 h-8 text-primary mx-auto mb-4 animate-royal-glow" />
                <h3 className="text-xl font-bold text-primary font-tajawal mb-3">
                  {title}
                </h3>
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-royal-gradient hover:bg-royal-reverse border-royal shadow-glow font-tajawal group"
                >
                  <DoorOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  {defaultButtonText}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Door Panels */}
          <motion.div
            className={`absolute inset-4 bg-gradient-to-br ${doorColor} border-4 border-royal rounded-lg shadow-deep`}
            variants={doorVariants}
            animate={isOpen ? "open" : "closed"}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Door Frame Details */}
            <div className="absolute inset-6 border-2 border-royal/30 rounded-lg"></div>
            <div className="absolute inset-12 border border-royal/20 rounded-lg"></div>
            
            {/* Door Handle */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-4 h-12 bg-primary rounded-full shadow-glow"></div>
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-glow"></div>

            {/* Royal Crown Pattern */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <Crown className="w-16 h-16 text-primary/30" />
            </div>

            {/* Lock Pattern */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-16 border-2 border-primary/30 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary/50 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Behind Door */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative z-10 min-h-screen"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
            
            {/* Close Door Button */}
            <motion.div
              className="fixed top-4 right-4 z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="border-royal text-primary hover:bg-primary/10 font-tajawal"
              >
                {t('closeDoor')}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Door Shadow */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60 pointer-events-none"></div>
    </section>
  );
};

export default DoorSection;