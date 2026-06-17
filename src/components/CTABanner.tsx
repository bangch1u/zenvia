"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

const CTA_IMAGE = "/images/703587398_122132798739071318_857475403502014921_n.jpg";

export default function CTABanner() {
  const container = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background
    if (bgRef.current) {
      gsap.fromTo(bgRef.current,
        { yPercent: -20, scale: 1.1 },
        { 
          yPercent: 20, 
          ease: "none", 
          scrollTrigger: { 
            trigger: container.current, 
            start: "top bottom", 
            end: "bottom top", 
            scrub: true 
          } 
        }
      );
    }

    // Text animations
    gsap.fromTo(".cta-content",
      { opacity: 0, scale: 0.95, y: 30 },
      { 
        opacity: 1, scale: 1, y: 0, 
        duration: 1, 
        ease: "power3.out", 
        scrollTrigger: { trigger: ".cta-content", start: "top 85%" } 
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
        <div ref={bgRef} className="absolute w-full h-[140%] -top-[20%] left-0">
          <Image 
            src={CTA_IMAGE} 
            alt="CTA Background" 
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center text-white">
        <div className="cta-content max-w-4xl mx-auto">
          <span className="text-gradient-gold uppercase tracking-[0.4em] text-sm md:text-base font-medium mb-8 block">
            Khẳng định vị thế
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight drop-shadow-2xl">
            Nâng Tầm Phong Cách <br /> Cùng <span className="italic font-light">Zenvia</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/80 font-light mb-12 leading-relaxed">
            Đừng bỏ lỡ cơ hội sở hữu những chiếc áo Polo hoàn hảo cho tủ đồ của bạn. Trải nghiệm sự khác biệt ngay hôm nay.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto px-12 py-7 text-lg bg-white text-black hover:bg-[var(--luxury-gold)] hover:text-white transition-all duration-500 rounded-none shadow-xl">
              Mua Ngay
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-12 py-7 text-lg border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none glass">
              Liên Hệ Tư Vấn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
