"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/products"
import { useCart } from "@/components/providers/cart-provider"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const productId = Number.parseInt(params.id as string)
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
  }

  const productImages = [product.image, product.image, product.image] // Placeholder for multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-green-700">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.originalPrice && <Badge className="absolute top-4 right-4 bg-red-500">SALE</Badge>}
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-green-700" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.brand}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.rating}) • {product.soldCount}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-700">{product.priceText}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddToCart} className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart size={16} className="mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button variant="outline" size="icon">
                  <Heart size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 size={16} />
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-green-700" size={24} />
                <p className="text-xs text-gray-600">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-green-700" size={24} />
                <p className="text-xs text-gray-600">Quality Guarantee</p>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto mb-2 text-green-700" size={24} />
                <p className="text-xs text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="p-6">
              <h3 className="font-semibold mb-3">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description} This premium agricultural product is designed to meet the highest standards of
                quality and effectiveness. Suitable for professional and commercial use, it provides reliable results
                for your farming needs.
              </p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="p-6">
              <h3 className="font-semibold mb-3">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Brand:</span>
                    <span>{product.brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Category:</span>
                    <span className="capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Stock Status:</span>
                    <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Rating:</span>
                    <span>{product.rating}/5</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="p-6">
              <h3 className="font-semibold mb-3">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold">{product.rating}</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Based on customer feedback</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Excellent Product</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Great quality product, exactly as described. Fast delivery and good packaging.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                        <Star size={14} className="text-gray-300" />
                      </div>
                      <span className="text-sm font-medium">Good Value</span>
                    </div>
                    <p className="text-sm text-gray-600">Good product for the price. Would recommend to others.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </main>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}
