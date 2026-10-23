import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Camera, Smile, Star } from 'lucide-react';

export default function Page2Smile() {
  const [showDoodle, setShowDoodle] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const handleTapPhoto = () => {
    if (!showDoodle) setShowDoodle(true);
    setHeartCount((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-2 py-1 pb-3 sm:pb-2 relative">
      
      {/* ================= STIKER BERANIMASI ================= */}
      {/* Stiker Kamera (Kanan Atas - Bisa Di-drag) */}
      <motion.div
        drag
        dragConstraints={{ left: -80, right: 10, top: 0, bottom: 100 }}
        animate={{ rotate: [6, -4, 6], y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1 right-1 sm:top-2 sm:right-2 z-30 bg-[#fffdf9] p-2 rounded-xl shadow-md border border-[#e6dac8] cursor-grab active:cursor-grabbing"
      >
        <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
      </motion.div>

      {/* Stiker Bintang Kecil (Kiri Tengah) */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1 z-20 bg-[#fffdf9] p-1.5 rounded-full shadow border border-[#e6dac8] pointer-events-none"
      >
        <Star className="w-4 h-4 text-[#e9c46a] fill-[#e9c46a]" />
      </motion.div>

      {/* ================= HEADER HALAMAN ================= */}
      <div className="z-20 shrink-0">
        <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent">
          Chapter 02 • My Favorite View
        </span>
        <h2 className="font-caveat text-2xl sm:text-3xl font-bold text-ink leading-tight">
          Tentang Senyumanmu...
        </h2>
      </div>

      {/* ================= AREA FOTO & CORETAN SVG ================= */}
      <div className="relative my-auto flex flex-col items-center shrink-0">
        
        {/* Washi Tape */}
        <div className="w-20 sm:w-24 h-5 sm:h-6 washi-tape rotate-2 z-20 -mb-2.5" />

        {/* Bingkai Foto Scrapbook */}
        <div
          onClick={handleTapPhoto}
          className="relative bg-[#faf6f0] p-2.5 pb-4 sm:p-3 sm:pb-8 rounded-lg shadow-lg border border-black/5 w-[225px] sm:w-[275px] rotate-1 cursor-pointer select-none group"
        >
          <div className="relative w-full h-[155px] sm:h-[215px] overflow-hidden rounded bg-[#e6dac8]">
            {/* GAMBAR: Ganti URL ini dengan foto dia sedang tersenyum paling manis */}
            <img
              src="/assets/senyum.jpeg"
              alt="Senyuman Manis"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none"
            />

            {/* Petunjuk Klik Awal */}
            {!showDoodle && (
              <div className="absolute bottom-2 inset-x-2 bg-black/55 backdrop-blur-xs text-white py-1 sm:py-1.5 px-3 rounded-full text-center animate-pulse">
                <p className="font-sans text-[10px] sm:text-[11px] font-semibold">
                  click untuk lihat ttd gweh🤍
                </p>
              </div>
            )}

            {/* ANIMASI CORETAN TANGAN SVG (Muncul saat diklik) */}
            <AnimatePresence>
              {showDoodle && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 260 220"
                  fill="none"
                >
                  {/* Panah Coretan Menunjuk ke Senyum */}
                  <motion.path
                    d="M 35 185 Q 65 170 95 140 M 82 140 L 97 138 L 95 153"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  />
                </svg>
              )}
            </AnimatePresence>

            {/* Stiker Melayang "Cantik Banget!" di Atas Foto */}
            <AnimatePresence>
              {showDoodle && (
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: -8 }}
                  className="absolute bottom-2.5 left-2.5 bg-[#b84a39] text-[#faf6f0] px-2.5 py-0.5 rounded-md shadow font-hand text-xs tracking-wide"
                >
                  Candu banget! 🤍
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Baris Bawah Polaroid + Counter Tap Hati */}
          <div className="mt-2 flex justify-between items-center px-1">
            <span className="font-caveat text-lg sm:text-xl font-bold text-ink">
              Senyum Paling Menawan
            </span>
            <motion.button
              whileTap={{ scale: 1.3 }}
              className="flex items-center gap-1 text-xs font-sans font-bold text-[#b84a39] bg-[#b84a39]/10 px-2 py-0.5 rounded-full"
            >
              <Heart className="w-3.5 h-3.5 fill-[#b84a39]" />
              {heartCount > 0 ? `${heartCount}x jatuh hati` : "Tap!"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* ================= TEKS PUJIAN ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#faf6f0] p-3 sm:p-4 rounded-xl shadow-sm border border-[#e6dac8] relative z-20 shrink-0"
      >
        {/* Stiker Smile Kecil di Pojok Catatan */}
        <div className="absolute -top-2.5 right-3 bg-[#f4f1de] px-2 py-0.5 rounded-full border border-[#e6dac8] shadow-2xs flex items-center gap-1">
          <Smile className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
          <span className="font-sans text-[9px] sm:text-[10px] font-bold text-ink/70">1000/10</span>
        </div>

        <p className="font-hand text-[14.5px] sm:text-[16px] leading-snug sm:leading-relaxed text-ink">
          "Satu hal yang selalu bikin duniaku tenang: <span className="font-bold text-accent underline">senyuman kamu.</span> Mau seberat apapun hariku, lihat kamu senyum itu rasanya kayak semua capek langsung hilang. Jadi, Tolong jangan pernah kehilangan senyum semanis ini ya :3."
        </p>
      </motion.div>

    </div>
  );
}