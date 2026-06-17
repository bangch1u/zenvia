"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const STORE_IMAGES = [
  "/images/722097268_122135143917071318_6291259292882745499_n.jpg",
  "/images/702811915_122132798871071318_2673783017356587821_n.jpg",
  "/images/602414297_122114049873071318_863400411738336251_n.jpg",
  "/images/721667306_122135143857071318_6992953767449721561_n.jpg"
];

export default function StoreExperience() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".store-header",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );
    
    gsap.fromTo(".store-link",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );

    const images = gsap.utils.toArray(".store-image");
    images.forEach((img: any, i) => {
      gsap.fromTo(img,
        { opacity: 0, scale: 0.9, y: 50 },
        { 
          opacity: 1, scale: 1, y: 0, 
          duration: 1, 
          delay: i * 0.1, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".store-grid", start: "top 85%" }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="store-header max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Không Gian Mua Sắm
            </h2>
            <p className="text-[var(--warm-gray)] text-lg md:text-xl font-light leading-relaxed">
              Trải nghiệm mua sắm đẳng cấp với không gian được thiết kế tối giản, tinh tế, nơi bạn có thể trực tiếp cảm nhận chất lượng của từng sản phẩm.
            </p>
          </div>
          <a 
            href="#" 
            className="store-link hidden md:inline-flex items-center text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[var(--luxury-gold)] hover:border-[var(--luxury-gold)] transition-all duration-300"
          >
            Hệ thống cửa hàng
          </a>
        </div>

        <div className="store-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-6">
            <div className="store-image h-[350px] md:h-[450px] rounded-sm overflow-hidden group relative">
              <Image src={STORE_IMAGES[0]} alt="Store 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
            </div>
            <div className="store-image h-[250px] md:h-[350px] rounded-sm overflow-hidden group relative">
              <Image src={STORE_IMAGES[1]} alt="Store 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
            </div>
          </div>
          <div className="grid gap-6">
            <div className="store-image h-[250px] md:h-[350px] rounded-sm overflow-hidden group relative">
              <Image src={STORE_IMAGES[2]} alt="Store 3" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
            </div>
            <div className="store-image h-[350px] md:h-[450px] rounded-sm overflow-hidden group relative">
              <Image src={STORE_IMAGES[3]} alt="Store 4" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
