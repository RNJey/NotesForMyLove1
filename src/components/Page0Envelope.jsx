import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Star, Music, Flower2, Smile } from 'lucide-react';


export default function Page0Envelope({ onOpenBook, onStartMusic }) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const handleSealClick = () => {
    setIsEnvelopeOpen(true);
    if (onStartMusic) onStartMusic();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-2 overflow-hidden">
      
      {/* ================= KOLEKSI STIKER & DOODLE BERANIMASI ================= */}

      {/* 1. Stiker Hati Pink (Kiri Atas - Mengambang & Bisa Di-drag) */}
      <motion.div
        drag
        dragConstraints={{ left: -20, right: 80, top: -20, bottom: 80 }}
        animate={{ y: [0, -8, 0], rotate: [-12, -5, -12] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-6 z-20 bg-[#fffdf9] p-2.5 rounded-2xl shadow-md border border-[#e6dac8] cursor-grab active:cursor-grabbing"
        title="Stiker bisa digeser!"
      >
        <Heart className="w-6 h-6 text-[#e07a5f] fill-[#e07a5f]" />
      </motion.div>

      {/* 2. Stiker Bintang Berkilau (Kanan Atas) */}
      <motion.div
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-7 z-20 bg-[#fffdf9] px-3 py-1.5 rounded-full shadow-md border border-[#e6dac8] flex items-center gap-1 rotate-12"
      >
        <Star className="w-4 h-4 text-[#e9c46a] fill-[#e9c46a]" />
        <span className="font-hand text-xs font-bold text-ink">For You!</span>
      </motion.div>

      {/* 3. Sparkles Kecil Berputar (Kiri Tengah) */}
      <motion.div
        animate={{ rotate: 360, scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-4 text-accent/40 pointer-events-none"
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      {/* 4. Stiker Bunga Lucu (Kiri Bawah - Mengayun) */}
      <motion.div
        drag
        dragConstraints={{ left: -20, right: 60, top: -60, bottom: 20 }}
        animate={{ rotate: [-10, 10, -10], y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-7 z-20 bg-[#fffdf9] p-2 rounded-full shadow-md border border-[#e6dac8] cursor-grab active:cursor-grabbing"
      >
        <Flower2 className="w-6 h-6 text-[#d48c70]" />
      </motion.div>

      {/* 5. Stiker Musik & Senyum (Kanan Bawah) */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 20, top: -60, bottom: 20 }}
        animate={{ y: [0, -7, 0], rotate: [8, 16, 8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-14 right-6 z-20 bg-[#f4f1de] px-3 py-1.5 rounded-xl shadow-md border-2 border-white flex items-center gap-1.5 cursor-grab active:cursor-grabbing"
      >
        <Smile className="w-4 h-4 text-sage" />
        <span className="font-caveat text-base font-bold text-ink">100% Sweet</span>
      </motion.div>

      {/* 6. Doodle Not Musik Melayang (Kanan Tengah) */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-5 text-ink/30 pointer-events-none"
      >
        <Music className="w-6 h-6 rotate-12" />
      </motion.div>

      {/* ================= JUDUL PENGANTAR ================= */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-10 z-20"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink/60 bg-paperDark/80 px-3.5 py-1 rounded-full border border-black/5">
              Special Delivery
            </span>
            <h1 className="font-caveat text-4xl sm:text-5xl font-bold text-ink mt-3">
              Ada surat kecil buat kamu...
            </h1>
            <p className="font-hand text-base text-ink/75 mt-1 max-w-[260px] mx-auto">
              mending u coba bukaa dehh
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= KONTAINER UTAMA AMPLOP ================= */}
      <div className="relative w-full max-w-[320px] h-[220px] mt-4">
        
        {/* Washi Tape Pemegang Amplop di Pojok Atas */}
        <div className="absolute -top-3 -left-4 w-20 h-6 washi-tape -rotate-[25deg] z-30 pointer-events-none" />
        <div className="absolute -bottom-2 -right-4 w-20 h-6 washi-tape -rotate-[20deg] z-30 pointer-events-none" />

        {/* Bagian Belakang Amplop */}
        <div className="absolute inset-0 bg-[#dfcbb5] rounded-xl shadow-xl border border-[#cbb398]" />

        {/* Kertas Surat yang Keluar dari Amplop (Posisi Absolute agar tidak mendorong segel) */}
        <motion.div
          initial={{ y: 0, height: "190px" }}
          animate={
            isEnvelopeOpen
              ? { y: -105, height: "320px", zIndex: 30 }
              : { y: 0, height: "190px", zIndex: 10 }
          }
          transition={{ duration: 0.7, delay: isEnvelopeOpen ? 0.3 : 0, ease: "easeOut" }}
          className="absolute left-3 right-3 bottom-3 bg-[#faf6f0] rounded-lg shadow-md p-5 flex flex-col justify-between border border-[#e6dac8] overflow-hidden"
        >
          {/* Isi Teks Surat */}
          <div className="space-y-2.5 text-left">
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="font-caveat text-2xl font-bold text-accent">Hai, Wikann🤍</span>
              <span className="font-sans text-[10px] text-ink/40 uppercase tracking-wider">Surprise Note</span>
            </div>

            <p className="font-hand text-[16px] leading-relaxed text-ink/90">
              Hari ini memang bukan hari ulang tahunmu, bukan juga tanggal perayaan apa-apa.
            </p>
            <p className="font-hand text-[16px] leading-relaxed text-ink/90">
              Aku cuma lagi pengen bikin sesuatu yang kecil tapi spesial buat kamu. Sekadar pengingat betapa berharganya kamu buat aku sekarang.
            </p>
          </div>

          {/* Tombol Masuk ke Scrapbook */}
          {isEnvelopeOpen && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={onOpenBook}
              className="w-full py-2.5 mt-2 bg-accent text-white font-sans text-sm font-semibold rounded-lg shadow hover:bg-accent/90 active:scale-95 transition flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Click to Open
            </motion.button>
          )}
        </motion.div>

        {/* Kantong Depan Amplop (Lipatan Kiri, Kanan, Bawah) */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ead8c3 48%, transparent 50%), linear-gradient(225deg, #ead8c3 48%, transparent 50%), linear-gradient(0deg, #e3ceb6 55%, transparent 55%)"
          }}
        />

        {/* Tutup Atas Amplop (Flap) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isEnvelopeOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ 
            transformOrigin: "top",
            clipPath: "polygon(0 0, 100% 0, 50% 60%)",
            zIndex: isEnvelopeOpen ? 5 : 25
          }}
          className="absolute inset-0 bg-[#d5bea4] rounded-t-xl shadow-inner"
        />

        {/* SEGEL LILIN DI TENGAH AMPLOP (Terkunci di X: 50%, Y: 58%) */}
        <AnimatePresence>
          {!isEnvelopeOpen && (
            <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 z-30">
              
              {/* Panah Doodle Coretan Tangan Menunjuk ke Segel */}
              <motion.svg
                animate={{ x: [-4, 2, -4], y: [-2, 2, -2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 absolute -left-14 -top-8 text-ink/60 pointer-events-none"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M8 12 C 20 5, 38 15, 46 36"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M36 35 L 47 38 L 48 26"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Tombol Segel */}
              <motion.button
                exit={{ scale: 0, opacity: 0, rotate: 45 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSealClick}
                className="w-14 h-14 rounded-full bg-[#b84a39] shadow-lg border-4 border-[#9e3b2b] flex items-center justify-center cursor-pointer group relative"
              >
                <div className="w-10 h-10 rounded-full border border-[#d66b5a]/60 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#f4ece1] fill-[#f4ece1] group-hover:scale-110 transition" />
                </div>
                <span className="absolute inset-0 rounded-full bg-[#b84a39] animate-ping opacity-30" />
              </motion.button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}