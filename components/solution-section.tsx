"use client"

import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Bell, Shield, ArrowRight, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const agents = [
  {
    name: "Triage Agent",
    description: "Analyzes urgency and severity of incoming requests using natural language processing",
    icon: Search,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    features: ["Urgency Assessment", "Risk Analysis", "Priority Scoring"],
  },
  {
    name: "Guidance Agent",
    description: "Matches cases to appropriate services and provides clear next steps",
    icon: MapPin,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    features: ["Service Matching", "Resource Routing", "Clear Instructions"],
  },
  {
    name: "Booking Agent",
    description: "Handles appointments and pre-fills forms to streamline the process",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    features: ["Smart Scheduling", "Form Pre-filling", "Availability Checking"],
  },
  {
    name: "Follow-up Agent",
    description: "Provides reminders, updates, and ensures continuity of care",
    icon: Bell,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    features: ["Automated Reminders", "Status Updates", "Care Continuity"],
  },
  {
    name: "Equity Oversight Agent",
    description: "Monitors service distribution and ensures fair access across communities",
    icon: Shield,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    features: ["Load Balancing", "Equity Monitoring", "Bias Detection"],
  },
]

export function SolutionSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(agents.length).fill(false))

  useEffect(() => {
    const timer = setTimeout(() => {
      agents.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => {
            const newVisible = [...prev]
            newVisible[index] = true
            return newVisible
          })
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Solution
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Five Specialized AI Agents
            <br />
            <span className="text-primary">Working in Harmony</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Each agent specializes in a specific aspect of emergency response, collaborating seamlessly to provide comprehensive support."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <Card
                key={agent.name}
                className={cn(
                  `p-6 ${agent.bgColor} ${agent.borderColor} border-2 hover:scale-105 transition-all duration-500 group cursor-pointer`,
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${agent.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${agent.color}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{agent.description}</p>
                  </div>

                  <div className="space-y-2">
                    {agent.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="text-xs bg-background/50 rounded-full px-3 py-1 animate-fade-in"
                        style={{ animationDelay: `${index * 200 + featureIndex * 100}ms` }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Agent Collaboration Flow */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">How They Work Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {
                "Our agents collaborate in real-time, sharing context and insights to provide the most effective response."
              }
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col items-center text-center max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Instant Analysis</h4>
              <p className="text-sm text-muted-foreground">
                {"Triage agent immediately assesses the situation and determines urgency level"}
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 lg:rotate-0 animate-pulse" />

            <div className="flex flex-col items-center text-center max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 animate-pulse delay-300">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Smart Routing</h4>
              <p className="text-sm text-muted-foreground">
                {"Guidance agent matches the case to the most appropriate service and resources"}
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 lg:rotate-0 animate-pulse delay-150" />

            <div className="flex flex-col items-center text-center max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center mb-4 animate-pulse delay-500">
                <Calendar className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">Seamless Booking</h4>
              <p className="text-sm text-muted-foreground">
                {"Booking agent handles scheduling and paperwork, removing friction from the process"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
