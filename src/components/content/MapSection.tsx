import { Container, Typography } from '@mui/material';
import { MapPin, Plane, Bus, Car, ExternalLink, Copy } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 bg-white relative">
      <Container maxWidth="lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <MapPin size={20} className="text-fuchsia-600" />
          <Typography variant="h5" className="font-black text-slate-800 tracking-tight">
            แผนที่โรงงาน · Naive Innova เชียงราย
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* ── Left: Map Area ── */}
          <div className="flex flex-col gap-4">
            {/* Map Placeholder */}
            <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[400px] border-2 border-slate-900 bg-slate-100 overflow-hidden shadow-[4px_4px_0_rgba(15,23,42,1)]">
              <iframe
                src="https://www.google.com/maps?q=บริษัท+นาอีฟอินโนว่า+จำกัด+Naive+Innova&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B8%9F%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%99%E0%B8%A7%E0%B9%88%E0%B8%B2+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+Naive+Innova/@19.6835782,99.7325789,17z/data=!3m1!4b1!4m6!3m5!1s0x30d773400764e151:0xd405ef5177d87264!8m2!3d19.6835782!4d99.7325789!16s%2Fg%2F11rk5gfbfb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-900 text-slate-900 text-xs font-black hover:bg-slate-50 transition-colors"
               >
                <ExternalLink size={14} />
                เปิดใน Google Maps
              </a>
              <button 
                onClick={() => navigator.clipboard.writeText('144/1 หมู่ 1 ต.สายเหนือ อ.พาน จ.เชียงราย 57120')}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-900 text-slate-900 text-xs font-black hover:bg-slate-50 transition-colors"
              >
                <Copy size={14} className="text-fuchsia-600" />
                คัดลอกที่อยู่
              </button>
            </div>
          </div>

          {/* ── Right: Info Sidebar ── */}
          <div className="flex flex-col gap-6">
            {/* Address Box */}
            <div className="bg-[#EFECE6] border-2 border-slate-900 p-6 shadow-[4px_4px_0_rgba(15,23,42,1)]">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">ที่อยู่</div>
              <div className="font-bold text-slate-800 text-sm leading-relaxed">
                144/1 หมู่ 1<br />
                ต.สายเหนือ อ.พาน<br />
                จ.เชียงราย 57120
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white border-2 border-slate-200 p-6">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">เวลาทำการ</div>

              <div className="space-y-4">
                <div>
                  <div className="font-black text-slate-800 text-xs mb-1">จันทร์ – ศุกร์</div>
                  <div className="text-slate-500 text-xs font-medium">09:00 – 17:30 น.</div>
                </div>
                <div>
                  <div className="font-black text-slate-800 text-xs mb-1">เสาร์</div>
                  <div className="text-slate-500 text-xs font-medium">09:00 – 12:00 น. (นัดล่วงหน้า)</div>
                </div>
                <div>
                  <div className="font-black text-slate-400 text-xs mb-1">อาทิตย์</div>
                  <div className="text-slate-400 text-xs font-medium">ปิดทำการ</div>
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="bg-white border-2 border-slate-200 p-6">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">เดินทางจาก</div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Car size={14} className="text-slate-800 shrink-0" />
                  <span>เชียงราย เมือง <span className="text-slate-300 mx-1">→</span> 45 นาที</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Plane size={14} className="text-cyan-600 shrink-0" />
                  <span>สนามบินเชียงราย <span className="text-slate-300 mx-1">→</span> 35 นาที</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Bus size={14} className="text-fuchsia-600 shrink-0" />
                  <span>ขนส่ง พาน <span className="text-slate-300 mx-1">→</span> 10 นาที</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
