"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const BRAND_IMAGE = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1587&auto=format&fit=crop";

export default function BrandIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (imageRef.current && sectionRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Định Nghĩa Lại <br />
                <span className="text-[var(--warm-gray)]">Chuẩn Mực Phái Mạnh</span>
              </h2>
              
              <div className="space-y-6 text-[var(--warm-gray)] text-lg leading-relaxed">
                <p>
                  Tại Zenvia, chúng tôi tin rằng một chiếc áo Polo không chỉ là trang phục, mà là tuyên ngôn của sự tự tin và phong cách sống hiện đại.
                </p>
                <p>
                  Sự kết hợp hoàn hảo giữa <strong className="text-black">Chất liệu cao cấp</strong>, <strong className="text-black">Form dáng hiện đại (Modern Fit)</strong> và <strong className="text-black">Thiết kế vượt thời gian</strong> mang đến trải nghiệm thoải mái tuyệt đối cho mỗi ngày làm việc hay dạo phố.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-black font-bold text-xl mb-2">Premium</h4>
                  <p className="text-sm text-[var(--warm-gray)]">Sợi vải tinh chọn, mềm mại</p>
                </div>
                <div>
                  <h4 className="text-black font-bold text-xl mb-2">Timeless</h4>
                  <p className="text-sm text-[var(--warm-gray)]">Thiết kế tối giản, dễ phối</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                ref={imageRef}
                src={BRAND_IMAGE}
                alt="Zenvia Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
