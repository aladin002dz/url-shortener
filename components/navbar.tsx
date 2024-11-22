"use client"
import { Button } from "@/components/ui/button"
import { Link as LinkIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <LinkIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">ShortLink</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/shorten" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Shorten URL</Link>
                <Link href="/analytics" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Analytics</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle main menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/shorten" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Shorten URL</Link>
            <Link href="/analytics" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Analytics</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <Button variant="outline" className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

