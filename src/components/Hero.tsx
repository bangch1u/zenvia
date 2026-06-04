"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HERO_MODEL_IMAGE = "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2574&auto=format&fit=crop"; 

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={HERO_MODEL_IMAGE}
          alt="Zenvia Fashion Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <span className="text-[var(--luxury-gold)] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            Bộ Sưu Tập Mới
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            POLO CHUẨN DÁNG <br/> CHO QUÝ ÔNG HIỆN ĐẠI
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
            Thiết kế tối giản. Chất liệu cao cấp. Mặc đẹp mỗi ngày.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="luxury" className="w-full sm:w-auto px-10">
              Mua Ngay
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 border-white text-white hover:bg-white hover:text-black">
              Xem Bộ Sưu Tập
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
