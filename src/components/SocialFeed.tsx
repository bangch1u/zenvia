"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SOCIAL_POSTS = [
  "/images/701119791_122132301291071318_1447634558021064937_n.jpg",
  "/images/701312344_122132301309071318_3108915432690931716_n.jpg",
  "/images/702044034_122132301213071318_6700617365759711061_n.jpg",
  "/images/704811689_122132798709071318_6948687205746393980_n.jpg"
];

export default function SocialFeed() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".social-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
    );

    gsap.fromTo(".social-post",
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", 
        scrollTrigger: { trigger: ".social-grid", start: "top 85%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[var(--soft-beige)]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="social-header mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            @ZenviaFashion
          </h2>
          <p className="text-[var(--warm-gray)] text-lg md:text-xl font-light mb-8">
            Chia sẻ khoảnh khắc của bạn cùng Zenvia với hashtag <span className="font-semibold text-black">#ZenviaMen</span>
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=61582139553384" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-blue-600">
              <FacebookIcon />
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-pink-600">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="social-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SOCIAL_POSTS.map((img, index) => (
            <a
              href="https://www.facebook.com/profile.php?id=61582139553384"
              target="_blank"
              rel="noreferrer"
              key={index}
              className="social-post relative aspect-square overflow-hidden group block rounded-sm"
            >
              <img 
                src={img} 
                alt={`Social ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"><FacebookIcon /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
