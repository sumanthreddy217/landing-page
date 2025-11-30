"use client"

import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-20 pb-20 sm:pt-32 sm:pb-32">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full w-fit">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-600">Now with AI features</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance">
              Build your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                dreams faster
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-balance max-w-lg">
              The complete platform to build, deploy, and scale your web applications with zero configuration. Trusted
              by millions of developers worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 text-base">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border border-gray-200 text-gray-900 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all font-semibold flex items-center justify-center gap-2 text-base">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">10M+</p>
                <p className="text-sm text-gray-600">Deployments</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Preview */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-md">
              {/* Decorative circles */}
              <div className="w-120 h-72 absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"></div>
              <div className="w-111 h-63 absolute inset-4 bg-white rounded-2xl shadow-2xl border border-gray-100"></div>

              {/* Placeholder image */}
              <img
                src="/modern-data-dashboard.png"
                alt="Product preview"
                className="absolute inset-4 rounded-2xl object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
