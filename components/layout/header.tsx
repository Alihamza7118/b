"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, Phone, Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/providers/cart-provider"
import { CartModal } from "@/components/cart/cart-modal"

const categories = [
  { value: "", label: "All Categories" },
  { value: "pesticides", label: "Pesticides" },
  { value: "fertilizers", label: "Fertilizers" },
  { value: "seeds", label: "Seeds" },
  { value: "machinery", label: "Machinery" },
  { value: "hybrid-seeds", label: "Hybrid Seeds" },
  { value: "organic", label: "Organic Products" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const { items } = useCart()
  const router = useRouter()

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim() || selectedCategory) {
      const params = new URLSearchParams()
      if (searchTerm.trim()) params.append("q", searchTerm.trim())
      if (selectedCategory) params.append("category", selectedCategory)
      router.push(`/products?${params.toString()}`)
    } else {
      router.push("/products")
    }
  }

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-2 text-center text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-4">
            <span className="urdu-text">جو بھی کریں گے وہی کامیاب</span>
            <span className="hidden md:inline">DOWNLOAD THE EHTISHAM RIAZ TRADERS APP</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              USE CODE: BCSS035057
            </Badge>
            <span className="hidden md:inline text-xs">Get Rs.500 off on your first order</span>
            <span className="urdu-text">احتشام ریاض ٹریڈرز</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/products" className="text-red-600 font-semibold hover:text-red-700">
                  Hot Products
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-700">
                  Contact Us
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-green-700">
                  FAQ's
                </Link>
                <Link href="/login" className="text-gray-700 hover:text-green-700">
                  Login
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-green-700">
                  Sign Up
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Header Content */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center text-white">
                <Home size={24} />
              </div>
              <div className="urdu-text text-2xl font-bold text-green-700">احتشام ریاض ٹریڈرز</div>
            </Link>

            {/* Search Section */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full border-2 border-green-700 rounded-full overflow-hidden">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-green-700 text-white px-4 py-3 border-none outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 border-none rounded-none focus-visible:ring-0"
                />
                <Button type="submit" className="bg-green-700 hover:bg-green-800 rounded-none px-6">
                  <Search size={20} />
                </Button>
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button onClick={() => setIsCartOpen(true)} className="bg-green-700 hover:bg-green-800 relative">
                <ShoppingCart size={20} />
                <span className="ml-2 hidden md:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>

              <div className="hidden lg:flex items-center gap-2 text-green-700">
                <Phone size={20} />
                <div>
                  <div className="font-semibold">+923000434584</div>
                  <div className="text-xs text-gray-600">Customer Support</div>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="md:hidden mt-4">
            <div className="flex border-2 border-green-700 rounded-lg overflow-hidden">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-none rounded-none focus-visible:ring-0"
              />
              <Button type="submit" className="bg-green-700 hover:bg-green-800 rounded-none">
                <Search size={20} />
              </Button>
            </div>
          </form>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-t">
          <div className="container mx-auto px-4">
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4">
                <Link href="/" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/companies" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                  Companies
                </Link>
                <Link href="/blogs" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                  Blogs
                </Link>
                <Link href="/news" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                  Kissan News
                </Link>
                <Link href="/sell" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                  Sell On Ehtisham Riaz Traders
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
