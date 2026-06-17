"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const BRAND_IMAGE = "/images/703587398_122132798739071318_857475403502014921_n.jpg";

export default function BrandIntro() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Image Parallax
    gsap.fromTo(".brand-image", 
      { scale: 1.2, yPercent: -10 },
      {
        scale: 1,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Text reveal
    const textElements = gsap.utils.toArray(".brand-text-reveal");
    textElements.forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Features stagger
    gsap.fromTo(".brand-feature", 
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brand-features-container",
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[var(--soft-beige)] relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 z-10">
            <div>
              <h2 className="brand-text-reveal text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Định Nghĩa Lại <br />
                <span className="text-gradient-gold">Chuẩn Mực Phái Mạnh</span>
              </h2>
              
              <div className="space-y-6 text-[var(--warm-gray)] text-lg md:text-xl font-light leading-relaxed">
                <p className="brand-text-reveal">
                  Tại Zenvia, chúng tôi tin rằng một chiếc áo Polo không chỉ là trang phục, mà là tuyên ngôn của sự tự tin và phong cách sống hiện đại.
                </p>
                <p className="brand-text-reveal">
                  Sự kết hợp hoàn hảo giữa <strong className="text-black font-medium">Chất liệu cao cấp</strong>, <strong className="text-black font-medium">Form dáng hiện đại</strong> và <strong className="text-black font-medium">Thiết kế vượt thời gian</strong> mang đến trải nghiệm thoải mái tuyệt đối.
                </p>
              </div>

              <div className="brand-features-container mt-12 grid grid-cols-2 gap-10 border-t border-gray-200 pt-10">
                <div className="brand-feature">
                  <h4 className="text-black font-bold text-2xl mb-2">Premium</h4>
                  <p className="text-[var(--warm-gray)]">Sợi vải tinh chọn, mềm mại tối đa</p>
                </div>
                <div className="brand-feature">
                  <h4 className="text-black font-bold text-2xl mb-2">Timeless</h4>
                  <p className="text-[var(--warm-gray)]">Thiết kế tối giản, dễ dàng phối đồ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-none shadow-2xl">
              <div className="absolute inset-0 bg-black/10 z-10" />
              <img
                src={BRAND_IMAGE}
                alt="Zenvia Lifestyle"
                className="brand-image w-full h-full object-cover origin-center"
              />
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[var(--luxury-gold)] z-0 hidden md:block" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
