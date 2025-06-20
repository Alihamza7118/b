// Global variables
let cart = JSON.parse(localStorage.getItem("cart")) || []
let currentSlide = 0

// Hero slider data
const slides = [
  {
    title: "Citrus Care Programs",
    subtitle: "کھٹے پھلوں کے باغات کے لیے مکمل کنٹرولرز",
    description: "Crop Nutrition, Disease and Pest Controllers",
  },
  {
    title: "Vegetable Protection",
    subtitle: "سبزیوں کی حفاظت کے لیے بہترین حل",
    description: "Complete Solutions for Vegetable Farming",
  },
  {
    title: "Organic Farming",
    subtitle: "قدرتی کھیتی کے جدید طریقے",
    description: "Modern Techniques for Organic Agriculture",
  },
]

// Real products data from kissanghar.pk
const featuredProducts = [
  {
    id: 1,
    name: "Adengo Xtra 465ml",
    price: "Rs. 2,185",
    originalPrice: "Rs. 2,615",
    rating: 4.5,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description:
      "Advanced herbicide for effective weed control in corn and other crops. Pre and post-emergence application.",
    brand: "Bayer",
    inStock: true,
    features: ["Pre & post emergence", "Broad spectrum", "Long lasting"],
    soldCount: "145 Sold",
  },
  {
    id: 2,
    name: "Green Gold Fertilizer",
    price: "Rs. 1,800",
    originalPrice: "Rs. 2,230",
    rating: 4.6,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "fertilizers",
    description: "Premium organic fertilizer for enhanced plant growth and soil health improvement.",
    brand: "Green Gold",
    inStock: true,
    features: ["Organic certified", "Soil health", "Enhanced growth"],
    soldCount: "63 Sold",
  },
  {
    id: 3,
    name: "Regent 80wg Insecticide",
    price: "Rs. 1,199",
    originalPrice: "Rs. 1,629",
    rating: 4.8,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Systemic insecticide for control of termites, aphids and other soil and foliar pests.",
    brand: "BASF",
    inStock: true,
    features: ["Systemic action", "Soil & foliar", "Termite control"],
    soldCount: "2149 Sold",
  },
  {
    id: 4,
    name: "Silikalzium 1kg",
    price: "Rs. 1,645",
    originalPrice: "Rs. 2,075",
    rating: 4.4,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "fertilizers",
    description: "Silicon and calcium supplement for stronger plant structure and disease resistance.",
    brand: "AgriTech",
    inStock: true,
    features: ["Silicon supplement", "Disease resistance", "Plant strength"],
    soldCount: "92 Sold",
  },
  {
    id: 5,
    name: "Vita Humate 1Kg",
    price: "Rs. 595",
    originalPrice: "Rs. 1,025",
    rating: 4.3,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "organic",
    description: "Organic humic acid supplement for improved nutrient uptake and soil conditioning.",
    brand: "Vita",
    inStock: true,
    features: ["Humic acid", "Nutrient uptake", "Soil conditioner"],
    soldCount: "14 Sold",
  },
  {
    id: 6,
    name: "Natural Gypsum",
    price: "Rs. 895",
    originalPrice: "Rs. 1,325",
    rating: 4.2,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "fertilizers",
    description: "Natural gypsum for soil structure improvement and calcium sulfur nutrition.",
    brand: "Natural",
    inStock: true,
    features: ["Soil structure", "Calcium sulfur", "Natural source"],
    soldCount: "220 Sold",
  },
  {
    id: 7,
    name: "Martha 1kg Fungicide",
    price: "Rs. 1,295",
    originalPrice: "Rs. 1,725",
    rating: 4.5,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Broad spectrum fungicide for control of various fungal diseases in crops.",
    brand: "Martha",
    inStock: true,
    features: ["Broad spectrum", "Fungal control", "Preventive action"],
    soldCount: "203 Sold",
  },
  {
    id: 8,
    name: "Rhizophos Bio Fertilizer",
    price: "Rs. 1,595",
    originalPrice: "Rs. 2,025",
    rating: 4.7,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "organic",
    description: "Phosphorus solubilizing bacteria for enhanced phosphorus availability to plants.",
    brand: "Bio Tech",
    inStock: true,
    features: ["Bio fertilizer", "Phosphorus solubilizing", "Root development"],
    soldCount: "2037 Sold",
  },
  {
    id: 9,
    name: "Bhakkar Star Cotton Seeds",
    price: "Rs. 7,550",
    originalPrice: "Rs. 7,980",
    rating: 4.6,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "High yielding cotton variety with excellent fiber quality and disease resistance.",
    brand: "Bhakkar",
    inStock: true,
    features: ["High yield", "Quality fiber", "Disease resistant"],
    soldCount: "38 Sold",
  },
  {
    id: 10,
    name: "Cardinal 80wg Insecticide",
    price: "Rs. 635",
    originalPrice: "Rs. 1,065",
    rating: 4.3,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Effective insecticide for control of sucking and chewing pests in various crops.",
    brand: "Cardinal",
    inStock: true,
    features: ["Sucking pests", "Chewing pests", "Multi-crop"],
    soldCount: "446 Sold",
  },
  {
    id: 11,
    name: "Xuanlijing 45wg",
    price: "Rs. 675",
    originalPrice: "Rs. 1,105",
    rating: 4.2,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Advanced insecticide formulation for effective pest management in crops.",
    brand: "Xuanlijing",
    inStock: true,
    features: ["Advanced formula", "Pest management", "Effective control"],
    soldCount: "75 Sold",
  },
  {
    id: 12,
    name: "Agenda 25EC Herbicide",
    price: "Rs. 14,250",
    originalPrice: "Rs. 14,680",
    rating: 4.4,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Selective herbicide for post-emergence weed control in rice and other crops.",
    brand: "Agenda",
    inStock: true,
    features: ["Selective herbicide", "Post-emergence", "Rice specialist"],
    soldCount: "38 Sold",
  },
  {
    id: 13,
    name: "Confest 25wg",
    price: "Rs. 465",
    originalPrice: "Rs. 895",
    rating: 4.1,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Systemic insecticide for control of aphids, whiteflies and other sucking pests.",
    brand: "Confest",
    inStock: true,
    features: ["Systemic action", "Sucking pests", "Affordable price"],
    soldCount: "115 Sold",
  },
  {
    id: 14,
    name: "Silikalzium 2kg",
    price: "Rs. 3,210",
    originalPrice: "Rs. 3,640",
    rating: 4.4,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "fertilizers",
    description: "Large pack silicon and calcium supplement for commercial farming operations.",
    brand: "AgriTech",
    inStock: true,
    features: ["Commercial pack", "Silicon calcium", "Bulk savings"],
    soldCount: "104 Sold",
  },
  {
    id: 15,
    name: "Rhodes Grass Seeds",
    price: "Rs. 4,895",
    originalPrice: "Rs. 5,325",
    rating: 4.5,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "High quality Rhodes grass seeds for fodder production and pasture establishment.",
    brand: "Pasture Pro",
    inStock: true,
    features: ["Fodder grass", "High quality", "Pasture establishment"],
    soldCount: "106 Sold",
  },
  {
    id: 16,
    name: "Phytofix 100ml",
    price: "Rs. 385",
    originalPrice: "Rs. 815",
    rating: 4.6,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXpeD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "plant-growth",
    description: "Plant growth regulator for improved flowering, fruit set and yield enhancement.",
    brand: "Phyto",
    inStock: true,
    features: ["Growth regulator", "Flowering boost", "Yield enhancement"],
    soldCount: "3007 Sold",
  },
  {
    id: 17,
    name: "Nawan BF 18 Seeds",
    price: "Rs. 3,950",
    originalPrice: "Rs. 4,380",
    rating: 4.3,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "High yielding crop variety with improved disease resistance and quality traits.",
    brand: "Nawan",
    inStock: true,
    features: ["High yield", "Disease resistant", "Quality traits"],
    soldCount: "New",
  },
  {
    id: 18,
    name: "Nawan Gatawa Seeds",
    price: "Rs. 3,950",
    originalPrice: "Rs. 4,380",
    rating: 4.4,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "Premium variety seeds with excellent germination rate and crop performance.",
    brand: "Nawan",
    inStock: true,
    features: ["Premium variety", "High germination", "Excellent performance"],
    soldCount: "New",
  },
  {
    id: 19,
    name: "Welcomes Hybrid Seeds",
    price: "Rs. 9,500",
    originalPrice: "Rs. 9,930",
    rating: 4.5,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "hybrid-seeds",
    description: "Advanced hybrid seeds with superior yield potential and stress tolerance.",
    brand: "Welcomes",
    inStock: true,
    features: ["Advanced hybrid", "Superior yield", "Stress tolerance"],
    soldCount: "New",
  },
  {
    id: 20,
    name: "Red Lady Papaya Seeds",
    price: "Rs. 21,500",
    originalPrice: "Rs. 21,930",
    rating: 4.7,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "Premium papaya variety with excellent fruit quality and high market value.",
    brand: "Red Lady",
    inStock: true,
    features: ["Premium variety", "Excellent quality", "High value"],
    soldCount: "New",
  },
  {
    id: 21,
    name: "Kohenoor Rice Seeds",
    price: "Rs. 5,950",
    originalPrice: "Rs. 6,380",
    rating: 4.6,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC-sizePSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "High quality rice variety with excellent grain characteristics and yield.",
    brand: "Kohenoor",
    inStock: true,
    features: ["High quality", "Excellent grain", "Good yield"],
    soldCount: "New",
  },
  {
    id: 22,
    name: "Basmati 515 Seeds",
    price: "Rs. 3,980",
    originalPrice: "Rs. 4,410",
    rating: 4.5,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "seeds",
    description: "Premium basmati rice variety with excellent aroma and grain quality.",
    brand: "Basmati",
    inStock: true,
    features: ["Premium basmati", "Excellent aroma", "Quality grain"],
    soldCount: "166 Sold",
  },
  {
    id: 23,
    name: "Humber 500ML",
    price: "Rs. 850",
    originalPrice: "Rs. 1,280",
    rating: 4.2,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQLy93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Effective pest control solution for various agricultural applications.",
    brand: "Humber",
    inStock: true,
    features: ["Pest control", "Multi-purpose", "Cost effective"],
    soldCount: "New",
  },
  {
    id: 24,
    name: "Gabbar 500ML",
    price: "Rs. 1,150",
    originalPrice: "Rs. 1,580",
    rating: 4.3,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "pesticides",
    description: "Powerful insecticide for effective control of major crop pests.",
    brand: "Gabbar",
    inStock: true,
    features: ["Powerful formula", "Major pests", "Effective control"],
    soldCount: "New",
  },
  {
    id: 25,
    name: "LCI Amino Acids",
    price: "Rs. 3,450",
    originalPrice: "Rs. 3,880",
    rating: 4.4,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
    category: "fertilizers",
    description: "Essential amino acids supplement for enhanced plant metabolism and growth.",
    brand: "LCI",
    inStock: true,
    features: ["Amino acids", "Enhanced metabolism", "Growth boost"],
    soldCount: "New",
  },
]

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  loadFeaturedProducts()
  loadWeatherForecast()
  debugProducts() // Add this line

  // Auto-slide hero section
  setInterval(nextSlide, 5000)
})

// Hero slider functions
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  updateHeroContent()
}

function previousSlide() {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  updateHeroContent()
}

function updateHeroContent() {
  const slide = slides[currentSlide]
  document.getElementById("heroTitle").textContent = slide.title
  document.getElementById("heroSubtitle").textContent = slide.subtitle
  document.getElementById("heroDescription").textContent = slide.description
}

// Search functionality
function performSearch() {
  const searchTerm = document.getElementById("searchInput").value.trim()
  const category = document.getElementById("searchCategory").value

  if (searchTerm || category) {
    // For now, redirect to products page with search parameters
    const params = new URLSearchParams()
    if (searchTerm) params.append("q", searchTerm)
    if (category) params.append("category", category)

    // Store search data for products page
    localStorage.setItem("searchTerm", searchTerm)
    localStorage.setItem("searchCategory", category)

    window.location.href = `products.html?${params.toString()}`
  } else {
    // If no search term, just go to products page
    window.location.href = "products.html"
  }
}

// Enter key search
document.getElementById("searchInput")?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch()
  }
})

// Load featured products with enhanced display
function loadFeaturedProducts() {
  const container = document.getElementById("featuredProducts")
  if (!container) return

  container.innerHTML = featuredProducts
    .map(
      (product) => `
        <div class="product-card" onclick="viewProduct(${product.id})" style="cursor: pointer; transition: transform 0.3s;">
            <div class="product-image-container" style="position: relative; overflow: hidden;">
                <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #e8f5e8, #c8e6c8); display: flex; align-items: center; justify-content: center; font-size: 48px; color: #2e7d32;">
                    🌱
                </div>
                ${product.originalPrice ? `<div style="position: absolute; top: 10px; right: 10px; background: #e53935; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">SALE</div>` : ""}
                <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 8px; border-radius: 12px; font-size: 11px;">${product.brand}</div>
            </div>
            <div class="product-info" style="padding: 15px;">
                <div class="product-name" style="font-weight: bold; margin-bottom: 8px; color: #333; font-size: 16px; line-height: 1.3;">${product.name}</div>
                <div class="product-description" style="color: #666; font-size: 13px; margin-bottom: 10px; line-height: 1.4; height: 40px; overflow: hidden;">${product.description}</div>
                <div class="product-price-container" style="margin-bottom: 10px;">
                    <span class="product-price" style="color: #2e7d32; font-size: 18px; font-weight: bold;">${product.price}</span>
                    ${product.originalPrice ? `<span style="color: #999; font-size: 14px; text-decoration: line-through; margin-left: 8px;">${product.originalPrice}</span>` : ""}
                </div>
                <div class="product-rating" style="display: flex; align-items: center; gap: 5px; margin-bottom: 12px;">
                    <span class="stars" style="color: #ffa726;">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span style="font-size: 14px; color: #666;">(${product.rating})</span>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" style="flex: 1; background: #2e7d32; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: background 0.3s;">
                        Add to Cart
                    </button>
                    <button onclick="event.stopPropagation(); viewProduct(${product.id})" style="background: #fff; color: #2e7d32; border: 2px solid #2e7d32; padding: 10px 15px; border-radius: 5px; cursor: pointer;">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Load weather forecast
function loadWeatherForecast() {
  const container = document.getElementById("weatherForecast")
  if (!container) return

  const forecast = [
    { day: "TUE 17", temp: "32° | 18°", humidity: "15%" },
    { day: "WED 18", temp: "34° | 20°", humidity: "10%" },
    { day: "THU 19", temp: "31° | 19°", humidity: "20%" },
    { day: "FRI 20", temp: "29° | 17°", humidity: "25%" },
    { day: "SAT 21", temp: "33° | 21°", humidity: "12%" },
    { day: "SUN 22", temp: "35° | 22°", humidity: "8%" },
  ]

  container.innerHTML = forecast
    .map(
      (day) => `
        <div class="forecast-day">
            <div class="forecast-date">${day.day}</div>
            <div class="forecast-icon">☀️</div>
            <div class="forecast-temp">${day.temp}</div>
            <div class="forecast-humidity">${day.humidity}</div>
        </div>
    `,
    )
    .join("")
}

// Cart functions
function addToCart(productId) {
  const product = featuredProducts.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()

  // Show success message
  showNotification("Product added to cart!")
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  const cartCountElement = document.getElementById("cartCount")
  if (cartCountElement) {
    cartCountElement.textContent = count
  }
}

function openCart() {
  const modal = document.getElementById("cartModal")
  const cartItems = document.getElementById("cartItems")

  if (!modal || !cartItems) {
    console.error("Cart modal elements not found")
    return
  }

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <i class="fas fa-shopping-cart" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
        <p style="color: #666; font-size: 18px;">Your cart is empty</p>
        <p style="color: #999; font-size: 14px;">Add some products to get started!</p>
      </div>
    `
  } else {
    const total = cart.reduce((sum, item) => {
      const price = Number.parseInt(item.price.replace(/[^0-9]/g, "")) || 0
      return sum + price * item.quantity
    }, 0)

    cartItems.innerHTML = `
      <div class="cart-items-list">
        ${cart
          .map(
            (item) => `
          <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #eee;">
            <div style="flex: 1;">
              <div style="font-weight: bold; margin-bottom: 5px;">${item.name}</div>
              <div style="color: #666; font-size: 14px;">Brand: ${item.brand || "N/A"}</div>
              <div style="color: #2e7d32; font-weight: bold; margin-top: 5px;">${item.price} x ${item.quantity}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" style="width: 30px; height: 30px; border: 1px solid #ddd; background: white; border-radius: 50%; cursor: pointer;">-</button>
              <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
              <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" style="width: 30px; height: 30px; border: 1px solid #ddd; background: white; border-radius: 50%; cursor: pointer;">+</button>
              <button onclick="removeFromCart(${item.id})" style="background: #e53935; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-left: 10px;">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      <div style="padding: 20px; border-top: 2px solid #eee; background: #f8f9fa;">
        <div style="display: flex; justify-content: between; align-items: center; font-size: 18px; font-weight: bold; color: #2e7d32;">
          <span>Total: Rs. ${total.toLocaleString()}</span>
        </div>
      </div>
    `
  }

  modal.style.display = "block"
  document.body.style.overflow = "hidden" // Prevent background scrolling
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  const itemIndex = cart.findIndex((item) => item.id === productId)
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
    openCart() // Refresh cart display
  }
}

function closeCart() {
  const modal = document.getElementById("cartModal")
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto" // Restore scrolling
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  openCart() // Refresh cart display
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  window.location.href = "checkout.html"
}

// View product details
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`
}

// WhatsApp integration
function openWhatsApp() {
  const message = encodeURIComponent("Hello! I am interested in your agricultural products from Ehtisham Riaz Traders.")
  window.open(`https://wa.me/923000434584?text=${message}`, "_blank")
}

// Notification system
function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2e7d32;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Add CSS for notification animation
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`
document.head.appendChild(style)

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    closeCart()
  }
}

// Debug function to check if products are loading
function debugProducts() {
  console.log("Featured Products:", featuredProducts.length)
  console.log("First product:", featuredProducts[0])
  const container = document.getElementById("featuredProducts")
  console.log("Container found:", !!container)
}
