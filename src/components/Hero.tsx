"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const HERO_MODEL_IMAGE = "/images/704811689_122132798709071318_6948687205746393980_n.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline();
    
    // Background zoom out entrance
    tl.fromTo(".hero-bg", 
      { scale: 1.2, filter: "brightness(0.2)" }, 
      { scale: 1, filter: "brightness(0.8)", duration: 2.5, ease: "power3.out" }
    );
    
    // Staggered text entrance
    tl.fromTo(".hero-text-item", 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" },
      "-=1.5"
    );
    
    // Buttons fade in
    tl.fromTo(".hero-btn", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=1.0"
    );
    
    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 48,
      duration: 1.5,
      repeat: -1,
      ease: "power2.inOut"
    });

    // Gentle floating animations for decorative elements
    gsap.to(".floating-element-1", {
      y: -25,
      x: 15,
      rotation: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-element-2", {
      y: 35,
      x: -20,
      rotation: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    // Background parallax on scroll
    gsap.to(".hero-bg-parallax", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: container });

  useGSAP(() => {
    if (isModalMounted) {
      gsap.fromTo(".modal-bg", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(".modal-content", 
        { opacity: 0, y: 40, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );
    }
  }, { dependencies: [isModalMounted], scope: container });

  const closeModal = () => {
    gsap.to(".modal-content", { opacity: 0, y: 30, scale: 0.95, duration: 0.3, ease: "power2.in" });
    gsap.to(".modal-bg", { opacity: 0, duration: 0.3, delay: 0.1, onComplete: () => {
      setIsModalMounted(false);
      setIsSuccess(false); // Reset on close
    }});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section ref={container} className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 z-10 mix-blend-multiply" />
        <div className="hero-bg-parallax w-full h-[120%] -top-[10%] absolute">
          <img
            src={HERO_MODEL_IMAGE}
            alt="Zenvia Fashion Hero"
            className="hero-bg w-full h-full object-cover object-[center_30%]"
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-element-1 absolute top-[25%] left-[8%] w-32 h-32 rounded-full border border-white/10 blur-[1px] hidden md:block pointer-events-none z-10" />
      <div className="floating-element-2 absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full border border-[var(--luxury-gold)]/20 blur-[2px] hidden md:block pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-32 md:justify-center md:pb-0 items-center text-center px-6 pt-20">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <span className="hero-text-item text-[var(--luxury-gold)] drop-shadow-md uppercase tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-base font-semibold mb-4 md:mb-6 block">
            Khám Phá Phong Cách Mới
          </span>
          <h1 className="hero-text-item text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
            SỰ HOÀN MỸ <br/> <span className="font-light italic text-white/90">TRONG TỪNG SỢI VẢI</span>
          </h1>
          <p className="hero-text-item hidden md:block text-lg md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto tracking-wide">
            Thiết kế đương đại kết hợp nghệ thuật thủ công tinh xảo, tạo nên chuẩn mực mới cho quý ông hiện đại.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto mt-4 md:mt-0">
            <Button 
              size="lg" 
              onClick={() => setIsModalMounted(true)}
              className="hero-btn w-full sm:w-auto px-8 md:px-12 py-6 md:py-7 text-base md:text-lg bg-white text-black hover:bg-[var(--luxury-gold)] hover:text-white hover:scale-105 transition-all duration-500 rounded-none shadow-xl"
            >
              Mua Ngay
            </Button>
            <Button size="lg" variant="outline" className="hero-btn w-full sm:w-auto px-8 md:px-12 py-6 md:py-7 text-base md:text-lg border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none glass hidden sm:flex">
              Xem Bộ Sưu Tập
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 md:gap-3">
        <span className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase hidden md:block">Cuộn xuống</span>
        <div className="w-[1px] h-12 md:h-16 bg-white/20 relative overflow-hidden">
          <div className="scroll-indicator w-full h-1/2 bg-[var(--luxury-gold)] absolute top-0" />
        </div>
      </div>

      {/* Consultation Modal */}
      {isModalMounted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="modal-bg absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeModal}
          />
          <div className="modal-content relative w-full max-w-md bg-white rounded-sm shadow-2xl overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-10"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-black">Nhận Tư Vấn</h3>
                <p className="text-[var(--warm-gray)] text-sm font-light">
                  Để lại thông tin, chuyên gia của Zenvia sẽ liên hệ và hỗ trợ bạn chọn size chuẩn nhất.
                </p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-gray-500">Họ và tên</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full border-b border-gray-300 py-2 bg-transparent text-black placeholder-gray-300 focus:outline-none focus:border-[var(--luxury-gold)] transition-colors rounded-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-gray-500">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder="0912 345 678"
                      className="w-full border-b border-gray-300 py-2 bg-transparent text-black placeholder-gray-300 focus:outline-none focus:border-[var(--luxury-gold)] transition-colors rounded-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 text-base bg-black text-white hover:bg-[var(--luxury-gold)] transition-all duration-300 rounded-none shadow-lg mt-4 disabled:opacity-70 disabled:hover:bg-black"
                  >
                    {isSubmitting ? "Đang xử lý..." : "Gửi Yêu Cầu"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Gửi thành công!</h4>
                  <p className="text-[var(--warm-gray)] text-sm">
                    Cảm ơn bạn. Zenvia sẽ sớm liên hệ qua số điện thoại bạn vừa cung cấp.
                  </p>
                  <Button 
                    onClick={closeModal}
                    variant="outline"
                    className="w-full mt-6 py-6 rounded-none border-gray-200 text-black hover:bg-gray-50 transition-colors"
                  >
                    Đóng
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
