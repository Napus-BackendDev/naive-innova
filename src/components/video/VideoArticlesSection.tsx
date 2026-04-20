import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, PlayCircle, ArrowRight, Youtube, Smartphone } from 'lucide-react';
import { youtubeShorts } from '../../config/videos';

// ── YouTube Videos ──
const youtubeVideos = [
  { id: 'yt1', title: 'Nano Lab Tour เชียงราย — เบื้องหลังก่อนสินค้าออกจากโรงงาน', duration: '12:34', views: '4.2K', date: 'Mar 2026', tag: 'Factory Tour' },
  { id: 'yt2', title: 'EcoGuard Plus™ คืออะไร? วิทยาศาสตร์เบื้องหลังสารต้านจุลชีพ', duration: '8:17', views: '6.8K', date: 'Mar 2026', tag: 'นวัตกรรม' },
  { id: 'yt3', title: 'ขั้นตอนการสร้างแบรนด์ Pet Care จากศูนย์ ด้วยงบไม่เกิน 50,000', duration: '15:02', views: '12.1K', date: 'Feb 2026', tag: 'แบรนด์' },
  { id: 'yt4', title: 'Nano Encapsulation ทำงานอย่างไร? อธิบาย 84 นาโนเมตรให้เข้าใจ', duration: '10:45', views: '3.9K', date: 'Feb 2026', tag: 'วิทยาศาสตร์' },
  { id: 'yt5', title: 'สมุนไพรไทย 8 ชนิดที่เราใช้ในสูตร — คัดสรรแบบไหน?', duration: '9:28', views: '5.5K', date: 'Jan 2026', tag: 'สมุนไพร' },
  { id: 'yt6', title: 'MOQ 100 ชิ้น คุ้มไหม? วิเคราะห์ต้นทุน OEM สัตว์เลี้ยง', duration: '11:03', views: '7.3K', date: 'Jan 2026', tag: 'ธุรกิจ' },
  { id: 'yt7', title: 'FDA กับ EFSA ต่างกันอย่างไร? และทำไมต้องมีทั้งคู่', duration: '7:55', views: '2.8K', date: 'Dec 2025', tag: 'มาตรฐาน' },
  { id: 'yt8', title: 'ทดสอบสูตรจริงใน Lab ม.เกษตรศาสตร์ — กระบวนการเต็มๆ', duration: '18:22', views: '9.1K', date: 'Dec 2025', tag: 'วิจัย' },
];

// ── Shorts ──
const shorts = youtubeShorts.map(s => ({
  ...s,
  views: '24K+', // Placeholder views since we don't have them in config
  date: '2024'
}));

const VISIBLE_DEFAULT = 4;

function YouTubeCard({ video, idx }: { video: typeof youtubeVideos[0]; idx: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative aspect-video rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-slate-900 block"
    >
      {/* Thumbnail placeholder */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(255,255,255,0.025)_12px,rgba(255,255,255,0.025)_24px)] opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0" />

      {/* Play Overlay */}
      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-500 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-red-500 transition-all duration-500 scale-90 group-hover:scale-100">
          <Play size={24} fill="currentColor" className="ml-1" />
        </div>
      </div>

      {/* Duration badge */}
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-[11px] font-bold">
        {video.duration}
      </div>

      {/* Category tag */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-cyan-500/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider">
        {video.tag}
      </div>

      {/* Hover label */}
      <div className="absolute bottom-3 left-4">
        <p className="text-white/0 group-hover:text-white/80 font-black uppercase tracking-[0.25em] text-[9px] transition-all duration-500">
          WATCH ON YOUTUBE
        </p>
      </div>

      {/* Title on hover */}
      <div className="absolute inset-x-0 bottom-0 p-4 pt-10 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-xs font-bold leading-snug line-clamp-2">{video.title}</p>
        <p className="text-white/50 text-[10px] mt-1">{video.views} views · {video.date}</p>
      </div>
    </motion.a>
  );
}

function ShortCard({ short, idx }: { short: typeof shorts[0]; idx: number }) {
  return (
    <motion.a
      key={short.id}
      href={(short as any).url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative aspect-[9/16] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-slate-900"
    >
      {/* Fallback/Base Thumbnail Image */}
      <img
        src={(short as any).thumbnail}
        alt={`Shorts ${short.id}`}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0"
      />

      {/* Background Video with Poster */}
      {(short as any).videoSrc && (
        <video
          src={(short as any).videoSrc}
          poster={(short as any).thumbnail}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-0 group-hover:opacity-100"
        />
      )}

      {/* Play Overlay */}
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-cyan-600 transition-all duration-500 scale-90 group-hover:scale-100">
          <Play size={24} fill="currentColor" />
        </div>
      </div>

      {/* Vertical Text Accent */}
      <div className="absolute bottom-6 left-6">
        <Typography variant="caption" className="text-white/70 font-bold uppercase tracking-[0.3em] text-[10px] hidden group-hover:block transition-all animate-pulse">
          WATCH ON SHORTS
        </Typography>
      </div>
    </motion.a>
  );
}

export default function VideoArticlesSection() {
  const [showAllYT, setShowAllYT] = useState(false);
  const [showAllShorts, setShowAllShorts] = useState(false);

  const visibleYT = showAllYT ? youtubeVideos : youtubeVideos.slice(0, VISIBLE_DEFAULT);
  const visibleShorts = showAllShorts ? shorts : shorts.slice(0, VISIBLE_DEFAULT);

  return (
    <div className="bg-slate-50">

      {/* ── YouTube Section ── */}
      <section className="py-20">
        <Container maxWidth="lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                <Youtube size={20} className="text-white" />
              </div>
              <div>
                <Typography variant="h5" className="font-black text-slate-900 text-xl tracking-tight leading-none mb-0.5">
                  วิดีโอแนะนำ
                </Typography>
                <p className="text-xs text-slate-400 font-medium">เรื่องราวและนวัตกรรมเบื้องหลัง Naive Innova</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@NaiveInnova-OEM%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87Nano/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors duration-200"
            >
              ดูทั้งหมดใน YouTube <ArrowRight size={13} />
            </a>
          </div>

          {/* Featured Full Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black mb-12 border-8 border-white"
          >
            <iframe
              src="https://www.youtube.com/embed/ULwSPd5B27I?rel=0&modestbranding=1"
              title="Naive Innova"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto max-w-5xl" />

      {/* ── Shorts Section ── */}
      <section className="py-20">
        <Container maxWidth="lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center shadow-lg shadow-fuchsia-200">
                <Smartphone size={18} className="text-white" />
              </div>
              <div>
                <Typography variant="h5" className="font-black text-slate-900 text-xl tracking-tight leading-none mb-0.5">
                  วิดีโอ Shorts
                </Typography>
                <p className="text-xs text-slate-400 font-medium">{shorts.length} คลิป</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-fuchsia-600 transition-colors duration-200"
            >
              ดูใน Shorts <ArrowRight size={13} />
            </a>
          </div>

          {/* 2×3 Grid — portrait cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {visibleShorts.map((s, idx) => (
              <ShortCard key={s.id} short={s} idx={idx} />
            ))}
          </div>

          {/* Load more */}
          {shorts.length > VISIBLE_DEFAULT && (
            <div className="flex justify-center">
              <Button
                variant="outlined"
                onClick={() => setShowAllShorts(!showAllShorts)}
                className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold normal-case text-sm px-8 py-3 rounded-xl"
                endIcon={<ArrowRight size={15} />}
              >
                {showAllShorts ? 'แสดงน้อยลง' : `ดูเพิ่มเติม (${shorts.length - VISIBLE_DEFAULT} คลิป)`}
              </Button>
            </div>
          )}
        </Container>
      </section>

    </div>
  );
}
