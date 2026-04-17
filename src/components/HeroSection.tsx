import { useState } from 'react';
import { Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-screen-xl pointer-events-none overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-64 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 -right-20 w-[30rem] h-[30rem] bg-fuchsia-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              {t('hero.badge')}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography variant="h1" className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              {t('hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">React + MUI</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="body1" className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              variant="contained" 
              size="large"
              className="rounded-full px-8 py-4 text-lg bg-slate-900 hover:bg-slate-800 group shadow-xl shadow-slate-900/20 !text-white"
              endIcon={<ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t('hero.btnStart')}
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              className="rounded-full px-8 py-4 text-lg border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              {t('hero.btnView')}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
