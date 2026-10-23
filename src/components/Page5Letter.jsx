import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ShieldCheck, RotateCcw } from 'lucide-react';

export default function Page5Letter({ onRestart }) {
  const [isSealed, setIsSealed] = useState(false);

  const handleTriggerLove = () => {
    setIsSealed(true);

    // Efek Confetti Romantis
    confetti({
      particleCount: 70,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#d48c70', '#b84a39', '#e9c46a', '#a3b19b', '#ffb4a2'],
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-2 py-1 pb-3 sm:pb-1 relative">
      
      {/* Header Halaman */}
      <div className="z-20 flex justify-between items-center shrink-0">
        <div>
          <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent">
            Final Chapter • Promise
          </span>
          <h2 className="font-caveat text-2xl sm:text-3xl font-bold text-ink leading-tight">
            Satu Hal Terakhir... 🤍
          </h2>
        </div>

        {/* Tombol Ulangi dari Awal */}
        <button
          onClick={onRestart}
          title="Baca ulang dari awal"
          className="p-2 rounded-full bg-paperDark/70 text-ink/70 hover:text-ink active:scale-90 transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* ================= KERTAS SURAT BERGARIS (LOOSE-LEAF) ================= */}
      <div className="relative my-auto w-full shrink-0">
        
        {/* Washi Tape Atas */}
        <div className="w-28 sm:w-32 h-5 sm:h-6 washi-tape mx-auto -mb-2.5 sm:-mb-3 rotate-1 z-20 relative" />

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-lined-paper p-3.5 pt-4 sm:p-5 sm:pt-6 rounded-xl shadow-lg border border-[#dfd5c6] relative"
        >
          {/* Lubang Kertas Loose-Leaf di Pinggir Kiri */}
          <div className="absolute left-2 sm:left-2.5 top-6 bottom-6 sm:top-8 sm:bottom-8 flex flex-col justify-around pointer-events-none">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e6dac8] shadow-inner" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e6dac8] shadow-inner" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e6dac8] shadow-inner" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e6dac8] shadow-inner" />
          </div>

          {/* Isi Surat */}
          <div className="pl-4 sm:pl-5 space-y-1.5 sm:space-y-3 text-ink">
            <p className="font-caveat text-xl sm:text-2xl font-bold text-[#b84a39]">
              Untuk perempuan kesayanganku,
            </p>

            <p className="font-hand text-[14.5px] sm:text-[16px] leading-[23px] sm:leading-[28px]">
              Mulai sekarang, tolong ingat baik-baik ya: <span className="font-bold underline decoration-accent">kamu udah nggak sendirian lagi.</span>
            </p>

            <p className="font-hand text-[14.5px] sm:text-[16px] leading-[23px] sm:leading-[28px]">
              Kalau lagi capek atau ada hal yang bikin pikiranmu penuh, bagi ke aku. Masalah kamu itu bisa jadi masalah aku juga. Jangan dipendam sendiri, mari kita hadapi dan selesaikan semuanya sama-sama.
            </p>

            <p className="font-hand text-[14.5px] sm:text-[16px] leading-[23px] sm:leading-[28px]">
              Dan di atas semuanya, ada satu kalimat yang pengen selalu aku pegang buat kamu:
            </p>

            {/* Highlight "I Trust U" */}
            <div className="py-0.5 sm:py-1 flex items-center justify-between">
              <span className="font-caveat text-3xl sm:text-4xl font-bold text-[#b84a39] tracking-wide">
                "I Trust You."
              </span>
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
            </div>

            <p className="font-hand text-xs sm:text-sm text-ink/70 text-right pt-0.5">
              — Dari seseorang yang selalu bangga punya kamu 
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= TOMBOL INTERAKSI PENUTUP & CONFETTI ================= */}
      <div className="z-20 text-center shrink-0">
        {!isSealed ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTriggerLove}
            className="w-full py-2.5 sm:py-3 bg-[#b84a39] text-[#faf6f0] font-sans text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-[#faf6f0] animate-bounce" />
            Ketuk untuk mengirim pelukan & cinta 🤍
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-2 sm:py-2.5 px-3 sm:px-4 bg-[#faf6f0] border-2 border-[#b84a39]/30 rounded-xl shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#b84a39] shrink-0" />
              <div>
                <p className="font-hand text-sm sm:text-base font-bold text-ink leading-none">
                  Pelukan terkirim! 🤍
                </p>
                <p className="font-sans text-[10px] sm:text-[11px] text-ink/60 mt-0.5">
                  Makasih udah baca sampai halaman terakhir ya.
                </p>
              </div>
            </div>

            <button
              onClick={handleTriggerLove}
              className="px-2.5 py-1.5 bg-[#b84a39]/10 text-[#b84a39] font-sans text-[11px] sm:text-xs font-bold rounded-lg active:scale-90 transition shrink-0"
            >
              Lagi dong sayangku! 🤍
            </button>
          </motion.div>
        )}
      </div>

    </div>
  );
}