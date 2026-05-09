import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

const takeaways = [
  {
    icon: CheckCircle2,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    text: 'งานวิจัยที่อยู่ในมหาวิทยาลัยสามารถแปลงเป็นธุรกิจได้จริง หากมีระบบรองรับที่เหมาะสม เช่น Holding Company และกฎระเบียบที่ยืดหยุ่น',
  },
  {
    icon: CheckCircle2,
    color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
    text: 'การมีเทคโนโลยีที่พิสูจน์ได้ (เช่น Nano Encapsulation, EcoGuard Plus™) คือปัจจัยความสำเร็จที่แบรนด์รายใหม่ต้องการ ไม่ใช่แค่ดีไซน์ที่สวยงาม',
  },
  {
    icon: CheckCircle2,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    text: 'เส้นทางสปินออฟไม่ต้องเริ่มต้นด้วยงบมหาศาล MOQ ต่ำช่วยให้ SME ทดสอบตลาดได้โดยไม่รับความเสี่ยงสูง',
  },
  {
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    text: 'การสร้างเครือข่ายกับภาคอุตสาหกรรมตั้งแต่เริ่มต้น เช่น การเชิญทีม R&D จากบริษัทพาร์ทเนอร์มาศึกษาดูงาน ช่วยเร่งการเติบโตของธุรกิจได้อย่างมีนัยสำคัญ',
  },
  {
    icon: CheckCircle2,
    color: 'text-orange-600 bg-orange-50 border-orange-100',
    text: 'ตลาด Pet Care ในไทยยังมีช่องว่างสำหรับแบรนด์ที่มีนวัตกรรมจากธรรมชาติและมีข้อมูลวิทยาศาสตร์รองรับ',
  },
];

export default function DetailKeyTakeaways() {
  return (
    <section className="py-14 bg-slate-50">
      <Container maxWidth="lg">
        <div>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Lightbulb size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                Summary
              </p>
              <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                Key Takeaways
              </h2>
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm"
          >
            {/* Top gradient strip */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400" />

            <div className="p-7 space-y-4">
              {takeaways.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.07 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110 ${item.color}`}>
                    <item.icon size={14} />
                  </div>

                  {/* Text */}
                  <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
