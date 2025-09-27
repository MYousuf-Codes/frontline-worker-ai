"use client"

import Link from "next/link"
import { Github, Linkedin, ExternalLink, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Frontline Worker Support AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {
                "Multi-agent system designed to revolutionize emergency response through intelligent automation and seamless coordination."
              }
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#solution" className="hover:text-foreground transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-foreground transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  GitHub
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackathon.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  Hackathon
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{"Built for the Emergency Response Hackathon 2024 • Designed to save lives through technology"}</p>
        </div>
      </div>
    </footer>
  )
}
