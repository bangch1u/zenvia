"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Minh Quân",
    role: "Doanh nhân",
    content: "Chất liệu áo thực sự ấn tượng. Tôi đã thử nhiều thương hiệu nhưng Zenvia mang lại cảm giác thoải mái nhất cho ngày dài làm việc.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop"
  },
  {
    name: "Hoàng Tuấn",
    role: "Giám đốc Sáng tạo",
    content: "Form áo cực chuẩn, thiết kế tối giản đúng gu của tôi. Rất dễ phối đồ và luôn mang lại vẻ ngoài chỉn chu, lịch lãm.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop"
  },
  {
    name: "Quốc Bảo",
    role: "Kỹ sư Phần mềm",
    content: "Đóng gói đẹp, giao hàng nhanh. Áo mặc mát, giặt không bị xù lông hay mất form. Chắc chắn sẽ quay lại ủng hộ thêm.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-[var(--soft-beige)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]" />
                ))}
              </div>
              <p className="text-[var(--warm-gray)] leading-relaxed mb-8 italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black">{review.name}</h4>
                  <p className="text-xs text-[var(--warm-gray)]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
