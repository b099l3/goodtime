"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="outline" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
        Menu
      </Button>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-background border-b">
          <nav className="container flex flex-col space-y-3 py-4">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#runs"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Regular Runs
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

