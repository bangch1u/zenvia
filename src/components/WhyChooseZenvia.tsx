"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Droplets, Wind, ShieldCheck, Shirt, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: <Sparkles className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Chất liệu cao cấp",
    description: "Sử dụng sợi cotton tự nhiên, kết hợp spandex tạo độ co giãn, mềm mại và đứng form."
  },
  {
    icon: <Shirt className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Form dáng hoàn hảo",
    description: "Nghiên cứu kỹ lưỡng số đo nam giới Việt Nam, mang đến form áo vừa vặn, tôn dáng."
  },
  {
    icon: <Wind className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Thoáng khí tối đa",
    description: "Công nghệ dệt tổ ong giúp áo luôn khô thoáng, thấm hút mồ hôi tốt suốt cả ngày dài."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Độ bền vượt trội",
    description: "Không bai dão, không xù lông sau nhiều lần giặt. Giữ màu sắc luôn như mới."
  },
  {
    icon: <Droplets className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Dễ dàng bảo quản",
    description: "Chất vải chống nhăn tự nhiên, tiết kiệm thời gian là ủi cho người bận rộn."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 mb-4 text-[var(--luxury-gold)]" />,
    title: "Phong cách hiện đại",
    description: "Thiết kế tối giản, tinh tế, dễ dàng kết hợp cho mọi hoàn cảnh từ công sở đến dạo phố."
  }
];

export default function WhyChooseZenvia() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Tại Sao Chọn Zenvia?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--warm-gray)] text-lg"
          >
            Chúng tôi chăm chút từng đường kim mũi chỉ, lựa chọn chất liệu khắt khe nhất để tạo nên chiếc áo Polo hoàn hảo cho bạn.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-[var(--luxury-gold)]/30 transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[var(--warm-gray)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
