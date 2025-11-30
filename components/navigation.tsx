"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Landing Page</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium"
            >
              Contact
            </Link>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
