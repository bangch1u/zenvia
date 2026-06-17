"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const BESTSELLERS = [
  {
    id: 1,
    name: "Polo Signature Đen",
    price: "450.000đ",
    image: "/images/721667306_122135143857071318_6992953767449721561_n.jpg"
  },
  {
    id: 2,
    name: "Polo Signature Trắng",
    price: "450.000đ",
    image: "/images/722097268_122135143917071318_6291259292882745499_n.jpg"
  },
  {
    id: 3,
    name: "Polo Thể Thao Xanh",
    price: "390.000đ",
    image: "/images/723852984_122135144493071318_1327412218129945252_n.jpg"
  },
  {
    id: 4,
    name: "Polo Kẻ Sọc Cổ Điển",
    price: "550.000đ",
    image: "/images/701119791_122132301291071318_1447634558021064937_n.jpg"
  },
  {
    id: 5,
    name: "Polo Dệt Kim",
    price: "650.000đ",
    image: "/images/704811689_122132798709071318_6948687205746393980_n.jpg"
  }
];

export default function BestSeller() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".bestseller-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    gsap.fromTo(".bestseller-card",
      { opacity: 0, x: 50 },
      { 
        opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", 
        scrollTrigger: { trigger: carouselRef.current, start: "top 85%" }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="bestseller-header">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-black">
              Best Sellers
            </h2>
            <p className="text-[var(--warm-gray)] text-lg">Những sản phẩm được săn đón nhiều nhất.</p>
          </div>

          <div className="flex gap-4 bestseller-header">
            <button 
              onClick={() => scroll("left")} 
              disabled={!canScrollLeft}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ChevronLeft strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              disabled={!canScrollRight}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ChevronRight strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={carouselRef}
        onScroll={checkScroll}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-12 pt-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {BESTSELLERS.map((product) => (
          <div
            key={product.id}
            className="bestseller-card min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-50">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 object-top"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/60 to-transparent">
                <button className="w-full py-4 bg-white text-black font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[var(--luxury-gold)] hover:text-white transition-colors shadow-xl">
                  <ShoppingBag size={18} />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-xl tracking-tight group-hover:text-[var(--luxury-gold)] transition-colors duration-300">{product.name}</h3>
              <p className="text-[var(--warm-gray)] font-light">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
