"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA_IMAGE = "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1740&auto=format&fit=crop";

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={CTA_IMAGE} 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            Nâng Tầm Phong Cách <br /> Cùng Zenvia
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12">
            Đừng bỏ lỡ cơ hội sở hữu những chiếc áo Polo hoàn hảo cho tủ đồ của bạn. Trải nghiệm sự khác biệt ngay hôm nay.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-12 bg-white text-black hover:bg-white/90">
              Mua Ngay
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-12 border-white text-white hover:bg-white hover:text-black">
              Liên Hệ Tư Vấn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
