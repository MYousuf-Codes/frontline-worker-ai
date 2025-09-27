"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, Trash2, Zap } from "lucide-react"
import type { ChatSession } from "./chat-interface"
import { MessageBubble } from "./message-bubble"
import { cn } from "@/lib/utils"

interface ChatWindowProps {
  session: ChatSession | null
  onClearChat: () => void
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function ChatWindow({ session, onClearChat, isSidebarOpen, onToggleSidebar }: ChatWindowProps) {
  if (!session) {
    return (
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border bg-card/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleSidebar}
                className={cn("md:hidden", !isSidebarOpen && "md:flex")}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold">Frontline AI Assistant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Welcome to Frontline AI</h3>
            <p className="text-muted-foreground mb-6">
              {
                "I'm here to help you navigate emergency services and connect you with the right resources quickly and efficiently."
              }
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Describe your situation in plain language</p>
              <p>• Get connected to appropriate services</p>
              <p>• Receive step-by-step guidance</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
              className={cn("md:hidden", !isSidebarOpen && "md:flex")}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">Frontline AI Assistant</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Multi-Agent System
            </Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={onClearChat} disabled={session.messages.length === 0}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Chat
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6 max-w-4xl mx-auto">
          {session.messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">{"Start a conversation by describing your situation below."}</p>
            </div>
          ) : (
            session.messages.map((message) => <MessageBubble key={message.id} message={message} />)
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
