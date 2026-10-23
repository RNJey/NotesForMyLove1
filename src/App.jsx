import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import MusicPlayer from './components/MusicPlayer';
import Page0Envelope from './components/Page0Envelope';
import Page1Arjosari from './components/Page1Arjosari';
import Page2Smile from './components/Page2Smile';
import Page3Health from './components/Page3Health';
import Page4November from './components/Page4November';
import Page5Letter from './components/Page5Letter';

export default function App() {
  const [page, setPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const totalPages = 6;

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));
  const restartBook = () => setPage(0);

  const startMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio perlu interaksi user:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#2c241d] flex items-center justify-center p-0 sm:p-4 overflow-hidden select-none">
      
      {/* Pastikan src audio sesuai dengan nama file lagu kamu di folder public */}
      <audio
        ref={audioRef}
        src="/assets/Wikan.mp3"
        loop
        preload="auto"
      />

      {/* Frame Buku Scrapbook */}
      <div className="relative w-full h-[100dvh] sm:h-[850px] sm:max-w-[440px] bg-dot-grid sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between border-0 sm:border-8 border-[#e6dac8]">
        
        {/* Pemutar Musik Melayang di Tengah Atas */}
        <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

        {/* Efek Bayangan Lipatan Buku di Pinggir Kiri */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-20" />

        {/* Area Konten Halaman: flex-1 min-h-0 memastikan area ini berhenti tepat di atas navbar */}
        <div className="relative flex-1 min-h-0 w-full overflow-hidden pt-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -40, rotateY: 10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              /* WAJIB h-full (bukan min-h-full) agar Page 0, 3, dan 4 tidak menyusut & saling timpa */
              className="w-full h-full px-5 py-2 sm:p-6 flex flex-col justify-center items-center"
            >
              {page === 0 && (
                <Page0Envelope
                  onOpenBook={nextPage}
                  onStartMusic={startMusic}
                />
              )}
              {page === 1 && <Page1Arjosari />}
              {page === 2 && <Page2Smile />}
              {page === 3 && <Page3Health />}
              {page === 4 && <Page4November />}
              {page === 5 && <Page5Letter onRestart={restartBook} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigasi Bawah: shrink-0 menjaga tinggi navbar tetap stabil */}
        {page > 0 && (
          <div className="h-14 sm:h-16 shrink-0 px-6 bg-paperDark/85 backdrop-blur-sm border-t border-black/5 flex items-center justify-between z-30">
            <button
              onClick={prevPage}
              className="flex items-center gap-1 font-sans text-sm font-semibold text-ink/70 hover:text-ink active:scale-95 transition"
            >
              <ChevronLeft className="w-4 h-4" /> Sebelumnya
            </button>

            <span className="font-hand text-lg text-ink/60">
              Lembar {page} / {totalPages - 1}
            </span>

            {page < totalPages - 1 ? (
              <button
                onClick={nextPage}
                className="flex items-center gap-1 font-sans text-sm font-semibold text-accent hover:text-accent/80 active:scale-95 transition"
              >
                Lanjut <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="flex items-center gap-1 font-sans text-xs font-semibold text-sage">
                <Sparkles className="w-4 h-4" /> Selesai
              </span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}