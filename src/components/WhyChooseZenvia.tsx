"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, Droplets, Wind, ShieldCheck, Shirt, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: <Sparkles className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Chất liệu cao cấp",
    description: "Sử dụng sợi cotton tự nhiên, kết hợp spandex tạo độ co giãn, mềm mại và đứng form."
  },
  {
    icon: <Shirt className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Form dáng hoàn hảo",
    description: "Nghiên cứu kỹ lưỡng số đo nam giới Việt Nam, mang đến form áo vừa vặn, tôn dáng."
  },
  {
    icon: <Wind className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Thoáng khí tối đa",
    description: "Công nghệ dệt tổ ong giúp áo luôn khô thoáng, thấm hút mồ hôi tốt suốt cả ngày dài."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Độ bền vượt trội",
    description: "Không bai dão, không xù lông sau nhiều lần giặt. Giữ màu sắc luôn như mới."
  },
  {
    icon: <Droplets className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Dễ dàng bảo quản",
    description: "Chất vải chống nhăn tự nhiên, tiết kiệm thời gian là ủi cho người bận rộn."
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 mb-6 text-[var(--luxury-gold)]" strokeWidth={1.5} />,
    title: "Phong cách hiện đại",
    description: "Thiết kế tối giản, tinh tế, dễ dàng kết hợp cho mọi hoàn cảnh từ công sở đến dạo phố."
  }
];

export default function WhyChooseZenvia() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.fromTo(".why-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );

    // Features stagger animation
    gsap.fromTo(".why-feature-card",
      { opacity: 0, y: 40, scale: 0.95 },
      { 
        opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", 
        scrollTrigger: { trigger: ".why-grid", start: "top 85%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 why-header">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Tại Sao Chọn Zenvia?
          </h2>
          <p className="text-[var(--warm-gray)] text-lg md:text-xl font-light leading-relaxed">
            Chúng tôi chăm chút từng đường kim mũi chỉ, lựa chọn chất liệu khắt khe nhất để tạo nên chiếc áo Polo hoàn hảo cho bạn.
          </p>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="why-feature-card p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:shadow-[var(--luxury-gold)]/10 hover:border-[var(--luxury-gold)]/30 transition-all duration-500 group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-[var(--warm-gray)] leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
