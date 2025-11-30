"use client"

import { Zap, Globe, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure and edge computing capabilities worldwide.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy your applications to 99+ regions around the world with automatic latency optimization and CDN.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade security with SOC 2 Type II certification, DDoS protection, and comprehensive compliance standards.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track performance metrics, user behavior, and system health with advanced real-time analytics dashboard.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Everything you need</h2>
          <p className="text-lg text-gray-600 text-balance">
            Powerful features to help you build, deploy, and scale web applications with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
