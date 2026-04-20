import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Import herb images
import chamomileImg from '../../assets/herbs/chamomile.png';
import turmericImg from '../../assets/herbs/turmeric.png';
import centellaImg from '../../assets/herbs/centella.png';
import mangosteenImg from '../../assets/herbs/mangosteen.png';
import teaTreeImg from '../../assets/herbs/tea-tree.png';
import lavenderImg from '../../assets/herbs/lavender.png';
import coffeeCherryImg from '../../assets/herbs/coffee-cherry.png';
import houttuyniaImg from '../../assets/herbs/houttuynia.png';

const herbs = [
  {
    image: chamomileImg,
    name: 'คาโมมาย',
    latin: 'Chamomilla Extract',
    desc: 'บรรเทาอาการคันและลดการอักเสบของผิวหนัง ปลอบประโลมผิวเแพ้ง่าย',
    tags: ['Anti-inflammatory', 'Soothing'],
  },
  {
    image: turmericImg,
    name: 'ขมิ้นชัน',
    latin: 'Turmeric Extract',
    desc: 'ลดการอักเสบจากเชื้อรา บรรเทาอาการคันเรื้อรัง มีฤทธิ์ต้านอนุมูลอิสระ',
    tags: ['Antifungal', 'Anti-ox'],
  },
  {
    image: centellaImg,
    name: 'บัวบก',
    latin: 'Centella Asiatica (ECA233)',
    desc: 'กระตุ้นการสร้างคอลลาเจนและซ่อมแซมผิว ปลอมประโลม ลดรอยแดง',
    tags: ['Wound Healing', 'Collagen'],
  },
  {
    image: mangosteenImg,
    name: 'มังคุด',
    latin: 'Mangosteen Extract',
    desc: 'Xanthone สูง ต้านอนุมูลอิสระ ช่วยลดการอักเสบและบำรุงผิวหนัง',
    tags: ['Xanthone', 'Anti-ox'],
  },
  {
    image: teaTreeImg,
    name: 'ที กรี ออยล์',
    latin: 'Tea Tree Oil (Nano)',
    desc: 'ฤทธิ์ Antifungal จากธรรมชาติ เสริมฤทธิ์ EcoGuard Plus ในสูตรสเปรย์เชื้อรา',
    tags: ['Antifungal', 'Natural'],
  },
  {
    image: lavenderImg,
    name: 'ลาเวนเดอร์',
    latin: 'Lavender Oil',
    desc: 'กลิ่นหอมผ่อนคลาย มีคุณสมบัติต้านแบคทีเรียอ่อนๆ',
    tags: ['Aromatherapy', 'Antibacterial'],
  },
  {
    image: coffeeCherryImg,
    name: 'คอฟฟี่ เชอร์รี่',
    latin: 'Coffee Cherry Extract',
    desc: 'สารต้านอนุมูลอิสระสูงจากผลกาแฟ ช่วยบำรุงผิวและลดริ้วรอย',
    tags: ['Antioxidant', 'Skin Care'],
  },
  {
    image: houttuyniaImg,
    name: 'พลูคาว',
    latin: 'Houttuynia Cordata',
    desc: 'ต้านการติดเชื้อแบคทีเรียและไวรัส ลดการอักเสบ เร่งจิ้วของผิวหนัง',
    tags: ['Antibacterial', 'Antiviral'],
  },
];

export default function HERBALCOMPLEXSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-[130px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Technology 03</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Herbal Active Complex{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              สมุนไพรธรรมชาติพรีเมียม
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-3xl leading-relaxed mx-auto md:mx-0">
            เราคัดเลือกสมุนไพรสารสกัดเข้มข้นจากแหล่งปลูกออร์แกนิคที่ได้มาตรฐาน นำมาผ่านกระบวนการ Nano-Encapsulation เพื่อเพิ่มประสิทธิภาพการดูดซึมและออกฤทธิ์สูงสุดในทุกสูตรผลิตภัณฑ์
          </p>
        </motion.div>

        {/* 4×2 Herb grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {herbs.map((herb, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group"
            >
              <div className="h-full bg-white border border-slate-100 rounded-[2.5rem] p-4 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex flex-col">

                {/* Image Area */}
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-slate-50 flex items-center justify-center">
                  <img 
                    src={herb.image} 
                    alt={herb.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>

                {/* Name */}
                <div className="px-2">
                  <Typography variant="h6" className="text-base font-black text-slate-900 mb-1 leading-tight group-hover:text-emerald-700 transition-colors">
                    {herb.name}
                  </Typography>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 h-8 overflow-hidden">
                    {herb.latin}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {herb.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pb-2">
                    {herb.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-black uppercase tracking-wider text-slate-500 group-hover:bg-emerald-50 group-hover:border-emerald-100 group-hover:text-emerald-600 transition-all duration-300"
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

      </Container>
    </section>
  );
}
