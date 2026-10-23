import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40">
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={onToggle}
        className="bg-[#fffdf9]/90 backdrop-blur-xs px-3 py-1 rounded-full shadow-md border border-[#d5c7b4] flex items-center gap-2 cursor-pointer group"
        title={isPlaying ? "Matikan Musik" : "Putar Musik"}
      >
        {/* Piringan Hitam (Berputar saat musik nyala) */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 3, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
          className="relative flex items-center justify-center"
        >
          <Disc3 className={`w-4 h-4 ${isPlaying ? "text-[#b84a39]" : "text-ink/40"}`} />
        </motion.div>

        {/* Teks Status & Bar Gelombang Suara */}
        <div className="flex items-center gap-1.5">
          <span className="font-sans text-[11px] font-bold text-ink/80 tracking-wide">
            {isPlaying ? "Our Song" : "Musik Off"}
          </span>

          {/* Animasi Equalizer Kecil */}
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-3">
              <motion.span
                animate={{ height: ["4px", "11px", "4px"] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-[2px] bg-accent rounded-full"
              />
              <motion.span
                animate={{ height: ["10px", "4px", "10px"] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-[2px] bg-[#b84a39] rounded-full"
              />
              <motion.span
                animate={{ height: ["5px", "12px", "5px"] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="w-[2px] bg-accent rounded-full"
              />
            </div>
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-ink/40" />
          )}
        </div>
      </motion.button>

      {/* Efek Not Musik Melayang Saat Lagu Berputar */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 0, x: 10 }}
            animate={{ opacity: [0, 0.8, 0], y: -18, x: 22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute -right-2 top-0 pointer-events-none text-[#b84a39]"
          >
            <Music className="w-3 h-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}