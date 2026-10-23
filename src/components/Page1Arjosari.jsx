import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Hand } from 'lucide-react';

export default function Page1Arjosari() {
  // State untuk melacak persentase pencucian foto (0 - 100)
  const [developProgress, setDevelopProgress] = useState(0);
  const isDeveloped = developProgress >= 100;

  // Fungsi untuk menambah kecerahan foto saat diusap/disentuh
  const handleDevelop = () => {
    if (developProgress < 100) {
      setDevelopProgress((prev) => Math.min(prev + 4, 100));
    }
  };

  // Fungsi klik langsung jika user malas mengusap lama
  const handleQuickTap = () => {
    if (developProgress < 100) {
      setDevelopProgress((prev) => Math.min(prev + 20, 100));
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-2 py-1 pb-3 sm:pb-2 relative">
      
      {/* Header Halaman & Stiker Draggable */}
      <div className="flex justify-between items-start z-20 shrink-0">
        <div>
          <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent">
            Chapter 01 • The Beginning
          </span>
          <h2 className="font-caveat text-2xl sm:text-3xl font-bold text-ink leading-tight">
            Did U Still Remember This?
          </h2>
        </div>

        {/* Stiker Lokasi yang Bisa Di-drag */}
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 20, top: 0, bottom: 200 }}
          whileDrag={{ scale: 1.1, rotate: 5 }}
          className="cursor-grab active:cursor-grabbing bg-[#e8dccb] border border-[#cbb89d] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm flex items-center gap-1.5 rotate-6 shrink-0"
          title="Geser aku!"
        >
          <MapPin className="w-3.5 h-3.5 text-[#b84a39] fill-[#b84a39]/20" />
          <span className="font-hand text-xs font-bold text-ink">Pantai Ngliyep</span>
        </motion.div>
      </div>

      {/* Area Polaroid Interaktif */}
      <div className="relative my-auto flex flex-col items-center shrink-0">
        
        {/* Washi Tape (Selotip Atas) */}
        <div className="w-20 sm:w-28 h-5 sm:h-7 washi-tape -rotate-3 z-20 -mb-2.5 sm:-mb-3" />

        {/* Bingkai Polaroid */}
        <div 
          onMouseMove={handleDevelop}
          onTouchMove={handleDevelop}
          onClick={handleQuickTap}
          className="bg-[#faf6f0] p-2.5 pb-4 sm:p-3.5 sm:pb-10 rounded shadow-lg border border-black/5 w-[225px] sm:w-[280px] -rotate-1 relative cursor-pointer touch-none select-none transition-transform hover:rotate-0"
        >
          {/* Bingkai Dalam Foto (150px di HP, 210px di layar besar) */}
          <div className="relative w-full h-[150px] sm:h-[210px] bg-[#22201e] overflow-hidden rounded-sm flex items-center justify-center">
            
            {/* GAMBAR ASLI */}
            <img
              src="/assets/kenangan.jpeg"
              alt="Memori KKN Arjosari"
              style={{
                filter: `blur(${20 - (developProgress * 0.2)}px) grayscale(${100 - developProgress}%) sepia(${40 - (developProgress * 0.4)}%)`,
                opacity: 0.15 + (developProgress * 0.0085),
              }}
              className="w-full h-full object-cover transition-all duration-150 pointer-events-none"
            />

            {/* Overlay Instruksi (Hilang kalau sudah 100%) */}
            {!isDeveloped && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-3 sm:p-4 text-center pointer-events-none">
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Hand className="w-6 h-6 sm:w-8 sm:h-8 text-white/90 mb-1 sm:mb-2" />
                </motion.div>
                <p className="font-sans text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                  Usap atau ketuk foto ini untuk mencuci filmnya
                </p>
                <span className="font-hand text-base sm:text-lg text-[#f4ece1] mt-0.5 sm:mt-1 font-bold">
                  {developProgress}%
                </span>
              </div>
            )}
          </div>

          {/* Caption di Bawah Polaroid */}
          <div className="mt-2 sm:mt-3 flex justify-between items-center px-1">
            <span className="font-caveat text-lg sm:text-xl font-bold text-ink/80">
              Our Memories
            </span>
            {isDeveloped && (
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Catatan Kertas (Muncul penuh setelah foto selesai dicuci) */}
      <motion.div
        initial={{ opacity: 0.3, y: 10 }}
        animate={{ 
          opacity: isDeveloped ? 1 : 0.4, 
          y: isDeveloped ? 0 : 5,
          filter: isDeveloped ? "blur(0px)" : "blur(2px)"
        }}
        className="bg-[#faf6f0] p-3 sm:p-4 rounded-xl shadow-sm border border-[#e6dac8] relative z-10 shrink-0"
      >
        <p className="font-hand text-[14px] sm:text-[16px] leading-snug sm:leading-relaxed text-ink">
          {isDeveloped ? (
            <>
              "Lucu sih kalau diingat. Dulu aku sempat berpikir: <span className="underline decoration-accent/60 font-bold">cukup untuk dikagumi saja, atau nekat berjuang buat dapetin hati-nya.</span> Tapi... Yeahhh lihat sekarang, Aku bersyukur banget waktu itu milih buat nggak nyerah begitu aja. Berusaha buat kamu adalah keputusan terbaik yang pernah aku ambil."
            </>
          ) : (
            <span className="text-ink/50 italic text-xs sm:text-sm font-sans flex items-center justify-center gap-2 py-1 sm:py-2">
              🔒 Selesaikan cuci cetak foto di atas untuk membaca catatan ini...
            </span>
          )}
        </p>
      </motion.div>

    </div>
  );
}