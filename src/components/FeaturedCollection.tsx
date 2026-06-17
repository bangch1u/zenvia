"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Polo Premium Signature",
    price: "450.000đ",
    image: "/images/701119791_122132301291071318_1447634558021064937_n.jpg",
    colors: ["#000000", "#FFFFFF", "#1A202C"],
  },
  {
    id: 2,
    name: "Polo Thể Thao AirActive",
    price: "390.000đ",
    image: "/images/701312344_122132301309071318_3108915432690931716_n.jpg",
    colors: ["#1E3A8A", "#047857"],
  },
  {
    id: 3,
    name: "Polo Dài Tay Classic",
    price: "550.000đ",
    image: "/images/702044034_122132301213071318_6700617365759711061_n.jpg",
    colors: ["#000000", "#6B7280", "#4B5563"],
  },
  {
    id: 4,
    name: "Polo Công Sở Modern",
    price: "490.000đ",
    image: "/images/702811915_122132798871071318_2673783017356587821_n.jpg",
    colors: ["#FFFFFF", "#F3F4F6", "#9CA3AF"],
  }
];

export default function FeaturedCollection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.fromTo(".collection-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );

    // Products stagger animation
    gsap.fromTo(".product-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-white" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="collection-header">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Bộ Sưu Tập Nổi Bật
            </h2>
            <p className="text-[var(--warm-gray)] text-lg">Những mẫu Polo định hình phong cách.</p>
          </div>
          
          <a 
            href="#" 
            className="collection-header hidden md:inline-flex items-center text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[var(--luxury-gold)] hover:border-[var(--luxury-gold)] transition-all duration-300"
          >
            Xem Tất Cả
          </a>
        </div>

        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-white/90 text-black w-14 h-14 rounded-full flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 hover:bg-white">
                    <Search size={22} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg tracking-wide group-hover:text-[var(--luxury-gold)] transition-colors duration-300">{product.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[var(--warm-gray)] font-light">{product.price}</p>
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <div 
                        key={i} 
                        className="w-4 h-4 rounded-full border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-125"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <a href="#" className="inline-block text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1">
            Xem Tất Cả
          </a>
        </div>
      </div>
    </section>
  );
}
