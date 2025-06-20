// Real products data from kissanghar.pk - comprehensive catalog
const allProducts = [
  {
    id: 1,
    name: "Adengo Xtra 465ml",
    price: 2185,
    priceText: "Rs. 2,185",
    originalPrice: "Rs. 2,615",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200&text=Adengo+Xtra",
    category: "pesticides",
    description:
      "Advanced herbicide for effective weed control in corn and other crops. Pre and post-emergence application.",
    brand: "Bayer",
    inStock: true,
    reviews: 145,
  },
  {
    id: 2,
    name: "Green Gold Fertilizer",
    price: 1800,
    priceText: "Rs. 1,800",
    originalPrice: "Rs. 2,230",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200&text=Green+Gold",
    category: "fertilizers",
    description: "Premium organic fertilizer for enhanced plant growth and soil health improvement.",
    brand: "Green Gold",
    inStock: true,
    reviews: 63,
  },
  {
    id: 3,
    name: "Regent 80wg Insecticide",
    price: 1199,
    priceText: "Rs. 1,199",
    originalPrice: "Rs. 1,629",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200&text=Regent+80wg",
    category: "pesticides",
    description: "Systemic insecticide for control of termites, aphids and other soil and foliar pests.",
    brand: "BASF",
    inStock: true,
    reviews: 2149,
  },
  {
    id: 4,
    name: "Silikalzium 1kg",
    price: 1645,
    priceText: "Rs. 1,645",
    originalPrice: "Rs. 2,075",
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=200&text=Silikalzium",
    category: "fertilizers",
    description: "Silicon and calcium supplement for stronger plant structure and disease resistance.",
    brand: "AgriTech",
    inStock: true,
    reviews: 92,
  },
  {
    id: 5,
    name: "Vita Humate 1Kg",
    price: 595,
    priceText: "Rs. 595",
    originalPrice: "Rs. 1,025",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200&text=Vita+Humate",
    category: "organic",
    description: "Organic humic acid supplement for improved nutrient uptake and soil conditioning.",
    brand: "Vita",
    inStock: true,
    reviews: 14,
  },
  {
    id: 6,
    name: "Natural Gypsum",
    price: 895,
    priceText: "Rs. 895",
    originalPrice: "Rs. 1,325",
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=200&text=Natural+Gypsum",
    category: "fertilizers",
    description: "Natural gypsum for soil structure improvement and calcium sulfur nutrition.",
    brand: "Natural",
    inStock: true,
    reviews: 220,
  },
  {
    id: 7,
    name: "Martha 1kg Fungicide",
    price: 1295,
    priceText: "Rs. 1,295",
    originalPrice: "Rs. 1,725",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200&text=Martha+1kg",
    category: "pesticides",
    description: "Broad spectrum fungicide for control of various fungal diseases in crops.",
    brand: "Martha",
    inStock: true,
    reviews: 203,
  },
  {
    id: 8,
    name: "Rhizophos Bio Fertilizer",
    price: 1595,
    priceText: "Rs. 1,595",
    originalPrice: "Rs. 2,025",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200&text=Rhizophos",
    category: "organic",
    description: "Phosphorus solubilizing bacteria for enhanced phosphorus availability to plants.",
    brand: "Bio Tech",
    inStock: true,
    reviews: 2037,
  },
  {
    id: 9,
    name: "Bhakkar Star Cotton Seeds",
    price: 7550,
    priceText: "Rs. 7,550",
    originalPrice: "Rs. 7,980",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200&text=Bhakkar+Star",
    category: "seeds",
    description: "High yielding cotton variety with excellent fiber quality and disease resistance.",
    brand: "Bhakkar",
    inStock: true,
    reviews: 38,
  },
  {
    id: 10,
    name: "Cardinal 80wg Insecticide",
    price: 635,
    priceText: "Rs. 635",
    originalPrice: "Rs. 1,065",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200&text=Cardinal+80wg",
    category: "pesticides",
    description: "Effective insecticide for control of sucking and chewing pests in various crops.",
    brand: "Cardinal",
    inStock: true,
    reviews: 446,
  },
]

let filteredProducts = [...allProducts]
let currentPage = 1
const productsPerPage = 12

// Initialize products page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("products.html")) {
    // Handle search parameters
    const urlParams = new URLSearchParams(window.location.search)
    const searchTerm = urlParams.get("q") || localStorage.getItem("searchTerm") || ""
    const searchCategory = urlParams.get("category") || localStorage.getItem("searchCategory") || ""

    // Apply search filters if they exist
    if (searchTerm || searchCategory) {
      applySearchFilters(searchTerm, searchCategory)
    }

    loadProducts()
    updatePriceRangeDisplay()

    // Clear stored search data
    localStorage.removeItem("searchTerm")
    localStorage.removeItem("searchCategory")
  }
})

function applySearchFilters(searchTerm, searchCategory) {
  filteredProducts = allProducts.filter((product) => {
    const nameMatch = !searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const categoryMatch = !searchCategory || product.category === searchCategory
    return nameMatch && categoryMatch
  })

  // Update page title if search is active
  if (searchTerm) {
    document.title = `Search: ${searchTerm} - Ehtisham Riaz Traders`
  }
}

function loadProducts() {
  displayProducts()
  updateResultsCount()
  createPagination()
}

function displayProducts() {
  const grid = document.getElementById("productsGrid")
  if (!grid) return

  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const productsToShow = filteredProducts.slice(startIndex, endIndex)

  grid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card" onclick="viewProduct(${product.id})" style="background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; cursor: pointer; transition: transform 0.3s;">
            <div class="product-image-container" style="position: relative; overflow: hidden;">
                <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #e8f5e8, #c8e6c8); display: flex; align-items: center; justify-content: center; font-size: 48px; color: #2e7d32;">
                    🌱
                </div>
                ${product.originalPrice ? `<div style="position: absolute; top: 10px; right: 10px; background: #e53935; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">SALE</div>` : ""}
                <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 8px; border-radius: 12px; font-size: 11px;">${product.brand}</div>
                ${!product.inStock ? `<div style="position: absolute; bottom: 10px; left: 10px; background: #f44336; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Out of Stock</div>` : ""}
            </div>
            <div class="product-info" style="padding: 15px;">
                <div class="product-name" style="font-weight: bold; margin-bottom: 8px; color: #333; font-size: 16px;">${product.name}</div>
                <div class="product-description" style="color: #666; font-size: 13px; margin-bottom: 10px; line-height: 1.4; height: 40px; overflow: hidden;">${product.description}</div>
                <div class="product-price-container" style="margin-bottom: 10px;">
                    <span class="product-price" style="color: #2e7d32; font-size: 18px; font-weight: bold;">${product.priceText}</span>
                    ${product.originalPrice ? `<span style="color: #999; font-size: 14px; text-decoration: line-through; margin-left: 8px;">${product.originalPrice}</span>` : ""}
                </div>
                <div class="product-rating" style="display: flex; align-items: center; gap: 5px; margin-bottom: 12px;">
                    <span class="stars" style="color: #ffa726;">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span style="font-size: 14px; color: #666;">(${product.rating}) • ${product.reviews || 0} reviews</span>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" 
                            style="flex: 1; background: ${product.inStock ? "#2e7d32" : "#ccc"}; color: white; border: none; padding: 10px; border-radius: 5px; cursor: ${product.inStock ? "pointer" : "not-allowed"}; font-weight: bold;"
                            ${!product.inStock ? "disabled" : ""}>
                        ${product.inStock ? "Add to Cart" : "Out of Stock"}
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

function filterProducts() {
  const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"]')
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value)

  const priceRange = document.getElementById("priceRange")?.value || 50000
  const selectedRating = document.querySelector('input[name="rating"]:checked')?.value || "0"

  filteredProducts = allProducts.filter((product) => {
    // Category filter
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    // Price filter
    const priceMatch = product.price <= Number.parseInt(priceRange)

    // Rating filter
    const ratingMatch = selectedRating === "0" || product.rating >= Number.parseInt(selectedRating)

    return categoryMatch && priceMatch && ratingMatch
  })

  currentPage = 1
  loadProducts()
}

function sortProducts() {
  const sortValue = document.getElementById("sortSelect")?.value || "name"

  switch (sortValue) {
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
  }

  currentPage = 1
  loadProducts()
}

function updatePriceRangeDisplay() {
  const priceRange = document.getElementById("priceRange")
  const priceValue = document.getElementById("priceValue")

  if (priceRange && priceValue) {
    priceValue.textContent = `Rs. ${priceRange.value}`

    priceRange.addEventListener("input", () => {
      priceValue.textContent = `Rs. ${priceRange.value}`
    })
  }
}

function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount")
  if (resultsCount) {
    resultsCount.textContent = `${filteredProducts.length} Results`
  }
}

function createPagination() {
  const paginationContainer = document.getElementById("pagination")
  if (!paginationContainer) return

  paginationContainer.innerHTML = "" // Clear existing buttons

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Previous page button
  const prevButton = document.createElement("button")
  prevButton.textContent = "Previous"
  prevButton.disabled = currentPage === 1
  prevButton.addEventListener("click", () => {
    currentPage--
    loadProducts()
  })
  paginationContainer.appendChild(prevButton)

  // Page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button")
    pageButton.textContent = i.toString()
    pageButton.classList.add("page-number")
    if (i === currentPage) {
      pageButton.classList.add("active")
    }
    pageButton.addEventListener("click", () => {
      currentPage = i
      loadProducts()
    })
    paginationContainer.appendChild(pageButton)
  }

  // Next page button
  const nextButton = document.createElement("button")
  nextButton.textContent = "Next"
  nextButton.disabled = currentPage === totalPages
  nextButton.addEventListener("click", () => {
    currentPage++
    loadProducts()
  })
  paginationContainer.appendChild(nextButton)
}

function addToCart(productId) {
  // Retrieve existing cart items from local storage or initialize an empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex((item) => item.id === productId)

  if (existingProductIndex !== -1) {
    // If the product exists, increase the quantity
    cart[existingProductIndex].quantity += 1
  } else {
    // If the product doesn't exist, add it to the cart with quantity 1
    const productToAdd = allProducts.find((product) => product.id === productId)
    if (productToAdd) {
      cart.push({ ...productToAdd, quantity: 1 })
    }
  }

  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Optionally, provide user feedback (e.g., an alert or update a cart counter)
  alert("Added to cart!")
}

function viewProduct(productId) {
  window.location.href = `product-details.html?id=${productId}`
}
