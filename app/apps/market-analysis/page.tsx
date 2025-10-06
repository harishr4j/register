"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Search, TrendingUp, TrendingDown, Activity } from "lucide-react"

export default function MarketAnalysis() {
  const [searchQuery, setSearchQuery] = useState("")

  const marketData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 178.25, change: 2.5, volume: "52.3M", marketCap: "2.8T" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.91, change: 1.8, volume: "28.1M", marketCap: "2.8T" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.8, change: -0.5, volume: "25.4M", marketCap: "1.8T" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 151.94, change: 3.2, volume: "45.2M", marketCap: "1.6T" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 242.84, change: -1.2, volume: "98.5M", marketCap: "771B" },
  ]

  const indices = [
    { name: "S&P 500", value: 4783.45, change: 0.85 },
    { name: "Dow Jones", value: 37440.34, change: 0.52 },
    { name: "NASDAQ", value: 14510.3, change: 1.25 },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Market Analysis Dashboard</h1>
          <Activity className="w-5 h-5 text-green-500 animate-pulse" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Market Indices */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {indices.map((index) => (
            <Card key={index.name} className="p-6 bg-slate-900 border-slate-800">
              <p className="text-slate-400 mb-2">{index.name}</p>
              <p className="text-3xl font-bold mb-2">{index.value.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                {index.change > 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className={index.change > 0 ? "text-green-500" : "text-red-500"}>
                  {index.change > 0 ? "+" : ""}
                  {index.change}%
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Search */}
        <Card className="p-6 bg-slate-900 border-slate-800 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stocks, ETFs, or cryptocurrencies..."
              className="pl-12 bg-slate-800 border-slate-700 h-12"
            />
          </div>
        </Card>

        {/* Stock List */}
        <Card className="p-6 bg-slate-900 border-slate-800">
          <h2 className="text-2xl font-bold mb-6">Top Stocks</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 px-4">Symbol</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-right py-3 px-4">Price</th>
                  <th className="text-right py-3 px-4">Change</th>
                  <th className="text-right py-3 px-4">Volume</th>
                  <th className="text-right py-3 px-4">Market Cap</th>
                  <th className="text-right py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                    <td className="py-4 px-4 font-semibold">{stock.symbol}</td>
                    <td className="py-4 px-4 text-slate-400">{stock.name}</td>
                    <td className="py-4 px-4 text-right font-semibold">${stock.price}</td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`flex items-center justify-end gap-1 ${
                          stock.change > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {stock.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {stock.change > 0 ? "+" : ""}
                        {stock.change}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-slate-400">{stock.volume}</td>
                    <td className="py-4 px-4 text-right text-slate-400">${stock.marketCap}</td>
                    <td className="py-4 px-4 text-right">
                      <Button size="sm" variant="outline">
                        Analyze
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
