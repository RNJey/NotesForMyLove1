import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, Gift, Sparkles, Lock, Unlock, PartyPopper } from 'lucide-react';

export default function Page4November() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Inisialisasi lapisan gosok pada Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Warna lapisan penutup (Perpaduan warna emas/cokelat pastel hangat)
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#d6c3ad');
    gradient.addColorStop(0.5, '#cbb296');
    gradient.addColorStop(1, '#bfa382');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Tambah pola titik-titik dekoratif di atas lapisan gosok
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 15; i < canvas.width; i += 25) {
      for (let j = 15; j < canvas.height; j += 25) {
        ctx.beginPath();
        ctx.arc(i, j, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Teks instruksi di atas lapisan gosok
    ctx.fillStyle = '#3d352e';
    ctx.font = 'bold 18px "Quicksand", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GOSOK DI SINI', canvas.width / 2, canvas.height / 2 - 8);

    ctx.font = '14px "Patrick Hand", cursive';
    ctx.fillText('Pakai jarimu untuk membuka rahasia...', canvas.width / 2, canvas.height / 2 + 18);
  }, []);

  // Fungsi menghapus lapisan saat digosok
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    // Hitung progres gosokan agar otomatis terbuka penuh jika sudah cukup banyak digosok
    setScratchCount((prev) => {
      const next = prev + 1;
      if (next > 45 && !isRevealed) {
        setIsRevealed(true);
      }
      return next;
    });
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    if (touch) {
      scratch(touch.clientX, touch.clientY);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 relative overflow-hidden">
      
      {/* ================= STIKER BERANIMASI ================= */}
      {/* Stiker Kado (Kanan Atas - Bisa Di-drag) */}
      <motion.div
        drag
        dragConstraints={{ left: -80, right: 10, top: 0, bottom: 100 }}
        animate={{ y: [0, -6, 0], rotate: [8, -4, 8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 right-2 z-30 bg-[#fffdf9] p-2 rounded-2xl shadow-md border border-[#e6dac8] cursor-grab active:cursor-grabbing"
      >
        <Gift className="w-5 h-5 text-[#b84a39]" />
      </motion.div>

      {/* Stiker Terompet Pesta Kecil (Kiri Tengah) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1 z-20 bg-[#fffdf9] p-1.5 rounded-full shadow border border-[#e6dac8] pointer-events-none"
      >
        <PartyPopper className="w-4 h-4 text-accent" />
      </motion.div>

      {/* ================= HEADER HALAMAN ================= */}
      <div className="z-20">
        <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-accent">
          Chapter 04 • Upcoming Secret
        </span>
        <h2 className="font-caveat text-3xl font-bold text-ink">
          Menuju Bulan Spesialmu🤍
        </h2>
      </div>

      {/* ================= AREA KARTU GOSOK (SCRATCH CARD) ================= */}
      <div className="relative my-auto flex flex-col items-center">
        
        {/* Washi Tape */}
        <div className="w-28 h-6 washi-tape -rotate-2 z-20 -mb-2.5" />

        {/* Bingkai Kartu Kalender November */}
        <div className="relative w-[280px] sm:w-[300px] h-[220px] bg-[#faf6f0] rounded-2xl shadow-lg border-2 border-[#e6dac8] p-4 flex flex-col justify-between overflow-hidden select-none">
          
          {/* ISI DI BALIK LAPISAN GOSOK */}
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <div className="flex items-center gap-1.5">
              <CalendarHeart className="w-5 h-5 text-[#b84a39]" />
              <span className="font-sans text-sm font-extrabold tracking-wider uppercase text-ink">
                November
              </span>
            </div>
            <span className="font-hand text-xs bg-accent/15 text-accent px-2.5 py-0.5 rounded-full font-bold">
              Mystery Date 🤫
            </span>
          </div>

          {/* Highlight Tanggal Rahasia */}
          <div className="my-auto text-center py-2">
            <div className="inline-block bg-[#f4ece1] border-2 border-dashed border-accent px-5 py-2 rounded-xl rotate-1 shadow-2xs">
              <span className="font-caveat text-4xl font-bold text-[#b84a39]">
                ?? November
              </span>
            </div>
            <p className="font-hand text-[15px] text-ink/85 mt-2.5 leading-snug">
              "Seseorang yang paling manis bakal tambah umur di bulan ini!"
            </p>
          </div>

          <div className="text-center">
            <span className="font-sans text-[10px] text-ink/40 uppercase tracking-widest">
              ✨ Pre-Birthday Countdown ✨
            </span>
          </div>

          {/* CANVAS PENUTUP UNTUK DIGOSOK */}
          <canvas
            ref={canvasRef}
            width={300}
            height={220}
            onMouseDown={() => setIsDrawing(true)}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDrawing(true)}
            onTouchEnd={() => setIsDrawing(false)}
            onTouchMove={handleTouchMove}
            className={`absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-700 ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* ================= CATATAN BAWAH ================= */}
      <motion.div
        animate={{
          opacity: isRevealed ? 1 : 0.65,
          scale: isRevealed ? 1 : 0.98,
        }}
        className="bg-[#faf6f0] p-4 rounded-xl shadow-sm border border-[#e6dac8] relative z-20"
      >
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-accent mb-1">
          {isRevealed ? (
            <>
              <Unlock className="w-3.5 h-3.5" /> Emang Eakk?
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5" /> Gosok kartu di atas dulu ya...
            </>
          )}
        </div>

        <p className="font-hand text-[16px] leading-relaxed text-ink">
          "Walaupun tanggal pastinya di bulan <span className="font-bold text-[#b84a39]">November</span> nanti masih kamu rahasiakan rapat-rapat dari aku... nggak apa-apa kok! Buat aku, tanpa nunggu hari ulang tahunmu tiba pun, setiap harimu akan kubikin spesial :3"
        </p>
      </motion.div>

    </div>
  );
}