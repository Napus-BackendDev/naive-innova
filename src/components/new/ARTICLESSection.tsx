import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ImageIcon, TrendingUp, Tag } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'นวัตกรรม',
    categoryColor: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    title: 'EcoGuard Plus™ ผ่านการทดสอบ MIC กับเชื้อ MRSP',
    desc: 'ผลการทดสอบจากม.เกษตรศาสตร์ยืนยันประสิทธิภาพการยับยั้ง MRSP ที่ความเข้มข้น ≤0.0977%',
    date: 'Mar 2026',
    readTime: '4 min read',
    tags: ['EcoGuard', 'Research'],
  },
  {
    id: 2,
    category: 'แบรนด์',
    categoryColor: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
    title: 'เปิดตัวแบรนด์ใหม่จาก SME ไทย สู่ชั้นวางสัตว์เลี้ยง',
    desc: 'เส้นทางของ SME รายย่อยที่เริ่มต้นด้วย MOQ 100 ชิ้น จนกลายเป็นแบรนด์ที่ขายได้จริงในตลาด',
    date: 'Feb 2026',
    readTime: '6 min read',
    tags: ['SME', 'Branding'],
  },
  {
    id: 3,
    category: 'กิจกรรม',
    categoryColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    title: 'Nano Lab Tour เชียงราย — เบื้องหลังก่อนสินค้าออกจากโรงงาน',
    desc: 'พาชมกระบวนการ Nano Encapsulation จริงในห้อง Lab มาตรฐาน GMP ที่ใช้ผลิตทุกสูตร',
    date: 'Feb 2026',
    readTime: '5 min read',
    tags: ['Factory Tour', 'Nano Lab'],
  },
  {
    id: 4,
    category: 'วิทยาศาสตร์',
    categoryColor: 'text-blue-600 bg-blue-50 border-blue-100',
    title: 'Herbal Active Complex กับการดูแลผิวสัตว์เลี้ยงอย่างยั่งยืน',
    desc: 'สำรวจสารสกัดสมุนไพรไทย 100+ ชนิดและวิธีที่เราคัดเลือกมาเพื่อประสิทธิภาพสูงสุด',
    date: 'Jan 2026',
    readTime: '7 min read',
    tags: ['Herbal', 'Science'],
  },
  {
    id: 5,
    category: 'นวัตกรรม',
    categoryColor: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    title: 'SNEDDS: ระบบนำน้ำมันธรรมชาติเข้าสูตรน้ำแบบนาโน',
    desc: 'เทคโนโลยีเบื้องหลังแชมพูสัตว์เลี้ยงที่ประสิทธิภาพสูงกว่าสูตรทั่วไป 3–5 เท่า',
    date: 'Jan 2026',
    readTime: '5 min read',
    tags: ['SNEDDS', 'Nano'],
  },
  {
    id: 6,
    category: 'แบรนด์',
    categoryColor: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
    title: 'ทำไม MOQ ต่ำถึงสำคัญสำหรับแบรนด์ Pet Care หน้าใหม่',
    desc: 'วิเคราะห์ต้นทุนและความเสี่ยงของการเริ่มต้น OEM สัตว์เลี้ยงในยุคที่ตลาดแข่งขันสูง',
    date: 'Dec 2025',
    readTime: '6 min read',
    tags: ['MOQ', 'Strategy'],
  },
];

const popular = [
  { num: '01', title: 'EcoGuard Plus™ กับการยับยั้ง MRSP', date: 'Mar 2026' },
  { num: '02', title: 'Nano Encapsulation คืออะไร?', date: 'Feb 2026' },
  { num: '03', title: 'วิธีเลือก OEM สัตว์เลี้ยงที่ดี', date: 'Jan 2026' },
  { num: '04', title: 'SME กับการสร้างแบรนด์ Pet Care', date: 'Jan 2026' },
];

const categories = [
  { label: 'นวัตกรรม', count: 12 },
  { label: 'แบรนด์', count: 8 },
  { label: 'กิจกรรม', count: 5 },
  { label: 'วิทยาศาสตร์', count: 9 },
  { label: 'ข่าวสาร', count: 6 },
  { label: 'สัตว์เลี้ยง', count: 14 },
];

export default function ARTICLESSection() {
  return (
    <section className="py-16 bg-slate-50">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* ── Left: Article Grid ── */}
          <div>
            {/* Section label */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-fuchsia-500" />
                <Typography variant="h5" className="font-black text-slate-900 text-lg tracking-tight">
                  บทความทั้งหมด
                </Typography>
              </div>
              <span className="text-xs font-bold text-slate-400">{articles.length} บทความ</span>
            </div>

            {/* 3-column card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {articles.map((article, idx) => (
                <motion.a
                  key={article.id}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group flex flex-col bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail placeholder */}
                  <div className="relative aspect-[16/9] bg-slate-50 flex items-center justify-center overflow-hidden border-b-2 border-slate-100">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(0,0,0,0.015)_8px,rgba(0,0,0,0.015)_16px)]" />
                    <ImageIcon size={24} className="text-slate-200 relative z-10" />
                  </div>

                  <div className="flex flex-col flex-1 p-5 gap-3">
                    {/* Category badge */}
                    <span className={`self-start px-2.5 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${article.categoryColor}`}>
                      {article.category}
                    </span>

                    {/* Title */}
                    <Typography variant="h6" className="text-sm font-black text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </Typography>

                    {/* Desc */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                      {article.desc}
                    </p>

                    {/* Tags + meta */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                      <div className="flex gap-1.5 flex-wrap">
                        {article.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-slate-300 shrink-0 ml-2">
                        <Clock size={10} />
                        <span className="text-[10px] font-medium">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Load more */}
            <div className="flex justify-center mt-10">
              <Button
                variant="outlined"
                className="border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold normal-case text-sm px-8 py-3 rounded-xl"
                endIcon={<ArrowRight size={15} />}
              >
                โหลดเพิ่มเติม
              </Button>
            </div>
          </div>

          {/* ── Right: Sidebar ── */}
          <aside className="flex flex-col gap-6 sticky top-24">

            {/* Popular posts */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b-2 border-slate-100">
                <TrendingUp size={15} className="text-cyan-600" />
                <span className="text-sm font-black text-slate-800">บทความยอดนิยม</span>
              </div>
              <div className="divide-y divide-slate-50">
                {popular.map((p, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition-colors duration-150 group"
                  >
                    <span className="text-xl font-black text-slate-100 shrink-0 leading-none group-hover:text-cyan-200 transition-colors">
                      {p.num}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-700 leading-snug group-hover:text-cyan-700 transition-colors mb-1">
                        {p.title}
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">{p.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b-2 border-slate-100">
                <Tag size={14} className="text-fuchsia-500" />
                <span className="text-sm font-black text-slate-800">หมวดหมู่</span>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-all duration-200 group"
                  >
                    <span className="text-xs font-bold text-slate-600 group-hover:text-cyan-700 transition-colors">
                      {cat.label}
                    </span>
                    <span className="text-[10px] font-black text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {cat.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </Container>
    </section>
  );
}
