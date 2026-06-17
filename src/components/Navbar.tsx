"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100 }, 
        { y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "100vh",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Sản phẩm", href: "#products" },
    { name: "Bộ sưu tập", href: "#lookbook" },
    { name: "Về chúng tôi", href: "#about" },
  ];

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm text-black py-4"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter">
          ZENVIA<span className="text-[var(--luxury-gold)] font-light">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-[var(--luxury-gold)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--luxury-gold)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hover:text-[var(--luxury-gold)] transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[var(--luxury-gold)] transition-colors relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className={cn(
              "absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transition-colors",
              isScrolled ? "bg-black text-white" : "bg-white text-black"
            )}>
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-full left-0 right-0 bg-white text-black border-t border-gray-100 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium tracking-wide border-b border-gray-100 pb-4 hover:text-[var(--luxury-gold)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
