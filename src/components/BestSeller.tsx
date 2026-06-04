"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const BESTSELLERS = [
  {
    id: 1,
    name: "Polo Signature Đen",
    price: "450.000đ",
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1588&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Polo Signature Trắng",
    price: "450.000đ",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1572&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Polo Thể Thao Xanh",
    price: "390.000đ",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Polo Kẻ Sọc Cổ Điển",
    price: "550.000đ",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1588&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Polo Dệt Kim",
    price: "650.000đ",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1587&auto=format&fit=crop"
  }
];

export default function BestSeller() {
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

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Best Sellers
            </h2>
            <p className="text-[var(--warm-gray)]">Những sản phẩm được săn đón nhiều nhất.</p>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")} 
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={() => scroll("right")} 
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={carouselRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-12 pt-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {BESTSELLERS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full py-3 bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors">
                  <ShoppingBag size={18} />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-[var(--warm-gray)]">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
