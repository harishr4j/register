"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react"

const weatherData = {
  current: {
    temp: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    feelsLike: 22,
  },
  forecast: [
    { day: "Mon", high: 26, low: 18, condition: "Sunny" },
    { day: "Tue", high: 24, low: 17, condition: "Cloudy" },
    { day: "Wed", high: 22, low: 16, condition: "Rainy" },
    { day: "Thu", high: 25, low: 19, condition: "Sunny" },
    { day: "Fri", high: 27, low: 20, condition: "Sunny" },
  ],
}

export default function WeatherDashboard() {
  const [city, setCity] = useState("Mumbai")

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Weather Dashboard</h1>
          <p className="text-xl text-white/70">Real-time Weather Information</p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">{city}</h2>
              <p className="text-white/70">Today, {new Date().toLocaleDateString()}</p>
            </div>

            <div className="flex justify-center items-center mb-8">
              <Cloud className="w-32 h-32 text-white/80" />
            </div>

            <div className="text-center mb-8">
              <p className="text-7xl font-bold text-white mb-2">{weatherData.current.temp}°C</p>
              <p className="text-2xl text-white/70">{weatherData.current.condition}</p>
              <p className="text-white/60 mt-2">Feels like {weatherData.current.feelsLike}°C</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Droplets className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <p className="text-white/70 text-sm">Humidity</p>
                <p className="text-white font-bold text-xl">{weatherData.current.humidity}%</p>
              </div>
              <div className="text-center">
                <Wind className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                <p className="text-white/70 text-sm">Wind Speed</p>
                <p className="text-white font-bold text-xl">{weatherData.current.windSpeed} km/h</p>
              </div>
              <div className="text-center">
                <Sun className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-white/70 text-sm">UV Index</p>
                <p className="text-white font-bold text-xl">5</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h3>
            <div className="grid grid-cols-5 gap-4">
              {weatherData.forecast.map((day) => (
                <div
                  key={day.day}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <p className="text-white font-bold mb-3">{day.day}</p>
                  {day.condition === "Sunny" && <Sun className="w-8 h-8 text-yellow-300 mx-auto mb-3" />}
                  {day.condition === "Cloudy" && <Cloud className="w-8 h-8 text-gray-300 mx-auto mb-3" />}
                  {day.condition === "Rainy" && <CloudRain className="w-8 h-8 text-blue-300 mx-auto mb-3" />}
                  <p className="text-white text-sm">
                    <span className="font-bold">{day.high}°</span> / {day.low}°
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
