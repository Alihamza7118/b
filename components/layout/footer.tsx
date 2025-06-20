import Link from "next/link"
import { Home, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-700">
                <Home size={20} />
              </div>
              <div className="urdu-text text-xl font-bold">احتشام ریاض ٹریڈرز</div>
            </div>
            <p className="text-green-100 leading-relaxed mb-6">
              Your trusted partner for quality agricultural products. We provide genuine pesticides, fertilizers, seeds,
              and farming equipment to help farmers achieve better yields.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                href="https://wa.me/923000434584"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-green-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-green-100 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-green-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=pesticides"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Pesticides
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fertilizers"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link href="/products?category=seeds" className="text-green-100 hover:text-white transition-colors">
                  Seeds
                </Link>
              </li>
              <li>
                <Link href="/products?category=machinery" className="text-green-100 hover:text-white transition-colors">
                  Machinery
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=hybrid-seeds"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Hybrid Seeds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-200" />
                <div>
                  <Link href="tel:+923000434584" className="text-green-100 hover:text-white transition-colors">
                    +92 300 0434584
                  </Link>
                  <br />
                  <Link href="tel:+923043573844" className="text-green-100 hover:text-white transition-colors">
                    +92 304 3573844
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-200" />
                <Link
                  href="mailto:craftsltd123@gmail.com"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  craftsltd123@gmail.com
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-200 mt-1" />
                <div className="text-green-100">
                  <div>Ehtisham Riaz Traders</div>
                  <div>Agricultural Products Supplier</div>
                  <div>Pakistan</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-400"></i>
                <Link href="https://wa.me/923000434584" className="text-green-100 hover:text-white transition-colors">
                  WhatsApp Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-green-100 text-sm">
            © 2024 Ehtisham Riaz Traders. All rights reserved. | Quality Agricultural Products for Better Farming
          </p>
        </div>
      </div>
    </footer>
  )
}
