import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MessageSquare, FlaskConical, TestTube, Palette, Factory, Truck, Clock, DollarSign } from 'lucide-react';
import { contactButtons } from '../../config/services';

const steps = [
  {
    num: '01',
    badge: 'Consultation',
    icon: MessageSquare,
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    lightBorder: 'border-cyan-100',
    title: 'ปรึกษาและ วางกลยุทธ์',
    subtitle: 'นัดคุยกับทีมเพื่อเข้าใจ Vision ของแบรนด์คุณ พร้อมคำแนะนำด้านการตลาด การวางตำแหน่ง และช่วยประเมินงบประมาณให้ชัดเจน ไม่ต้องเริ่มจากศูนย์',
    items: [
      'นัดคุยฟรี — ผ่าน LINE, โทรศัพท์ หรือเข้าโรงงาน',
      'ประเมินงบสร้างแบรนด์ฟรี — บอกงบที่มี เราวางแผนให้',
      'ให้คำแนะนำด้าน Product-Market Fit และโพสิชันนิ่งแบรนด์',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลา', value: '1 วัน' }, { icon: DollarSign, label: 'ค่าใช้จ่าย', value: 'ฟรี' }],
  },
  {
    num: '02',
    badge: 'Formulation',
    icon: FlaskConical,
    color: 'from-fuchsia-500 to-fuchsia-600',
    lightBg: 'bg-fuchsia-50',
    lightText: 'text-fuchsia-600',
    lightBorder: 'border-fuchsia-100',
    title: 'เลือกหรือ พัฒนาสูตร',
    subtitle: 'เลือกจาก Nano Ingredient Library กว่า 50 สูตร ที่ validated แล้ว หรือให้ทีม R&D พัฒนาสูตรใหม่เฉพาะคุณ หากคุณมีสูตรเดิมอยู่แล้ว เราช่วย Nano-upgrade เพื่อยกระดับประสิทธิภาพ',
    items: [
      'Nano-Encapsulation 84 นาโนเมตร — สารซึมลึก ออกฤทธิ์นานขึ้น',
      'EcoGuard Plus — สารฆ่าเชื้อจาก FDA USA + EFSA EU',
      'วัตถุดิบสมุนไพรเหนือ: ดอยคาโมมาย มังคุด ขมิ้นชัน',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลา', value: '5–7 วัน' }, { icon: FlaskConical, label: 'สูตรพร้อมใช้', value: '50+' }],
  },
  {
    num: '03',
    badge: 'Testing',
    icon: TestTube,
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    lightBorder: 'border-blue-100',
    title: 'ทดสอบกับ สัตว์เลี้ยงจริง',
    subtitle: 'รับ Sample Kit ไปทดสอบกับสัตว์เลี้ยงของคุณหรือลูกค้าก่อนตัดสินใจผลิตเต็มลอต ทุกสูตรผ่านการทดสอบทางห้องแล็บแล้ว ทั้ง Challenge Test (ม.เกษตรฯ) และ Clinical Test (คลินิกสัตวแพทย์พาร์ทเนอร์)',
    items: [
      'Sample Kit ฟรี — ไม่มีข้อผูกมัด',
      'ทดสอบ MRSP, Pseudomonas, E.coli, Malassezia แล้ว',
      'ปรับแต่งกลิ่น สี สัมผัส หลังทดสอบได้',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลา', value: '5–7 วัน' }, { icon: DollarSign, label: 'Sample', value: 'ฟรี' }],
  },
  {
    num: '04',
    badge: 'Design & Regulatory',
    icon: Palette,
    color: 'from-orange-500 to-orange-600',
    lightBg: 'bg-orange-50',
    lightText: 'text-orange-600',
    lightBorder: 'border-orange-100',
    title: 'ออกแบบและ จัดการเอกสาร',
    subtitle: 'มีไฟล์ Artwork อยู่แล้ว? ส่งมาพิมพ์ได้เลย หรือถ้ายังไม่มี — เรามีทีมออกแบบช่วยสร้างอัตลักษณ์แบรนด์ในราคาเป็นมิตร SME พร้อมดูแลเรื่องเอกสารให้ครบถ้วน',
    items: [
      'Logo, Packaging, Label — บริการเสริมราคา SME-friendly',
      'ไม่ต้องขึ้นทะเบียน — ผลิตเสร็จ พร้อมขายทันที',
      'ขนาดบรรจุภัณฑ์ปรับได้หลายขนาด ตามกลยุทธ์แบรนด์',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลา', value: '7–10 วัน' }, { icon: Clock, label: 'ทำคู่ขนาน', value: 'กับขั้น 5' }],
  },
  {
    num: '05',
    badge: 'Manufacturing',
    icon: Factory,
    color: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    lightBorder: 'border-emerald-100',
    title: 'ผลิตจริงที่ โรงงานเชียงราย',
    subtitle: 'เริ่มผลิตที่ MOQ 100 ชิ้น — เราสนับสนุน SME ให้เริ่มต้นได้ไม่ยาก มีระบบ QA/QC ควบคุมคุณภาพทุกขั้นตอน ใบอนุญาตผลิตจากสำนักงานสาธารณสุขจังหวัดครบถ้วน',
    items: [
      'MOQ 100 ชิ้น — สั่งยิ่งเยอะ ยิ่งถูก (500/1,000/2,000+ ลดราคาต่อหน่วย)',
      'ยิง Lot ฟรี · ซีลพลาสติกฟรี ทุกยอดสั่งผลิต',
      'มัดจำ 50% เริ่มผลิต · ส่วนที่เหลือก่อนจัดส่ง',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลา', value: '15–20 วันทำการ' }, { icon: Factory, label: 'MOQ', value: '100 ชิ้น' }],
  },
  {
    num: '06',
    badge: 'Delivery',
    icon: Truck,
    color: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-600',
    lightBorder: 'border-violet-100',
    title: 'จัดส่ง พร้อมวางขาย',
    subtitle: 'ส่งสินค้าทั่วประเทศผ่านบริษัทขนส่งเอกชน พร้อมวางจำหน่ายได้ทันที — ไม่ต้องรอเอกสาร ไม่ต้องขึ้นทะเบียน เริ่มทำตลาดได้เลย',
    items: [
      'กรุงเทพ+ปริมณฑล: 1–2 วัน',
      'ต่างจังหวัด: 2–4 วัน',
      'ราคายังไม่รวม VAT 7% และค่าขนส่ง',
    ],
    meta: [{ icon: Clock, label: 'ระยะเวลารวม', value: '30–45 วัน' }, { icon: Truck, label: 'เทียบตลาด', value: 'OEM ทั่วไป 60–90 วัน' }],
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Deep Dive</span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              รายละเอียด <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">แต่ละขั้นตอน</span>
            </Typography>
          </motion.div>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <div className="h-full bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Card top gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`} />

                <div className="p-8">
                  {/* Step number + badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[44px] font-black text-slate-100 leading-none select-none">
                      {step.num}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${step.lightBg} ${step.lightText} border ${step.lightBorder}`}>
                      {step.badge}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      <step.icon size={22} strokeWidth={1.75} />
                    </div>
                    <Typography variant="h5" className="text-xl font-black text-slate-900 leading-snug tracking-tight">
                      {step.title}
                    </Typography>
                  </div>

                  {/* Subtitle */}
                  <Typography variant="body2" className="text-slate-500 text-sm leading-relaxed mb-6">
                    {step.subtitle}
                  </Typography>

                  {/* Content items */}
                  <ul className="space-y-2 mb-6">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${step.color}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta badges */}
                  <div className={`border-t ${step.lightBorder} pt-5 flex flex-wrap gap-3`}>
                    {step.meta.map((m, i) => (
                      <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${step.lightBg} border ${step.lightBorder}`}>
                        <m.icon size={13} className={step.lightText} />
                        <span className="text-[11px] font-bold text-slate-500">{m.label}:</span>
                        <span className={`text-[11px] font-black ${step.lightText}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {contactButtons.map((btn) => (
            <motion.a
              key={btn.id}
              href={btn.href}
              target={btn.target}
              rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
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
      </div>
    </section>
  );
}
