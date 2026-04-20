import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import nanotechEncap from '../../assets/innovation/nanotech-encap.png';

const specs = [
  { label: 'ขนาดอนุภาค', value: '84', unit: 'nm', sub: 'เล็กกว่าเซลล์ผิวหนัง ~100 เท่า' },
  { label: 'การซึมผ่าน', value: '↑ 3–5', unit: '×', sub: 'เทียบกับสารอิสระที่ไม่ห่อหุ้ม' },
  { label: 'ความคงตัว', value: '24', unit: 'เดือน', sub: 'ที่อุณหภูมิห้อง 15–30°C' },
  { label: 'PARTICLE CONCENTRATION', value: '1.8E', unit: '+13', sub: 'อนุภาค/mL สม่ำเสมอสูง' },
];

const benefits = [
  {
    num: '01',
    title: 'เพิ่มการซึมผ่านผิวหนัง',
    desc: 'ขนาดนาโนช่วยให้สารผ่านชั้น Stratum Corneum ได้ง่าย ส่งฤทธิ์ถึงชั้น Dermis',
  },
  {
    num: '02',
    title: 'Controlled Release',
    desc: 'ปลดปล่อยสารช้าๆ อย่างสม่ำเสมอ ทำให้ออกฤทธิ์ต่อเนื่องยาวนานกว่า',
  },
  {
    num: '03',
    title: 'เพิ่มความคงตัวของสูตร',
    desc: 'ปกป้องสารสำคัญจากแสง ความร้อน และการเกิด Oxidation ยืดอายุผลิตภัณฑ์',
  },
  {
    num: '04',
    title: 'ลด Irritation',
    desc: 'ห่อหุ้มสารที่อาจะระคายเคืองให้อ่อนโยนขึ้น เหมาะกับสัตว์ผิวบอบบาง',
  },
];

export default function NANOTECHSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Technology 02</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Nano Encapsulation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500">
              ส่งสารออกฤทธิ์ถึงระดับเซลล์
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-2xl leading-relaxed">
            การห่อหุ้มสารสำคัญในระดับนาโน (84 nm) ทำให้สารซึมผ่านผิวได้ดีขึ้น ออกฤทธิ์แม่นยำกว่า และมีความคงตัวสูงกว่าการใช้สารอิสระทั่วไป
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
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 bg-white aspect-[3/2] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <img 
                src={nanotechEncap} 
                alt="Nano Encapsulation Comparison - Standard vs Nano" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-sm">
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">LAB RECORD: System Comparison</span>
                </div>
              </div>
            </div>

            {/* SNEDDS box */}
            <div className="rounded-2xl border-2 border-blue-100 bg-white px-6 py-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-black text-slate-900">SNEDDS Nano System</span>
                {' '}(Self-Nano Emulsifying Drug Delivery System) — ใช้ในสูตรแชมพูออยล์และผลิตภัณฑ์ Oil-based เพื่อนำน้ำมันธรรมชาติเข้าสู่เส้นขน ซึมไว ไม่เหนียวเขาอาหนะ
              </p>
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
            {/* 2×2 Specs grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border-2 border-slate-200">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-white px-5 py-5 hover:bg-blue-50/30 transition-colors duration-200">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{spec.label}</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {spec.value}
                    <span className="text-base font-bold text-blue-600 ml-1">{spec.unit}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">{spec.sub}</div>
                </div>
              ))}
            </div>

            {/* 4 Benefits */}
            <div className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-white">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">4 ประโยชน์หลัก</span>
              </div>

              <div className="divide-y divide-slate-100">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex gap-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-200">
                    <span className="text-[11px] font-black text-slate-300 shrink-0 mt-0.5 w-5">{item.num}</span>
                    <div>
                      <div className="font-black text-slate-900 text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
