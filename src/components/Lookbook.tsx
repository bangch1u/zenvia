"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const LOOKBOOK_IMAGE_01 = "/images/705306012_122132798757071318_8073196219134404195_n.jpg";
const LOOKBOOK_IMAGE_02 = "/images/602414297_122114049873071318_863400411738336251_n.jpg";

export default function Lookbook() {
  const container = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax on images
    if (img1Ref.current) {
      gsap.to(img1Ref.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
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
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // Text reveal
    gsap.fromTo(".lookbook-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".lookbook-title", start: "top 85%" } }
    );
    
    gsap.fromTo(".lookbook-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".lookbook-title", start: "top 85%" } }
    );

    gsap.fromTo(".lookbook-text",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".lookbook-text", start: "top 85%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[var(--deep-black)] text-white overflow-hidden relative" id="lookbook">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay z-0" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="lookbook-title text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-gradient-gold">
            Lookbook
          </h2>
          <p className="lookbook-subtitle text-white/60 uppercase tracking-[0.3em] text-sm md:text-base font-light">
            Mùa Hè 2026
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] overflow-hidden rounded-none shadow-2xl">
            <div ref={img1Ref} className="absolute w-full h-[120%] -top-[10%] left-0">
              <Image 
                src={LOOKBOOK_IMAGE_01} 
                alt="Lookbook 1" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-16">
            <div className="lookbook-text max-w-md">
              <h3 className="text-3xl md:text-4xl font-light leading-[1.3] mb-8 italic">
                "Sự thanh lịch không nằm ở việc thu hút sự chú ý, mà ở việc được ghi nhớ."
              </h3>
              <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
                Khám phá bộ sưu tập mới nhất với những tông màu trung tính sang trọng, dễ dàng kết hợp và phù hợp với mọi phong cách.
              </p>
            </div>

            <div className="relative h-[40vh] md:h-[50vh] w-4/5 ml-auto overflow-hidden rounded-none shadow-2xl">
              <div ref={img2Ref} className="absolute w-full h-[120%] -top-[10%] left-0">
                <Image 
                  src={LOOKBOOK_IMAGE_02} 
                  alt="Lookbook 2" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
