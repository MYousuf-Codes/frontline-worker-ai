"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WifiOff, Battery, Signal, Shield, CheckCircle } from "lucide-react"

export function DegradedModeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/20">
            Always Available
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Works Even When
            <br />
            <span className="text-blue-400">Everything Else Fails</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Emergencies don't wait for perfect conditions. Our degraded mode ensures critical services remain available even during outages."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                  <WifiOff className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Connectivity Mode</h3>
                  <p className="text-muted-foreground">
                    {
                      "Automatically switches to lightweight protocols when bandwidth is limited, ensuring core functionality remains available."
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                  <Battery className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Power-Efficient Operation</h3>
                  <p className="text-muted-foreground">
                    {
                      "Optimized for battery conservation during extended outages, with essential services prioritized over convenience features."
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                  <Signal className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Offline Capability</h3>
                  <p className="text-muted-foreground">
                    {"Critical functions work offline with local processing, syncing when connectivity is restored."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-blue-400/5 to-blue-400/10 border-blue-400/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="text-sm text-muted-foreground">System Status</div>
                    <div className="text-xl font-bold text-blue-400">Degraded Mode Active</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-sm">Emergency Triage</span>
                    </div>
                    <Badge variant="outline" className="text-xs text-secondary border-secondary/20">
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-sm">Basic Routing</span>
                    </div>
                    <Badge variant="outline" className="text-xs text-secondary border-secondary/20">
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-sm">Local Storage</span>
                    </div>
                    <Badge variant="outline" className="text-xs text-secondary border-secondary/20">
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg opacity-60">
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      <span className="text-sm">Advanced Analytics</span>
                    </div>
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      Suspended
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {
                      "Essential services remain fully operational. Advanced features will resume when connectivity improves."
                    }
                  </p>
                </div>
              </div>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/5 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
