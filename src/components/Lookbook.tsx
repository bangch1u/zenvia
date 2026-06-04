"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LOOKBOOK_IMAGE_01 = "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1587&auto=format&fit=crop";
const LOOKBOOK_IMAGE_02 = "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1664&auto=format&fit=crop";

export default function Lookbook() {
  const containerRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      if (img1Ref.current) {
        gsap.to(img1Ref.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      if (img2Ref.current) {
        gsap.to(img2Ref.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[var(--deep-black)] text-white overflow-hidden" id="lookbook">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            Lookbook
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 uppercase tracking-[0.2em] text-sm"
          >
            Mùa Hè 2026
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] overflow-hidden">
            <img 
              ref={img1Ref}
              src={LOOKBOOK_IMAGE_01} 
              alt="Lookbook 1" 
              className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h3 className="text-2xl md:text-3xl font-light leading-snug mb-6">
                "Sự thanh lịch không nằm ở việc thu hút sự chú ý, mà ở việc được ghi nhớ."
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Khám phá bộ sưu tập mới nhất với những tông màu trung tính sang trọng, dễ dàng kết hợp và phù hợp với mọi phong cách.
              </p>
            </motion.div>

            <div className="relative h-[40vh] md:h-[50vh] w-4/5 ml-auto overflow-hidden">
              <img 
                ref={img2Ref}
                src={LOOKBOOK_IMAGE_02} 
                alt="Lookbook 2" 
                className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
