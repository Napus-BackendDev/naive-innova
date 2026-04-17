import { Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://transparenttextures.com/patterns/cubes.png')] z-0"></div>
      
      <Container maxWidth="md" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-3xl"
        >
          <Typography variant="h3" className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to create something amazing?
          </Typography>
          <Typography variant="body1" className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            Join thousands of developers building the next generation of web applications.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            className="rounded-full px-10 py-4 text-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold shadow-xl shadow-cyan-500/20"
          >
            Join the Community
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
