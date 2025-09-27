"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Frontline AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Button asChild variant="outline">
              <Link href="/chat">Try Demo</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link href="#problem" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Problem
              </Link>
              <Link href="#solution" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Solution
              </Link>
              <Link href="#features" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#team" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Team
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/chat">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
