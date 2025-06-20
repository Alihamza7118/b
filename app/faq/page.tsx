"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of agricultural products do you sell?",
    answer:
      "We offer a comprehensive range of agricultural products including pesticides, insecticides, fertilizers, seeds, and organic farming solutions from leading brands like Bayer, BASF, and Syngenta.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      "Yes, we provide delivery services across Pakistan. Delivery charges may apply based on location and order value. Free delivery is available for orders above Rs. 5,000.",
  },
  {
    question: "Are your products genuine and authentic?",
    answer:
      "We source all our products directly from authorized distributors and manufacturers. All products come with proper documentation and quality certificates.",
  },
  {
    question: "Do you offer technical support for product usage?",
    answer:
      "Yes, our team of agricultural experts provides technical support and guidance on proper product usage, application rates, and timing for optimal results.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including cash on delivery, bank transfers, mobile banking (JazzCash, EasyPaisa), and major credit/debit cards.",
  },
  {
    question: "Can I return products if I'm not satisfied?",
    answer:
      "Yes, we have a return policy for unused products in original packaging within 7 days of purchase. Please contact us for return procedures.",
  },
  {
    question: "Do you offer bulk discounts for large orders?",
    answer:
      "Yes, we offer attractive discounts for bulk orders. Please contact our sales team for customized pricing based on your requirements.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via SMS and email. You can also call our customer service for order updates.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about our products and services.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-green-700 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-green-700 flex-shrink-0" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
