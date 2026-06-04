"use client";

import { motion } from "framer-motion";

const STORE_IMAGES = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603510842018-874d122e1bce?q=80&w=1587&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1587&auto=format&fit=crop"
];

export default function StoreExperience() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Không Gian Mua Sắm
            </h2>
            <p className="text-[var(--warm-gray)]">
              Trải nghiệm mua sắm đẳng cấp với không gian được thiết kế tối giản, tinh tế, nơi bạn có thể trực tiếp cảm nhận chất lượng của từng sản phẩm.
            </p>
          </motion.div>
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:inline-block text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-[var(--warm-gray)] hover:border-[var(--warm-gray)] transition-all"
          >
            Hệ thống cửa hàng
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[300px] md:h-[400px] rounded-lg overflow-hidden group"
            >
              <img src={STORE_IMAGES[0]} alt="Store 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[200px] md:h-[300px] rounded-lg overflow-hidden group"
            >
              <img src={STORE_IMAGES[1]} alt="Store 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-[200px] md:h-[300px] rounded-lg overflow-hidden group"
            >
              <img src={STORE_IMAGES[2]} alt="Store 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-[300px] md:h-[400px] rounded-lg overflow-hidden group"
            >
              <img src={STORE_IMAGES[3]} alt="Store 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
