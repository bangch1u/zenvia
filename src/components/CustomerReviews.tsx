"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Minh Quân",
    role: "Doanh nhân",
    content: "Chất liệu áo thực sự ấn tượng. Tôi đã thử nhiều thương hiệu nhưng Zenvia mang lại cảm giác thoải mái nhất cho ngày dài làm việc.",
    rating: 5,
    avatar: "/images/703587398_122132798739071318_857475403502014921_n.jpg"
  },
  {
    name: "Hoàng Tuấn",
    role: "Giám đốc Sáng tạo",
    content: "Form áo cực chuẩn, thiết kế tối giản đúng gu của tôi. Rất dễ phối đồ và luôn mang lại vẻ ngoài chỉn chu, lịch lãm.",
    rating: 5,
    avatar: "/images/705306012_122132798757071318_8073196219134404195_n.jpg"
  },
  {
    name: "Quốc Bảo",
    role: "Kỹ sư Phần mềm",
    content: "Đóng gói đẹp, giao hàng nhanh. Áo mặc mát, giặt không bị xù lông hay mất form. Chắc chắn sẽ quay lại ủng hộ thêm.",
    rating: 5,
    avatar: "/images/701312344_122132301309071318_3108915432690931716_n.jpg"
  }
];

export default function CustomerReviews() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".review-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );

    gsap.fromTo(".review-card",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", 
        scrollTrigger: { trigger: ".reviews-grid", start: "top 80%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[var(--soft-beige)] relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <Quote size={400} />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="review-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-[var(--warm-gray)] text-lg md:text-xl font-light">
            Hàng ngàn quý ông đã tin tưởng và lựa chọn Zenvia.
          </p>
        </div>

        <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white p-10 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[var(--luxury-gold)]/10 transition-shadow duration-500 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-[var(--charcoal-gray)] text-lg leading-relaxed mb-10 italic font-serif">
                  "{review.content}"
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-gray-100 pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{review.name}</h4>
                  <p className="text-sm text-[var(--warm-gray)]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
