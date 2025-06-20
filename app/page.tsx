"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Eye, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products, categories } from "@/lib/products"
import { useCart } from "@/components/providers/cart-provider"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const heroSlides = [
  {
    title: "Premium Agricultural Products",
    subtitle: "بہترین زرعی مصنوعات",
    description: "Quality pesticides, fertilizers, and seeds for better farming",
    image: "/images/hero/agriculture.jpg",
  },
  {
    title: "Trusted by Farmers",
    subtitle: "کسانوں کا بھروسہ",
    description: "Over 10,000+ satisfied customers across Pakistan",
    image: "/images/hero/farmers.jpg",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addItem } = useCart()

  const featuredProducts = products.slice(0, 12)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceText: product.priceText,
      image: product.image,
      brand: product.brand,
      category: product.category,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="bg-green-700 text-white p-4 rounded-t-lg">
                <h2 className="font-semibold flex items-center gap-2">
                  <i className="fas fa-bars"></i>
                  All Categories
                </h2>
              </div>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="relative h-96 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 flex items-center justify-center text-white">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroSlides[currentSlide].title}</h1>
                  <p className="text-xl md:text-2xl mb-3 urdu-text">{heroSlides[currentSlide].subtitle}</p>
                  <p className="text-lg mb-6">{heroSlides[currentSlide].description}</p>
                  <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100" asChild>
                    <Link href="/products">Shop Now</Link>
                  </Button>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              >
                <ChevronLeft size={24} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              >
                <ChevronRight size={24} />
              </Button>
            </div>

            {/* Featured Products */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <Button variant="outline" asChild>
                  <Link href="/products" className="flex items-center gap-2">
                    View All <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <Card key={product.id} className="product-card group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isOnSale && <Badge className="absolute top-2 right-2 bg-red-500">SALE</Badge>}
                      <Badge variant="secondary" className="absolute top-2 left-2 text-xs">
                        {product.brand}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({product.soldCount})</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-green-700">{product.priceText}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={() => handleAddToCart(product)} className="flex-1">
                          <ShoppingCart size={16} className="mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href={`/products/${product.id}`}>
                            <Eye size={16} />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}
