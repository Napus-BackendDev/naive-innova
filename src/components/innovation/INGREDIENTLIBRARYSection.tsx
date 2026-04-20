import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Leaf, Droplets, ShieldCheck, Pencil, Check, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Leaf,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    dotColor: 'bg-emerald-400',
    title: 'สมุนไพรและพืชสกัด',
    items: [
      { name: 'Chamomilla Extract', desc: 'บรรเทาคัน ลดอักเสบ' },
      { name: 'Centella Asiatica', desc: 'ซ่อมแซมผิว สร้างคอลลาเจน' },
      { name: 'Turmeric Extract', desc: 'ต้านเชื้อรา ลดอักเสบ' },
      { name: 'Mangosteen Extract', desc: 'Xanthone สูง ต้าน Free Radical' },
      { name: 'Coffee Cherry', desc: 'Antioxidant บำรุงผิว' },
      { name: 'Houttuynia Cordata', desc: 'ต้านแบคทีเรีย ไวรัส' },
      { name: 'Chamomile Distillate', desc: 'ปลอบประโลม ลดระคายเคือง' },
      { name: '+ อีก 30+ ชนิด', desc: 'แหล่งสมุนไพรไทยและสากล', extra: true },
    ],
  },
  {
    icon: Droplets,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-100',
    dotColor: 'bg-cyan-400',
    title: 'น้ำมันและ Active Ingredients',
    items: [
      { name: 'Lavender Oil', desc: 'กลิ่นหอม ต้านแบคทีเรีย' },
      { name: 'Tea Tree Oil (Nano)', desc: 'Antifungal จากธรรมชาติ' },
      { name: 'Jojoba Oil', desc: 'ใกล้เคียง Sebum ปรับสมดุลผิว' },
      { name: 'Rosehip Oil', desc: 'Vitamin C สูง ฟื้นฟูผิว' },
      { name: 'Milk Oil', desc: 'บำรุงผิว ให้ความชุ่มชื้น' },
      { name: 'Hyaluronic Acid (Nano)', desc: 'Moist-Healing 72h system' },
      { name: 'Nano Silk Protein', desc: 'เคลือบขน ลดการแตกหัก' },
      { name: '+ อีก 40+ ชนิด', desc: 'Oil-based และ Water-based', extra: true },
    ],
  },
  {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    dotColor: 'bg-blue-400',
    title: 'ระบบต้านเชื้อและปกป้อง',
    items: [
      { name: 'EcoGuard Plus™', desc: 'Core — ทุกสูตร Broad-spectrum' },
      { name: 'Nano Encapsulation Shell', desc: 'ห่อหุ้มสารสำคัญ 84 nm' },
      { name: 'SNEDDS System', desc: 'นำน้ำมันเข้าสูตรน้ำ' },
      { name: 'Water-Repellent Nano Coat', desc: 'เคลือบกันน้ำสำหรับ Powder' },
      { name: 'Bio-adhesive Agent', desc: 'ยึดเกาะผิวยาวนาน >24h' },
      { name: 'Natural Cleansing Base', desc: 'ปลอดภัย ไม่มี SLS/SLES' },
      { name: 'Food-Grade Carrier', desc: 'Biodegradable ย่อยสลายได้' },
      { name: '+ อีก 20+ ระบบ', desc: 'สำหรับ Custom Formula', extra: true },
    ],
  },
];

const ctaChecks = [
  'เลือกสารสกัดได้จากคลัง 100+ ชนิด',
  'ปรับสูตรภายใน 5–7 วัน',
  'ได้สูตรที่คู่แข่งเลียนแบบไม่ได้',
  'MOQ เริ่มต้น 100 ชิ้น',
];

export default function INGREDIENTLIBRARYSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Ingredient Library</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            คลังสารสกัดกว่า{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              100+ ชนิด
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-2xl leading-relaxed">
            เลือกผสมได้ตามโจทย์แบรนด์ของคุณ — ทีม R&amp;D จะช่วยออกแบบสูตรเฉพาะที่คู่แข่งเลียนแบบไม่ได้
          </p>
        </motion.div>

        {/* 2×2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* 3 category cards */}
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <div className="h-full bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-md transition-all duration-300">
                {/* Card header */}
                <div className={`flex items-center gap-3 px-6 py-4 border-b-2 border-slate-100 ${cat.bgColor}`}>
                  <cat.icon size={18} className={cat.color} strokeWidth={2} />
                  <span className={`text-sm font-black ${cat.color}`}>{cat.title}</span>
                </div>

                {/* Items list */}
                <div className="divide-y divide-slate-50">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`flex items-start gap-3 px-6 py-3 hover:bg-slate-50 transition-colors duration-150 ${item.extra ? 'opacity-60' : ''}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${cat.dotColor} shrink-0 mt-2`} />
                      <div className="flex flex-1 gap-3 min-w-0">
                        <span className={`text-sm font-black text-slate-800 shrink-0 ${item.extra ? 'italic' : ''}`}>
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium truncate self-center">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card — dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="h-full rounded-2xl bg-slate-900 overflow-hidden relative flex flex-col">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-fuchsia-900/20 pointer-events-none" />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-6">
                  <Pencil size={16} className="text-cyan-400" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">ต้องการสูตรเฉพาะ?</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                  ทีม R&amp;D ของเราพร้อมพัฒนาสูตรใหม่จากศูนย์ร่วมกับคุณ ตั้งแต่โจทย์ปัญหาลูกค้า สู่สูตรที่{' '}
                  <span className="text-white font-bold">validate</span> แล้วในห้องปฏิบัติการมาตรฐาน
                </p>

                {/* Checklist */}
                <ul className="space-y-3 mb-10 flex-1">
                  {ctaChecks.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check size={14} className="text-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-black normal-case py-3 rounded-xl text-sm shadow-lg"
                    endIcon={<ArrowRight size={16} />}
                  >
                    ดู Custom Formula
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    className="border border-white/20 text-white hover:bg-white/10 font-bold normal-case py-3 rounded-xl text-sm"
                  >
                    ปรึกษา R&amp;D ฟรี 1-on-1
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
