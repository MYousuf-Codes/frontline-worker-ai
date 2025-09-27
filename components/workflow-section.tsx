"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Brain, Users, CheckCircle, ArrowDown, Sparkles } from "lucide-react"

export function WorkflowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
            Workflow Demo
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            From Crisis to Resolution
            <br />
            <span className="text-secondary">In Minutes, Not Hours</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "See how our multi-agent system transforms a complex emergency response into a streamlined, efficient process."
            }
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Workflow Steps */}
          <div className="space-y-8">
            {/* Step 1: Citizen Input */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step 1
                        </Badge>
                        <h3 className="text-lg font-semibold">Citizen Input</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {"Citizen describes their situation in plain language through any channel"}
                      </p>
                      <div className="bg-background/50 rounded-lg p-3 text-sm italic">
                        {"\"My elderly neighbor hasn't answered her door in two days and I'm worried about her.\""}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Step 2: Agent Collaboration */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Card className="p-6 bg-gradient-to-r from-secondary/5 to-secondary/10 border-secondary/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step 2
                        </Badge>
                        <h3 className="text-lg font-semibold">Agent Collaboration</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {"All five agents analyze the situation simultaneously and coordinate response"}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-red-400/10 rounded px-2 py-1 text-red-400">Triage: High Priority</div>
                        <div className="bg-blue-400/10 rounded px-2 py-1 text-blue-400">Guidance: Wellness Check</div>
                        <div className="bg-primary/10 rounded px-2 py-1 text-primary">Booking: Schedule Visit</div>
                        <div className="bg-purple-400/10 rounded px-2 py-1 text-purple-400">Oversight: Monitor</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Step 3: Coordinated Response */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Card className="p-6 bg-gradient-to-r from-blue-400/5 to-blue-400/10 border-blue-400/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step 3
                        </Badge>
                        <h3 className="text-lg font-semibold">Coordinated Response</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {"Multiple services are automatically coordinated with pre-filled information"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span>Police wellness check scheduled for 2:30 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span>Social services notified and standing by</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span>Citizen receives confirmation and updates</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Step 4: Resolution & Follow-up */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Card className="p-6 bg-gradient-to-r from-purple-400/5 to-purple-400/10 border-purple-400/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step 4
                        </Badge>
                        <h3 className="text-lg font-semibold">Resolution & Follow-up</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {"Continuous monitoring ensures successful resolution and prevents future issues"}
                      </p>
                      <div className="bg-background/50 rounded-lg p-3 text-sm">
                        <div className="flex items-center space-x-2 text-secondary">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Case resolved successfully</span>
                        </div>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {"Neighbor was found safe. Follow-up care arranged. Response time: 47 minutes."}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* Success indicator for final step */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-full border-2 border-secondary/40 shadow-lg">
                <CheckCircle className="h-8 w-8 text-secondary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
