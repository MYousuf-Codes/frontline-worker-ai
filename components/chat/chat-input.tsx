"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Sparkles } from "lucide-react"
import type { ChatSession, Message } from "./chat-interface"
import { simulateAgentResponse } from "@/lib/agent-simulator"

interface ChatInputProps {
  session: ChatSession | null
  onUpdateSession: (session: ChatSession) => void
  onCreateSession: () => void
}

export function ChatInput({ session, onUpdateSession, onCreateSession }: ChatInputProps) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Create session if none exists
    const currentSession = session
    if (!currentSession) {
      onCreateSession()
      // Wait a bit for session to be created
      await new Promise((resolve) => setTimeout(resolve, 100))
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    }

    // Add user message
    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, userMessage],
      updatedAt: new Date(),
    }
    onUpdateSession(updatedSession)

    setInput("")
    setIsLoading(true)

    try {
      // Simulate agent response
      const agentResponse = await simulateAgentResponse(input.trim(), currentSession.messages)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: agentResponse.content,
        role: "assistant",
        timestamp: new Date(),
        agentType: agentResponse.agentType,
        agentTrace: agentResponse.trace,
      }

      // Add assistant message
      const finalSession = {
        ...updatedSession,
        messages: [...updatedSession.messages, assistantMessage],
        updatedAt: new Date(),
      }
      onUpdateSession(finalSession)
    } catch (error) {
      console.error("Error generating response:", error)
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      }

      const errorSession = {
        ...updatedSession,
        messages: [...updatedSession.messages, errorMessage],
        updatedAt: new Date(),
      }
      onUpdateSession(errorSession)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [input])

  const suggestions = [
    "My elderly neighbor hasn't answered her door in two days",
    "There's a gas smell coming from the apartment next door",
    "I need help with a mental health crisis",
    "Someone broke into my car last night",
  ]

  return (
    <div className="p-4 border-t border-border bg-card/50">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        {/* Quick suggestions */}
        {!session?.messages.length && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 hover:scale-105 transition-transform bg-transparent"
                  onClick={() => setInput(suggestion)}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {suggestion.slice(0, 30)}...
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your situation or emergency need..."
              className="min-h-[60px] max-h-[200px] resize-none transition-all duration-200 focus:scale-[1.02]"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            size="lg"
            className="px-6 hover:scale-105 transition-all duration-200"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>

        <div className="mt-2 text-xs text-muted-foreground text-center">
          {"Press Enter to send, Shift+Enter for new line"}
        </div>
      </form>
    </div>
  )
}
