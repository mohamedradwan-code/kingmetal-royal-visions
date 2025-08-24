import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorOpen, Crown, Lock, Key } from 'lucide-react';
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
      scale: 1,
    },
    open: {
      rotateY: -110,
      transformOrigin: "right center",
      scale: 1,
    }
  };

  const doorTransition = {
    duration: 1.5,
    ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    type: "spring" as const,
    stiffness: 80,
    damping: 20
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    }
  };

  const contentTransition = {
    duration: 0.8,
    delay: 0.8,
    ease: "easeOut" as const
  };

  const handleVariants = {
    idle: { rotate: 0, scale: 1 },
    hover: { rotate: -15, scale: 1.1 },
    pressed: { rotate: -25, scale: 0.95 }
  };

  return (
    <section id={id} className={`relative min-h-screen ${className}`}>
      {/* Door Frame Container */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "2000px" }}>
        <div className="relative w-full h-full max-w-6xl mx-auto">
          
          {/* Door Handle & Lock Area - Only when closed */}
          {!isOpen && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-background/95 to-card/95 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 text-center shadow-2xl">
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="w-12 h-12 text-primary animate-royal-glow" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary font-tajawal mb-4">
                  {title}
                </h3>
                
                <motion.div
                  whileHover="hover"
                  whileTap="pressed"
                  variants={handleVariants}
                  className="mb-6"
                >
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-royal-gradient hover:bg-royal-reverse border-2 border-primary shadow-royal font-tajawal group text-lg px-8 py-4"
                  >
                    <Key className="w-6 h-6 ml-3 group-hover:rotate-45 transition-transform duration-300" />
                    {defaultButtonText}
                    <DoorOpen className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </motion.div>

                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <Lock className="w-5 h-5 text-primary/70" />
                  <span className="text-sm text-muted-foreground font-tajawal">اضغط لفتح الباب الملكي</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Door */}
          <motion.div
            className="absolute inset-8 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 rounded-lg shadow-2xl overflow-hidden"
            variants={doorVariants}
            animate={isOpen ? "open" : "closed"}
            transition={doorTransition}
            style={{ 
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            {/* Door Frame - Outer */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 p-3 rounded-lg">
              
              {/* Door Frame - Inner */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg p-4 relative overflow-hidden">
                
                {/* Door Panels - Top */}
                <div className="absolute top-6 left-6 right-6 h-1/3 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-800 rounded-lg border-2 border-amber-500/30 shadow-inner">
                  <div className="absolute inset-3 border border-amber-400/20 rounded-lg"></div>
                  <div className="absolute inset-6 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg shadow-inner"></div>
                </div>

                {/* Door Panels - Bottom */}
                <div className="absolute bottom-6 left-6 right-6 h-1/3 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-800 rounded-lg border-2 border-amber-500/30 shadow-inner">
                  <div className="absolute inset-3 border border-amber-400/20 rounded-lg"></div>
                  <div className="absolute inset-6 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg shadow-inner"></div>
                </div>

                {/* Royal Crown Emblem */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl border-4 border-amber-300">
                    <Crown className="w-12 h-12 text-zinc-900" />
                  </div>
                </div>

                {/* Door Handle */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                  <div className="w-6 h-16 bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-xl border-2 border-amber-300"></div>
                  <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-xl border-2 border-amber-300"></div>
                </div>

                {/* Lock Mechanism */}
                <div className="absolute top-1/2 left-16 transform -translate-y-1/2 mt-8">
                  <div className="w-8 h-12 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-lg border border-amber-500/50 flex items-center justify-center">
                    <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
                  </div>
                </div>

                {/* Decorative Hinges */}
                <div className="absolute top-16 right-4 w-8 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg shadow-xl border border-amber-400"></div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg shadow-xl border border-amber-400"></div>
                <div className="absolute bottom-16 right-4 w-8 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg shadow-xl border border-amber-400"></div>

                {/* Door Edge Details */}
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-amber-600 to-amber-800 shadow-inner"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-800"></div>

                {/* Metallic Texture Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-700/20 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-transparent opacity-40"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Behind Door */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative z-20 min-h-screen bg-dark-gradient"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={contentTransition}
          >
            {children}
            
            {/* Close Door Button */}
            <motion.div
              className="fixed top-8 right-8 z-50"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            >
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-royal-gradient hover:bg-royal-reverse border-2 border-primary text-primary-foreground font-tajawal shadow-royal group"
                size="lg"
              >
                <DoorOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                {t('closeDoor')}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl"></div>
      </div>
    </section>
  );
};

export default DoorSection;