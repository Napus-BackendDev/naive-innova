import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-50/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
            <Share2 size={14} className="text-fuchsia-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-fuchsia-600">Connectivity Hub</span>
          </div>

          {/* Large Editorial Title */}
          <Typography
            variant="h1"
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
          >
            CON<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">TENT</span>
          </Typography>

          {/* Minimal Subtitle */}
          <div className="max-w-2xl border-l-4 border-fuchsia-500 pl-8 ml-2">
            <Typography variant="body1" className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">
              "Your central hub for brand assets, communication channels, and geographic presence. Everything Naive Innova, in one place."
            </Typography>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
