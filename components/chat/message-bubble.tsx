"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, User, Bot, Search, MapPin, Calendar, Bell, Shield } from "lucide-react"
import type { Message } from "./chat-interface"
import { cn } from "@/lib/utils"

interface MessageBubbleProps {
  message: Message
}

const agentConfig = {
  triage: { icon: Search, color: "text-red-400", bg: "bg-red-400/10", name: "Triage" },
  guidance: { icon: MapPin, color: "text-blue-400", bg: "bg-blue-400/10", name: "Guidance" },
  booking: { icon: Calendar, color: "text-primary", bg: "bg-primary/10", name: "Booking" },
  followup: { icon: Bell, color: "text-secondary", bg: "bg-secondary/10", name: "Follow-up" },
  oversight: { icon: Shield, color: "text-purple-400", bg: "bg-purple-400/10", name: "Oversight" },
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const [showTrace, setShowTrace] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isUser = message.role === "user"
  const agent = message.agentType ? agentConfig[message.agentType] : null

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "flex gap-3 transition-all duration-500",
        isUser ? "justify-end" : "justify-start",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse">
            <Bot className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}

      <div className={cn("max-w-[80%] space-y-2", isUser && "flex flex-col items-end")}>
        {/* Agent badge for assistant messages */}
        {!isUser && agent && (
          <div className="flex items-center space-x-2 animate-fade-in">
            <Badge variant="outline" className={cn("text-xs", agent.color, "animate-pulse")}>
              <agent.icon className="h-3 w-3 mr-1" />
              {agent.name} Agent
            </Badge>
            {message.agentTrace && message.agentTrace.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTrace(!showTrace)}
                className="h-6 px-2 text-xs hover:scale-105 transition-transform"
              >
                <Eye className="h-3 w-3 mr-1" />
                Trace
              </Button>
            )}
          </div>
        )}

        {/* Message content */}
        <Card
          className={cn(
            "p-4 transform transition-all duration-300 hover:scale-[1.02]",
            isUser
              ? "bg-primary text-primary-foreground"
              : agent
                ? `${agent.bg} border-${agent.color.replace("text-", "")}/20`
                : "bg-card",
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

          <div
            className={cn("text-xs mt-2 opacity-70", isUser ? "text-primary-foreground/70" : "text-muted-foreground")}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </Card>

        {/* Agent trace */}
        {showTrace && message.agentTrace && (
          <Card className="p-3 bg-muted/50 border-dashed animate-fade-in">
            <div className="text-xs space-y-1">
              <div className="font-medium text-muted-foreground mb-2">Agent Trace:</div>
              {message.agentTrace.map((step, index) => (
                <div
                  key={index}
                  className="text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {index + 1}. {step}
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
            <User className="h-4 w-4 text-secondary" />
          </div>
        </div>
      )}
    </div>
  )
}
