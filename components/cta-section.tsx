"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-blue-400/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="mr-2 h-4 w-4" />
              Ready to Experience the Future
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              See Our AI Agents
              <br />
              <span className="text-primary">in Action</span>
            </h2>

            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              {
                "Try our interactive demo and experience how multi-agent AI can transform emergency response in your community."
              }
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 group">
              <Link href="/chat">
                <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Test the Chat Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            {"No signup required • Works on any device • Try it now"}
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}
