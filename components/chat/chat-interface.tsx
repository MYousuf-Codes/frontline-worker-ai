"use client"

import { useState, useEffect } from "react"
import { ChatSidebar } from "./chat-sidebar"
import { ChatWindow } from "./chat-window"
import { ChatInput } from "./chat-input"

export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  agentType?: "triage" | "guidance" | "booking" | "followup" | "oversight"
  agentTrace?: string[]
}

export interface ChatSession {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

const STORAGE_KEY = "frontline-ai-sessions"

export function ChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const [sessions, setSessions] = useState<ChatSession[]>([])

  // Load sessions from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsedSessions = JSON.parse(stored).map((session: any) => ({
          ...session,
          createdAt: new Date(session.createdAt),
          updatedAt: new Date(session.updatedAt),
          messages: session.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })),
        }))
        setSessions(parsedSessions)
      }
    } catch (error) {
      console.error("Error loading sessions from localStorage:", error)
    }
  }, [])

  // Save sessions to localStorage whenever sessions change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions))
    } catch (error) {
      console.error("Error saving sessions to localStorage:", error)
    }
  }, [sessions])

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setSessions((prev) => [newSession, ...prev])
    setCurrentSession(newSession)
  }

  const selectSession = (session: ChatSession) => {
    setCurrentSession(session)
  }

  const updateSession = (updatedSession: ChatSession) => {
    setSessions((prev) => prev.map((session) => (session.id === updatedSession.id ? updatedSession : session)))
    setCurrentSession(updatedSession)
  }

  const deleteSession = (sessionId: string) => {
    setSessions((prev) => prev.filter((session) => session.id !== sessionId))
    if (currentSession?.id === sessionId) {
      setCurrentSession(null)
    }
  }

  const clearCurrentChat = () => {
    if (currentSession) {
      const clearedSession = {
        ...currentSession,
        messages: [],
        updatedAt: new Date(),
      }
      updateSession(clearedSession)
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <ChatSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        sessions={sessions}
        currentSession={currentSession}
        onNewChat={createNewSession}
        onSelectSession={selectSession}
        onDeleteSession={deleteSession}
      />

      <div className="flex-1 flex flex-col">
        <ChatWindow
          session={currentSession}
          onClearChat={clearCurrentChat}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <ChatInput session={currentSession} onUpdateSession={updateSession} onCreateSession={createNewSession} />
      </div>
    </div>
  )
}
