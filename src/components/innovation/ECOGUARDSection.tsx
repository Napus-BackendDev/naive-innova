import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ecoguardNano from '../../assets/innovation/ecoguard-nano.png';

const specs = [
  { label: 'AVERAGE DIAMETER', value: '84.14', unit: 'nm', sub: 'ขนาดอนุภาคนาโน ± 0.75 nm' },
  { label: 'PDI (ความสม่ำเสมอ)', value: '0.232', unit: '', sub: '± 0.007 | กระจายตัวสม่ำเสมอ' },
  { label: 'ZETA POTENTIAL', value: '53.19', unit: 'mV', sub: '± 6.8 | ความเสถียรสูง' },
  { label: 'SHELF LIFE', value: '12+', unit: 'เดือน', sub: '15–25°C ในภาชนะปิดสนิท' },
  { label: 'CONCENTRATION', value: '50,000', unit: 'ppm', sub: 'Dose Recommendation: 200 ppm' },
  { label: 'RECOMMENDED USE', value: '0.5–2', unit: '%', sub: 'ใช้ได้กับสูตรน้ำทุกประเภท' },
];

const howItWorks = [
  {
    num: '01',
    title: 'Bio-adhesive เกาะผิว',
    desc: 'อนุภาคนาโน ELA เกาะติดผิวหนังสัตว์เลี้ยงอย่างมีประสิทธิภาพ ออกฤทธิ์ได้ยาวนานกว่า 24 ชั่วโมง',
  },
  {
    num: '02',
    title: 'ทำลายเยื่อหุ้มเซลล์แบคทีเรีย',
    desc: 'กลไก Physical disruption ไม่ใช้ยาปฏิชีวนะ จึงไม่ก่อการดื้อยา (Non-inducible resistance)',
  },
  {
    num: '03',
    title: 'ย่อยสลายได้ทางชีวภาพ',
    desc: 'ไม่สะสมในสิ่งแวดล้อม ไม่เป็นพิษต่อสัตว์น้ำ — แนวทาง Green Chemistry',
  },
];

const coverage = [
  { name: 'MRSP / MSSP', sub: 'แบคทีเรียเดี่ยงยาในสัตว์เลี้ยง' },
  { name: 'Pseudomonas / E.coli', sub: 'แบคทีเรีย Gram-negative' },
  { name: 'Malassezia', sub: 'ยีสต์สาเหตุอาการคัน' },
  { name: 'Molds & Fungi', sub: 'เชื้อราวงกว้างสเปกตรัม' },
];

export default function ECOGUARDSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Technology 01</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            EcoGuard Plus™{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              สารต้านจุลชีพจากธรรมชาติ
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Sustainable Antimicrobial Nanoencapsulation · Derived from L-Arginine &amp; Lauric Acid · Bio-adhesive Nanoparticles
          </p>
        </motion.div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-50 aspect-[3/2] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img 
                src={ecoguardNano} 
                alt="EcoGuard Plus Nanoparticle Size Distribution" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-sm">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">LAB RESULT: DLS Analysis</span>
                </div>
              </div>
            </div>

            {/* 3×2 Specs grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-100">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-white px-5 py-4 hover:bg-slate-50 transition-colors duration-200">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{spec.label}</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {spec.value}
                    <span className="text-base font-bold text-cyan-600 ml-1">{spec.unit}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">{spec.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* How it works */}
            <div className="rounded-2xl border-2 border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">ทำงานอย่างไร?</span>
              </div>

              <div className="divide-y divide-slate-50">
                {howItWorks.map((item, idx) => (
                  <div key={idx} className="flex gap-4 px-6 py-5 hover:bg-slate-50 transition-colors duration-200">
                    <span className="text-[11px] font-black text-slate-300 shrink-0 mt-0.5 w-5">{item.num}</span>
                    <div>
                      <div className="font-black text-slate-900 text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Broad Spectrum Coverage */}
            <div className="rounded-2xl border-2 border-slate-100 overflow-hidden">
              <div className="px-6 py-3 border-b-2 border-slate-100">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Broad Spectrum Coverage</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-slate-100">
                {coverage.map((item, idx) => (
                  <div key={idx} className="bg-white px-5 py-4 hover:bg-cyan-50 transition-colors duration-200 group">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={13} className="text-cyan-500 shrink-0" />
                      <span className="font-black text-slate-800 text-sm group-hover:text-cyan-700 transition-colors">{item.name}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pl-5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approval badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'FDA Approved', sub: 'EcoGuard Plus · USA', from: 'from-cyan-500', to: 'to-blue-500' },
                { label: 'EFSA Approved', sub: 'EcoGuard Plus · EU', from: 'from-fuchsia-500', to: 'to-violet-500' },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl bg-gradient-to-br ${badge.from} ${badge.to} p-px`}
                >
                  <div className="rounded-2xl bg-white px-5 py-4 text-center h-full">
                    <CheckCircle2 size={18} className="text-cyan-500 mx-auto mb-2" />
                    <div className="font-black text-slate-900 text-sm">✓ {badge.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
