"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, MessageSquare, Trash2, X } from "lucide-react"
import type { ChatSession } from "./chat-interface"
import { cn } from "@/lib/utils"

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  sessions: ChatSession[]
  currentSession: ChatSession | null
  onNewChat: () => void
  onSelectSession: (session: ChatSession) => void
  onDeleteSession: (sessionId: string) => void
}

export function ChatSidebar({
  isOpen,
  onToggle,
  sessions,
  currentSession,
  onNewChat,
  onSelectSession,
  onDeleteSession,
}: ChatSidebarProps) {
  const formatDate = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return "Today"
    if (days === 1) return "Yesterday"
    if (days < 7) return `${days} days ago`
    return date.toLocaleDateString()
  }

  const getSessionTitle = (session: ChatSession) => {
    if (session.messages.length === 0) return "New Chat"
    const firstMessage = session.messages.find((m) => m.role === "user")
    return firstMessage ? firstMessage.content.slice(0, 50) + "..." : "New Chat"
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed md:relative z-50 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300",
          isOpen ? "w-80 translate-x-0" : "w-0 -translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-sidebar-foreground">Chat History</h2>
              <Button variant="ghost" size="sm" onClick={onToggle} className="md:hidden">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <Button onClick={onNewChat} className="w-full justify-start bg-transparent" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              New Chat
            </Button>
          </div>

          {/* Chat Sessions */}
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              {sessions.length === 0 ? (
                <div className="text-center py-8 text-sidebar-foreground/60">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No chats yet</p>
                  <p className="text-xs">Start a conversation to see your history</p>
                </div>
              ) : (
                sessions.map((session) => (
                  <div
                    key={session.id}
                    className={cn(
                      "group relative p-3 rounded-lg cursor-pointer transition-colors",
                      currentSession?.id === session.id
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent/50 text-sidebar-foreground",
                    )}
                    onClick={() => onSelectSession(session)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{getSessionTitle(session)}</p>
                        <p className="text-xs text-sidebar-foreground/60 mt-1">{formatDate(session.updatedAt)}</p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          onDeleteSession(session.id)
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/60 text-center">
              Frontline Worker Support AI
              <br />
              Multi-Agent Emergency Response
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
