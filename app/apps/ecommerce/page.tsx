"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    rating: 4.5,
    image: "/wireless-headphones.png",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.8,
    image: "/smartwatch-lifestyle.png",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    rating: 4.3,
    image: "/laptop-backpack.png",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    rating: 4.7,
    image: "/mechanical-keyboard.png",
    category: "Electronics",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    rating: 4.4,
    image: "/usb-hub.png",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    rating: 4.6,
    image: "/wireless-mouse.png",
    category: "Electronics",
  },
]

export default function EcommerceStore() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Tech Store</h1>
          <p className="text-xl text-white/70">Premium Electronics & Accessories</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <span className="text-sm text-blue-300 mb-2 block">{product.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="text-white/70 text-sm ml-2">({product.rating})</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">${product.price}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
