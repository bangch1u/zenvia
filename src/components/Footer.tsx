import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--deep-black)] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter block mb-6">
              ZENVIA<span className="text-[var(--luxury-gold)]">.</span>
            </Link>
            <p className="text-[var(--warm-gray)] text-sm leading-relaxed mb-6">
              Thương hiệu thời trang nam cao cấp. Mang đến sự tự tin và phong cách tối giản cho quý ông hiện đại.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider text-[var(--soft-beige)]">Sản Phẩm</h4>
            <ul className="space-y-4 text-[var(--warm-gray)] text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Polo Basic</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Polo Thể thao</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Polo Dài tay</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hàng Mới Về</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider text-[var(--soft-beige)]">Hỗ Trợ</h4>
            <ul className="space-y-4 text-[var(--warm-gray)] text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hướng dẫn chọn size</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Thanh toán & Vận chuyển</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp (FAQ)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider text-[var(--soft-beige)]">Liên Hệ</h4>
            <ul className="space-y-4 text-[var(--warm-gray)] text-sm">
              <li>Hotline: 0987 654 321</li>
              <li>Email: hello@zenvia.vn</li>
              <li>Địa chỉ: 123 Đường Phong Cách, Quận 1, TP. HCM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[var(--warm-gray)] text-xs">
          <p>&copy; {new Date().getFullYear()} Zenvia Fashion. Tất cả quyền được bảo lưu.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/profile.php?id=61582139553384" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
