import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-cyan-500" size={32} />,
    title: "Premium Aesthetics",
    description: "Designed with modern principles, glassmorphism, and meticulously crafted animations to wow your users."
  },
  {
    icon: <Layers className="text-fuchsia-500" size={32} />,
    title: "Material UI + Tailwind",
    description: "The perfect harmony of robust accessible components from MUI and the rapid styling power of Tailwind CSS."
  },
  {
    icon: <Zap className="text-amber-500" size={32} />,
    title: "Lightning Fast",
    description: "Powered by Vite and React for an incredibly fast and snappy user experience from the first paint."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Choose Our Stack
          </Typography>
          <Typography variant="body1" className="text-lg text-slate-500 max-w-2xl mx-auto">
            We've carefully integrated the best tools in the ecosystem to give you a developer experience like no other.
          </Typography>
        </div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-2xl border border-slate-100 !shadow-lg hover:!shadow-xl transition-shadow bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 shadow-inner border border-slate-100">
                      {feature.icon}
                    </div>
                    <Typography variant="h5" className="font-bold text-slate-800 mb-3">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-600 leading-relaxed text-base">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
