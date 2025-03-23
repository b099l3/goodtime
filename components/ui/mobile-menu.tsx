"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-12 z-50 bg-background border-b">
          <nav className="container flex flex-col space-y-3 p-4">
            <Link
              href="/#about"
              className="text-3xl font-semibold transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/#runs"
              className="text-3xl font-semibold transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGULAR RUNS
            </Link>
            <Link
              href="/#events"
              className="text-3xl font-semibold transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              EVENTS
            </Link>
            <Link
              href="/#contact"
              className="text-3xl font-semibold transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

