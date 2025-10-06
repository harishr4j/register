"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Send, Settings, Search, Phone, Video, MoreVertical } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "other"
  timestamp: Date
  userName: string
}

interface Contact {
  id: number
  name: string
  status: "online" | "offline"
  lastMessage: string
  avatar: string
}

export default function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey! How are you?",
      sender: "other",
      timestamp: new Date(Date.now() - 3600000),
      userName: "Sarah Johnson",
    },
    {
      id: 2,
      text: "I'm doing great! Working on some new projects.",
      sender: "user",
      timestamp: new Date(Date.now() - 3500000),
      userName: "You",
    },
    {
      id: 3,
      text: "That sounds exciting! What are you building?",
      sender: "other",
      timestamp: new Date(Date.now() - 3400000),
      userName: "Sarah Johnson",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact>({
    id: 1,
    name: "Sarah Johnson",
    status: "online",
    lastMessage: "That sounds exciting!",
    avatar: "👩‍💼",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const contacts: Contact[] = [
    { id: 1, name: "Sarah Johnson", status: "online", lastMessage: "That sounds exciting!", avatar: "👩‍💼" },
    { id: 2, name: "Mike Chen", status: "online", lastMessage: "See you tomorrow!", avatar: "👨‍💻" },
    { id: 3, name: "Emma Wilson", status: "offline", lastMessage: "Thanks for the help", avatar: "👩‍🎨" },
    { id: 4, name: "Alex Kumar", status: "online", lastMessage: "Great work on the project", avatar: "👨‍🔬" },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
        userName: "You",
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate response
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          text: "That's awesome! Keep up the great work! 🚀",
          sender: "other",
          timestamp: new Date(),
          userName: selectedContact.name,
        }
        setMessages((prev) => [...prev, response])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Real-time Chat</h1>
          <Settings className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-[320px_1fr] gap-4 h-full">
          {/* Contacts Sidebar */}
          <Card className="bg-slate-900 border-slate-800 p-4 overflow-hidden flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Search contacts..." className="pl-10 bg-slate-800 border-slate-700" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    selectedContact.id === contact.id ? "bg-blue-600" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-2xl">
                        {contact.avatar}
                      </div>
                      {contact.status === "online" && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{contact.name}</p>
                      <p className="text-sm text-slate-400 truncate">{contact.lastMessage}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="bg-slate-900 border-slate-800 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xl">
                    {selectedContact.avatar}
                  </div>
                  {selectedContact.status === "online" && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold">{selectedContact.name}</p>
                  <p className="text-sm text-green-500">{selectedContact.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-slate-800 text-white"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-800">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-800 border-slate-700"
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
