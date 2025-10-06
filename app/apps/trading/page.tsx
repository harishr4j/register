"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign } from "lucide-react"

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 178.25, change: 2.5 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 142.8, change: -1.2 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 378.9, change: 3.8 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 242.15, change: -2.3 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 168.5, change: 1.7 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 495.3, change: 5.2 },
]

export default function TradingPlatform() {
  const [selectedStock, setSelectedStock] = useState(stocks[0])
  const [portfolio, setPortfolio] = useState(10000)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Trading Platform</h1>
          <p className="text-xl text-white/70">Real-time Market Data & Analytics</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-white/70">Portfolio Value</span>
            </div>
            <p className="text-3xl font-bold text-white">${portfolio.toLocaleString()}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-white/70">Today's Gain</span>
            </div>
            <p className="text-3xl font-bold text-green-400">+$245.80</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-white/70">Total Return</span>
            </div>
            <p className="text-3xl font-bold text-blue-400">+12.5%</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Market Watch</h2>
            <div className="space-y-4">
              {stocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => setSelectedStock(stock)}
                >
                  <div>
                    <p className="font-bold text-white">{stock.symbol}</p>
                    <p className="text-sm text-white/60">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">${stock.price}</p>
                    <p
                      className={`text-sm flex items-center gap-1 ${
                        stock.change >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Trade {selectedStock.symbol}</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white/70 mb-2">Quantity</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400"
                  placeholder="Enter quantity"
                  defaultValue={1}
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2">Order Type</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400">
                  <option>Market Order</option>
                  <option>Limit Order</option>
                  <option>Stop Loss</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors">
                  BUY
                </button>
                <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-colors">
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
