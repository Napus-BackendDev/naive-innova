import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Leaf } from 'lucide-react';

const techs = [
  {
    num: '01',
    banger: 'Core · ใช้ในทุกสูตร',
    icon: ShieldCheck,
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    lightBorder: 'border-cyan-100',
    title: 'EcoGuard Plus™',
    content:
      'สารต้านจุลชีพจากธรรมชาติในรูปแบบนาโน (Ethyl Lauroyl Arginate HCl) ยับยั้งแบคทีเรีย เชื้อรา และยีสต์แบบ Broad-spectrum ไม่ก่อการดื้อยา ย่อยสลายได้ทางชีวภาพ',
    tags: ['FDA USA', 'EFSA EU', '24h+ Activity'],
  },
  {
    num: '02',
    banger: 'Delivery System',
    icon: Layers,
    color: 'from-blue-500 to-fuchsia-500',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    lightBorder: 'border-blue-100',
    title: 'Nano Encapsulation Technology',
    content:
      'ระบบห่อหุ้มสารสำคัญระดับนาโน ขนาดเฉลี่ย 84 นาโนเมตร เพิ่มการซึมผ่านผิว ควบคุมการปลดปล่อยสาร (Controlled Release) และยืดอายุการออกฤทธิ์ให้ยาวนาน',
    tags: ['84 nm', 'Controlled Release', 'PDI 0.232'],
  },
  {
    num: '03',
    banger: 'Natural · Thai Herbs',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    lightBorder: 'border-emerald-100',
    title: 'Herbal Active Complex',
    content:
      'ผสานสารสกัดสมุนไพรไทยพรีเมียมจากภาคเหนือ ไม่ว่าจะเป็น คาโมมาย ขมิ้นชัน พลูคาว มังคุด บัวบก และอื่นๆ ผ่านกระบวนการ Nano-Encapsulation เพื่อประสิทธิภาพสูงสุด',
    tags: ['100+ Active Ingredients', 'Thai Origin', 'Sustainable'],
  },
];

export default function CORETECHSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Core Technologies</span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              3 เทคโนโลยีที่ทำให้สูตร{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
                แตกต่างอย่างแท้จริง
              </span>
            </Typography>
            <Typography variant="body1" className="text-slate-500 text-lg leading-relaxed font-medium">
              ทุกผลิตภัณฑ์ของ Naive Innova ถูกออกแบบบนพื้นฐาน{' '}
              <span className="font-bold text-slate-700">SCIENCE × SAFETY × SUSTAINABILITY</span>{' '}
              ใช้เทคโนโลยีที่คู่แข่งเลียนแบบได้ยาก
            </Typography>
          </motion.div>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                {/* Top gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${tech.color}`} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Step + banger */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[52px] font-black text-slate-100 leading-none select-none">
                      {tech.num}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${tech.lightBg} ${tech.lightText} border ${tech.lightBorder}`}>
                      {tech.banger}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-5 min-h-[5rem]">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      <tech.icon size={22} strokeWidth={1.75} />
                    </div>
                    <Typography variant="h5" className="text-xl font-black text-slate-900 leading-snug tracking-tight">
                      {tech.title}
                    </Typography>
                  </div>

                  {/* Content */}
                  <Typography variant="body2" className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                    {tech.content}
                  </Typography>

                  {/* Tags */}
                  <div className={`border-t ${tech.lightBorder} pt-5 flex flex-wrap gap-2`}>
                    {tech.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg text-[11px] font-black ${tech.lightBg} ${tech.lightText} border ${tech.lightBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-50 to-fuchsia-500/10 border border-slate-200 px-10 py-8 overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/60 via-transparent to-fuchsia-50/60 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            {/* Quote */}
            <div className="flex-1">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Philosophy</div>
              <p className="text-slate-800 text-lg md:text-xl font-bold leading-relaxed">
                "ผลิตภัณฑ์สัตว์เลี้ยงที่ดี ต้องปลอดภัยก่อน แล้วจึงค่อยมีประสิทธิภาพ"
              </p>
            </div>

            {/* 4 pillars */}
            <div className="flex flex-wrap gap-3 md:shrink-0">
              {['Natural', 'Safe', 'Proven', 'Commercially Viable'].map((pillar, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-[12px] font-black uppercase tracking-widest shadow-sm"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
