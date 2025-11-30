"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small projects and experimentation",
    features: [
      "Up to 10 deployments/month",
      "1 GB serverless function memory",
      "Basic analytics & monitoring",
      "Community support",
      "Public API access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Best for growing teams and production apps",
    features: [
      "Unlimited deployments",
      "3 GB serverless function memory",
      "Advanced analytics & monitoring",
      "Priority email support",
      "Custom domains",
      "Team collaboration (5 members)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom SLA",
      "Advanced security features",
      "Unlimited team members",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 text-balance">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-600 transform md:scale-105" : "border border-gray-200"
              } ${plan.popular ? "bg-white" : "bg-white"}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help choosing?{" "}
            <button className="text-blue-600 font-semibold hover:text-blue-700">Contact our sales team</button>
          </p>
        </div>
      </div>
    </section>
  )
}
