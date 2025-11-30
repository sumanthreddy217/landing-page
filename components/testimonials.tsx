"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "TechStartup Inc",
    image: "/professional-woman-avatar.png",
    content:
      "This platform completely transformed how we deploy applications. We went from hours to minutes, and the reliability is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Digital Solutions",
    image: "/professional-man-avatar.png",
    content:
      "The developer experience is exceptional. The documentation is clear, the API is intuitive, and support is always there when we need it.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    company: "Global Innovations",
    image: "/professional-woman-avatar-smiling.jpg",
    content:
      "We scaled from 100k to 10M users without any infrastructure headaches. This platform handles everything seamlessly. Worth every penny.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-gray-600 text-balance">
            Join thousands of companies building amazing things with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
