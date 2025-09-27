"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Workflow, WifiOff, Smartphone, Globe } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Plain-Language Explanations",
    description: "Citizens can describe their situation naturally, without knowing specific codes or procedures",
    benefits: ["Natural conversation flow", "No technical jargon", "Multilingual support", "Context understanding"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Workflow,
    title: "End-to-End Case Handling",
    description: "Complete case management from initial contact through resolution and follow-up",
    benefits: ["Automated workflows", "Cross-service coordination", "Progress tracking", "Outcome monitoring"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: WifiOff,
    title: "Degraded Mode Operation",
    description: "Continues to function even with limited connectivity or system outages",
    benefits: ["Offline capability", "Low-bandwidth mode", "Essential services priority", "Graceful degradation"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Key Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Built for Real-World
            <br />
            <span className="text-primary">Emergency Conditions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Our system is designed to work when it matters most - during high-stress situations with limited resources."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="p-8 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${feature.bgColor} rounded-full`} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional feature highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Mobile-First Design</h3>
                <p className="text-muted-foreground text-sm">
                  {
                    "Optimized for smartphones and tablets, ensuring accessibility for all citizens regardless of their device."
                  }
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Multi-Channel Support</h3>
                <p className="text-muted-foreground text-sm">
                  {"Works across phone, web, SMS, and social media platforms for maximum accessibility."}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
