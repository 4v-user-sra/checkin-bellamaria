import { motion } from 'motion/react';
import { presentationMeta } from '../data';
import { Calendar, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-brand-coral pt-24 pb-28 px-6 md:px-12 relative overflow-hidden min-h-[75vh] flex flex-col justify-center">
      {/* Flat Shapes acting as Collages */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-dark rounded-bl-[140px] mix-blend-multiply opacity-80 pointer-events-none"></div>
      <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] bg-brand-accent rounded-tr-[140px] mix-blend-multiply opacity-90 pointer-events-none"></div>
      <div className="absolute top-36 -left-20 w-[180px] h-[180px] bg-brand-white rounded-full opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="max-w-4xl py-8">
          
          {/* Tagline / Meta */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-brand-white/15 backdrop-blur-xs text-brand-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-brand-white/20">
              <Calendar className="w-4 h-4 text-brand-white" />
              {presentationMeta.date}
            </span>
            <span className="text-brand-white/80 font-semibold text-xs md:text-sm uppercase tracking-wider">
              {presentationMeta.agency} × {presentationMeta.client}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-brand-white mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-tight font-heading font-bold"
          >
            {presentationMeta.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl text-brand-white/95 font-heading italic mb-8 font-normal"
          >
            {presentationMeta.brand}
          </motion.p>

          {/* Methodology Badge - R O P R E */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-brand-white/10 border-2 border-brand-white/30 rounded-[12px] p-6 backdrop-blur-sm max-w-xl mb-6"
          >
            <div className="flex items-center gap-2 text-brand-white font-mono font-bold text-sm tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4 text-brand-white" />
              Metodologia de Alinhamento
            </div>
            <div className="text-brand-white font-heading font-bold text-2xl md:text-3xl tracking-wide mb-2">
              R • O • P • R • E
            </div>
            <div className="text-brand-white/90 text-sm md:text-base font-medium">
              {presentationMeta.methodologyFullName}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-brand-white/80 text-sm font-medium"
          >
            Período de Análise: <strong className="text-brand-white">{presentationMeta.period}</strong>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
