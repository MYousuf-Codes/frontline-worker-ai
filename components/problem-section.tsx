"use client"

import { Card } from "@/components/ui/card"
import { AlertTriangle, Clock, Users, Phone } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            {"The Challenge We're Solving"}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Citizens struggle to navigate complex emergency services while frontline workers face overwhelming demand and fragmented systems."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Citizen Confusion</h3>
                  <p className="text-muted-foreground">
                    {"People in crisis don't know which service to call, leading to delays and misdirected resources."}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response Delays</h3>
                  <p className="text-muted-foreground">
                    {"Manual triage and form-filling create bottlenecks when every second counts."}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontline Overload</h3>
                  <p className="text-muted-foreground">
                    {"Workers spend more time on paperwork than helping people, leading to burnout and inefficiency."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-destructive/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-destructive" />
                  <div>
                    <div className="text-sm text-muted-foreground">Emergency Call Volume</div>
                    <div className="text-2xl font-bold text-destructive">+47%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Misdirected Calls</span>
                    <span className="text-sm font-medium">34%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full w-[34%]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Response Time</span>
                    <span className="text-sm font-medium">12.3 min</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full w-[78%]" />
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {"Current systems aren't built for the complexity of modern emergency response."}
                  </p>
                </div>
              </div>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-destructive/5 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
