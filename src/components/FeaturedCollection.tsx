"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Polo Premium Cotton",
    price: "450.000đ",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1587&auto=format&fit=crop",
    colors: ["#000000", "#FFFFFF", "#1A202C"],
  },
  {
    id: 2,
    name: "Polo Thể Thao AirActive",
    price: "390.000đ",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1588&auto=format&fit=crop",
    colors: ["#1E3A8A", "#047857"],
  },
  {
    id: 3,
    name: "Polo Dài Tay Classic",
    price: "550.000đ",
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1588&auto=format&fit=crop",
    colors: ["#000000", "#6B7280", "#4B5563"],
  },
  {
    id: 4,
    name: "Polo Công Sở Modern",
    price: "490.000đ",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1572&auto=format&fit=crop",
    colors: ["#FFFFFF", "#F3F4F6", "#9CA3AF"],
  }
];

export default function FeaturedCollection() {
  return (
    <section className="py-24 bg-[var(--soft-beige)]" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Bộ Sưu Tập Nổi Bật
            </h2>
            <p className="text-[var(--warm-gray)]">Những mẫu Polo được yêu thích nhất.</p>
          </motion.div>
          
          <motion.a 
            href="#" 
            className="hidden md:inline-block text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-[var(--warm-gray)] hover:border-[var(--warm-gray)] transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Xem Tất Cả
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-[var(--warm-gray)]">{product.price}</p>
                </div>
                <div className="flex gap-1">
                  {product.colors.map((color, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block text-sm font-semibold uppercase tracking-widest border-b border-black pb-1">
            Xem Tất Cả
          </a>
        </div>
      </div>
    </section>
  );
}
