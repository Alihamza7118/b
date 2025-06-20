import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const companies = [
  {
    id: 1,
    name: "Bayer Crop Science",
    logo: "/images/companies/bayer.jpg",
    description: "Leading agricultural company providing innovative crop protection solutions.",
    products: ["Pesticides", "Herbicides", "Fungicides"],
    established: "1863",
    country: "Germany",
  },
  {
    id: 2,
    name: "BASF Agricultural Solutions",
    logo: "/images/companies/basf.jpg",
    description: "World's largest chemical company with comprehensive agricultural portfolio.",
    products: ["Insecticides", "Herbicides", "Seed treatments"],
    established: "1865",
    country: "Germany",
  },
  {
    id: 3,
    name: "Syngenta",
    logo: "/images/companies/syngenta.jpg",
    description: "Global agriculture company focused on crop protection and seeds.",
    products: ["Crop Protection", "Seeds", "Digital Agriculture"],
    established: "2000",
    country: "Switzerland",
  },
  {
    id: 4,
    name: "Engro Fertilizers",
    logo: "/images/companies/engro.jpg",
    description: "Pakistan's leading fertilizer manufacturer.",
    products: ["Urea", "DAP", "Complex fertilizers"],
    established: "1965",
    country: "Pakistan",
  },
]

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Companies</h1>
          <p className="text-gray-600">
            We work with leading agricultural companies worldwide to bring you the best products for your farming needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <p className="text-sm text-gray-600">
                      Est. {company.established} • {company.country}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{company.description}</p>

                <div className="flex flex-wrap gap-2">
                  {company.products.map((product) => (
                    <Badge key={product} variant="secondary">
                      {product}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
