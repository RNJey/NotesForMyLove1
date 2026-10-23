import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Moon, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';

export default function Page3Health() {
  const boardRef = useRef(null);
  const [promised, setPromised] = useState(false);

  // Data Sticky Notes
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "1. Soal Kopi ☕",
      text: "Aku tahu kamu suka kopi, tapi tolong dibatasi ya sayangku. Lambung kamu juga butuh disayang, jangan cuma aku aja yang nyayangin kamu.",
      bg: "bg-[#fef3c7]", // Kuning pastel
      border: "border-[#fde68a]",
      rotate: -4,
      top: "8px",
      left: "10px",
      icon: Coffee,
    },
    {
      id: 2,
      title: "2. Soal Begadang 🌙",
      text: "Kurang-kurangin tidur lewat tengah malam! Mata cantik kamu itu butuh istirahat yang cukup, bukan malah diajak melek terus.",
      bg: "bg-[#fce7f3]", // Pink pastel
      border: "border-[#fbcfe8]",
      rotate: 3,
      top: "55px",
      left: "22px",
      icon: Moon,
    },
    {
      id: 3,
      title: "3. Kenapa Aku Bawel? 🤍",
      text: "Bukan mau ngatur-ngatur, tapi aku pengen kamu sehat terus. Biar kita punya banyak waktu buat jalan bareng dan cerita banyak hal!",
      bg: "bg-[#e0f2fe]", // Biru langit pastel
      border: "border-[#bae6fd]",
      rotate: -2,
      top: "105px",
      left: "12px",
      icon: HeartHandshake,
    },
  ]);

  // Fungsi agar note yang sedang disentuh/digeser pindah ke lapisan paling atas
  const bringToFront = (id) => {
    setNotes((prev) => {
      const target = prev.find((n) => n.id === id);
      const others = prev.filter((n) => n.id !== id);
      return [...others, target];
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 relative overflow-hidden">
      
      {/* Header Halaman */}
      <div className="z-20">
        <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-accent">
          Chapter 03 • Little Reminders
        </span>
        <h2 className="font-caveat text-3xl font-bold text-ink">
          Nih kata-kata buat kamu 🤍
        </h2>
        <p className="font-sans text-xs text-ink/60 mt-0.5">
          Geser-geser kertas catatan di bawah ini pakai jarimu!
        </p>
      </div>

      {/* ================= PAPAN DRAGGABLE STICKY NOTES ================= */}
      <div
        ref={boardRef}
        className="relative w-full flex-1 my-3 rounded-2xl border-2 border-dashed border-[#d5c7b4] bg-[#faf6f0]/50 p-3 overflow-hidden"
      >
        {/* Stiker Hiasan di Papan */}
        <motion.div
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-2 right-3 text-accent/40 pointer-events-none"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Render Sticky Notes */}
        {notes.map((note, index) => {
          const IconComponent = note.icon;
          return (
            <motion.div
              key={note.id}
              drag
              dragConstraints={boardRef}
              onPointerDown={() => bringToFront(note.id)}
              initial={{ rotate: note.rotate, scale: 0.9, opacity: 0 }}
              animate={{ rotate: note.rotate, scale: 1, opacity: 1 }}
              whileDrag={{ scale: 1.06, rotate: 0, cursor: "grabbing" }}
              style={{
                top: note.top,
                left: note.left,
                zIndex: 10 + index,
              }}
              className={`absolute w-[250px] sm:w-[270px] ${note.bg} ${note.border} border p-4 rounded-xl shadow-md cursor-grab touch-none select-none`}
            >
              {/* Washi Tape Kecil di Atas Sticky Note */}
              <div className="w-16 h-4 washi-tape mx-auto -mt-6 mb-2 rotate-1" />

              <div className="flex items-center justify-between border-b border-black/10 pb-1.5 mb-2">
                <span className="font-caveat text-xl font-bold text-ink">
                  {note.title}
                </span>
                <IconComponent className="w-4 h-4 text-ink/60" />
              </div>

              <p className="font-hand text-[15.5px] leading-relaxed text-ink/90">
                "{note.text}"
              </p>

              <div className="mt-2 text-right">
                <span className="font-sans text-[10px] text-ink/40 font-semibold uppercase">
                  Geser untuk lihat bawahnya ➔
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= BAGIAN BAWAH: TOMBOL JANJI SEHAT ================= */}
      <div className="bg-[#faf6f0] p-3.5 rounded-xl shadow-sm border border-[#e6dac8] z-20 flex items-center justify-between">
        <div>
          <p className="font-hand text-base font-bold text-ink">
            Gimana, siap kurangi kopi & begadang?
          </p>
          <p className="font-sans text-[11px] text-ink/60">
            Ketuk tombol di samping sebagai tanda setuju!
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!promised ? (
            <motion.button
              key="btn-promise"
              whileTap={{ scale: 0.9 }}
              onClick={() => setPromised(true)}
              className="px-4 py-2 bg-accent text-white font-sans text-xs font-bold rounded-lg shadow hover:bg-accent/90 transition shrink-0"
            >
              Iya, Beb!
            </motion.button>
          ) : (
            <motion.div
              key="stamp-promised"
              initial={{ scale: 2, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              className="px-3 py-1.5 border-2 border-sage text-sage font-sans text-xs font-extrabold rounded-lg flex items-center gap-1 bg-sage/10 shrink-0"
            >
              <CheckCircle2 className="w-4 h-4" /> Lopyuu!!!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}