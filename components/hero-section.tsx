"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-pulse">
            <span className="mr-2">🚨</span>
            Multi-Agent System for Emergency Response
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="text-foreground">Frontline Worker</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-blue-400 bg-clip-text text-transparent animate-pulse">
              Support AI
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto mb-12 leading-relaxed">
            {
              "Empower your entire organization to respond at the speed of thought, while ensuring no citizen is left behind in their time of need."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-all duration-300">
              <Link href="/chat">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>
    </section>
  )
}
