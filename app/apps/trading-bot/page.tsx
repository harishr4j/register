"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "link"
import { ArrowLeft, TrendingUp, Activity, DollarSign, BarChart3, Settings } from "lucide-react"

export default function TradingBot() {
  const [botStatus, setBotStatus] = useState<"running" | "stopped">("stopped")
  const [profit, setProfit] = useState(1250.5)
  const [trades, setTrades] = useState(47)

  const [recentTrades, setRecentTrades] = useState([
    { id: 1, symbol: "BTC/USD", type: "BUY", price: 43250, amount: 0.05, profit: 125.5, time: "2 min ago" },
    { id: 2, symbol: "ETH/USD", type: "SELL", price: 2280, amount: 2.5, profit: 85.2, time: "5 min ago" },
    { id: 3, symbol: "SOL/USD", type: "BUY", price: 98.5, amount: 10, profit: -15.3, time: "8 min ago" },
  ])

  const strategies = [
    { name: "Momentum Trading", status: "active", winRate: "68%" },
    { name: "Mean Reversion", status: "active", winRate: "72%" },
    { name: "Arbitrage", status: "inactive", winRate: "85%" },
  ]

  useEffect(() => {
    if (botStatus === "running") {
      const interval = setInterval(() => {
        setProfit((prev) => prev + (Math.random() * 20 - 5))
        setTrades((prev) => prev + (Math.random() > 0.7 ? 1 : 0))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [botStatus])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Algorithmic Trading Bot</h1>
          <Settings className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Status Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400">Bot Status</p>
              <Activity className={`w-5 h-5 ${botStatus === "running" ? "text-green-500" : "text-slate-500"}`} />
            </div>
            <p className="text-2xl font-bold capitalize">{botStatus}</p>
            <Button
              onClick={() => setBotStatus(botStatus === "running" ? "stopped" : "running")}
              className={`w-full mt-4 ${botStatus === "running" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
            >
              {botStatus === "running" ? "Stop Bot" : "Start Bot"}
            </Button>
          </Card>

          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400">Total Profit</p>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-green-500">${profit.toFixed(2)}</p>
            <p className="text-sm text-slate-500 mt-2">+12.5% today</p>
          </Card>

          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400">Total Trades</p>
              <BarChart3 className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">{trades}</p>
            <p className="text-sm text-slate-500 mt-2">Last 24 hours</p>
          </Card>

          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400">Win Rate</p>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">71.2%</p>
            <p className="text-sm text-slate-500 mt-2">Above average</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Trades */}
          <Card className="p-6 bg-slate-900 border-slate-800">
            <h2 className="text-xl font-bold mb-4">Recent Trades</h2>
            <div className="space-y-3">
              {recentTrades.map((trade) => (
                <div key={trade.id} className="p-4 bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{trade.symbol}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${trade.type === "BUY" ? "bg-green-600" : "bg-red-600"}`}
                      >
                        {trade.type}
                      </span>
                    </div>
                    <span className={`font-semibold ${trade.profit > 0 ? "text-green-500" : "text-red-500"}`}>
                      {trade.profit > 0 ? "+" : ""}
                      {trade.profit.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>
                      ${trade.price.toLocaleString()} × {trade.amount}
                    </span>
                    <span>{trade.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Active Strategies */}
          <Card className="p-6 bg-slate-900 border-slate-800">
            <h2 className="text-xl font-bold mb-4">Trading Strategies</h2>
            <div className="space-y-4">
              {strategies.map((strategy, index) => (
                <div key={index} className="p-4 bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{strategy.name}</span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        strategy.status === "active" ? "bg-green-600" : "bg-slate-600"
                      }`}
                    >
                      {strategy.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Win Rate</span>
                    <span className="text-green-500 font-semibold">{strategy.winRate}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
