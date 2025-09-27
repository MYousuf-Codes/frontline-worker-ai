"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Muhammad Yousaf",
    role: "Full-Stack Developer",
    description: "Specializes in React, Next.js, OpenAI Agents SDK, and real-time web applications development.",
    image: "/team/muhammad-yousaf.png", 
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Nihal Naveed",
    role: "Full-Stack Developer",
    description: "Expert in distributed systems, API design, and real-time communication protocols",
    image: "/team/nihal-naveed.png", 
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    name: "Abdul Samad Siddiqui",
    role: "Agentic AI Developer",
    description: "Focuses on AI model training, decision trees, and emergency response protocols",
    image: "/team/abdul-samad.png", 
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "Muhammad Yousuf",
    role: "Agentic AI Developer",
    description: "Handles cloud architecture, DevOps, and system reliability for critical services",
    image: "/team/muhammad-yousuf.png", 
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
            Our Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Built by Experts in
            <br />
            <span className="text-secondary">Emergency Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Our diverse team combines deep technical expertise with real-world understanding of emergency response challenges."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="p-6 text-center hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto group-hover:scale-110 transition-transform">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className={`text-sm font-medium ${member.color} mb-3`}>{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>

                <div className="flex justify-center space-x-3 pt-4">
                  <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <Github className="h-4 w-4" />
                  </div>
                  <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
