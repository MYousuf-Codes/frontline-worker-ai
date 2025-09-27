"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Code, Database, Brain, Server } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Frontend Developer",
    description: "Specializes in React, TypeScript, and user experience design for emergency response interfaces",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Jordan Smith",
    role: "Backend Engineer",
    description: "Expert in distributed systems, API design, and real-time communication protocols",
    icon: Server,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    name: "Sam Rodriguez",
    role: "Data & Rules Engineer",
    description: "Focuses on AI model training, decision trees, and emergency response protocols",
    icon: Brain,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "Taylor Kim",
    role: "Infrastructure & Deployment",
    description: "Handles cloud architecture, DevOps, and system reliability for critical services",
    icon: Database,
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
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <Card
                key={member.name}
                className="p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-20 h-20 ${member.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-10 w-10 ${member.color}`} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
