import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { contactButtons } from '../../config/services';

export default function CTASection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container maxWidth="lg">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">ติดต่อเรา</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            พร้อมพัฒนาสูตร{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              เฉพาะของคุณ?
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto">
            ทีม R&amp;D พร้อมรับโจทย์ทุกระดับ — ตั้งแต่สูตรเริ่มต้น ไปจนถึง Custom Formula ที่คู่แข่งเลียนแบบไม่ได้
          </p>
        </div>

        {/* Contact buttons grid — copied from ProductSection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactButtons.map((btn) => (
            <motion.a
              key={btn.id}
              href={btn.href}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl md:rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 ${btn.gridClass}`}
            >
              <img
                src={btn.img}
                alt={btn.alt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </div>

      </Container>
    </section>
  );
}
