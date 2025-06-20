"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the page you're looking for.</p>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/">
                <Home size={16} className="mr-2" />
                Go Home
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full">
              <Link href="/products">
                <Search size={16} className="mr-2" />
                Browse Products
              </Link>
            </Button>

            <Button variant="ghost" onClick={() => window.history.back()} className="w-full">
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
