"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  MessageSquare,
  Users,
  Settings,
  ImageIcon,
  Mic,
  X,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ChatPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [attachments, setAttachments] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const chats = [
    {
      id: 1,
      name: "Ana García",
      role: "Estudiante de Ingeniería",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "¡Gracias por la ayuda con el proyecto!",
      timestamp: "10:30",
      unread: 2,
      online: true,
      type: "direct",
    },
    {
      id: 2,
      name: "TechCorp SA",
      role: "Empresa",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Te enviamos los detalles de la entrevista",
      timestamp: "09:15",
      unread: 0,
      online: false,
      type: "company",
    },
    {
      id: 3,
      name: "Grupo: Desarrolladores React",
      role: "15 miembros",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Carlos: ¿Alguien sabe sobre hooks?",
      timestamp: "Ayer",
      unread: 5,
      online: true,
      type: "group",
    },
    {
      id: 4,
      name: "Universidad de Buenos Aires",
      role: "Casa de Estudios",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Recordatorio: Validación pendiente",
      timestamp: "Ayer",
      unread: 1,
      online: true,
      type: "university",
    },
    {
      id: 5,
      name: "María González",
      role: "Diseñadora UX",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "¿Podemos revisar el diseño mañana?",
      timestamp: "2 días",
      unread: 0,
      online: false,
      type: "direct",
    },
  ]

  const initialMessages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Ana García",
      content: "¡Hola! ¿Cómo estás?",
      timestamp: "10:25",
      type: "text",
      isOwn: false,
    },
    {
      id: 2,
      senderId: 0,
      senderName: "Tú",
      content: "¡Hola Ana! Todo bien, ¿y tú?",
      timestamp: "10:26",
      type: "text",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Ana García",
      content: "Muy bien, trabajando en el proyecto de React que me recomendaste",
      timestamp: "10:27",
      type: "text",
      isOwn: false,
    },
    {
      id: 4,
      senderId: 0,
      senderName: "Tú",
      content: "¡Excelente! ¿Cómo va? ¿Necesitas ayuda con algo específico?",
      timestamp: "10:28",
      type: "text",
      isOwn: true,
    },
    {
      id: 5,
      senderId: 1,
      senderName: "Ana García",
      content: "Sí, tengo una duda con los hooks. ¿Podrías explicarme useState?",
      timestamp: "10:29",
      type: "text",
      isOwn: false,
    },
    {
      id: 6,
      senderId: 0,
      senderName: "Tú",
      content: "¡Por supuesto! useState es un hook que te permite agregar estado a componentes funcionales...",
      timestamp: "10:30",
      type: "text",
      isOwn: true,
    },
    {
      id: 7,
      senderId: 1,
      senderName: "Ana García",
      content: "¡Gracias por la ayuda con el proyecto!",
      timestamp: "10:30",
      type: "text",
      isOwn: false,
    },
  ]

  useEffect(() => {
    setMessages(initialMessages)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedChatData = chats.find((chat) => chat.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim() || attachments.length > 0) {
      const now = new Date()
      const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

      const newMsg = {
        id: messages.length + 1,
        senderId: 0,
        senderName: "Tú",
        content: newMessage.trim(),
        timestamp: timeString,
        type: attachments.length > 0 ? "media" : "text",
        isOwn: true,
        attachments: attachments.length > 0 ? [...attachments] : undefined,
      }

      setMessages([...messages, newMsg])
      setNewMessage("")
      setAttachments([])

      // Simulate typing response
      setIsTyping(true)
      setTimeout(
        () => {
          setIsTyping(false)
          const responses = [
            "¡Entendido! Te responderé pronto.",
            "Gracias por tu mensaje.",
            "Interesante, déjame pensarlo.",
            "¡Perfecto! Seguimos en contacto.",
            "Voy a revisar esto y te aviso.",
          ]
          const randomResponse = responses[Math.floor(Math.random() * responses.length)]

          const responseMsg = {
            id: messages.length + 2,
            senderId: selectedChat,
            senderName: selectedChatData?.name || "Usuario",
            content: randomResponse,
            timestamp: `${now.getHours()}:${(now.getMinutes() + 1).toString().padStart(2, "0")}`,
            type: "text",
            isOwn: false,
          }

          setMessages((prev) => [...prev, responseMsg])
        },
        2000 + Math.random() * 1000,
      )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleAttachment = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newAttachments = Array.from(files).map((file) => URL.createObjectURL(file))
      setAttachments([...attachments, ...newAttachments])
    }
  }

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments]
    newAttachments.splice(index, 1)
    setAttachments(newAttachments)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate recording
      setTimeout(() => {
        setIsRecording(false)
        setNewMessage((prev) => prev + " [Nota de voz]")
      }, 3000)
    }
  }

  const getChatTypeIcon = (type: string) => {
    switch (type) {
      case "group":
        return <Users className="w-4 h-4" />
      case "company":
        return <Badge className="w-3 h-3 bg-emerald-500" />
      case "university":
        return <Badge className="w-3 h-3 bg-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-200 flex flex-col bg-white">
        {/* Header */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-800">{t("chat")}</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                    <Settings className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configuración</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder={t("search_conversations")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        {/* Chat List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === chat.id
                    ? "bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="relative">
                  <Avatar className="w-12 h-12 border border-slate-200">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                      {chat.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <h3 className="font-medium text-slate-800 truncate">{chat.name}</h3>
                      {getChatTypeIcon(chat.type)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500">{chat.timestamp}</span>
                      {chat.unread > 0 && (
                        <Badge className="bg-emerald-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                  <p className="text-xs text-slate-500">{chat.role}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-10 h-10 border border-slate-200">
                    <AvatarImage src={selectedChatData?.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                      {selectedChatData?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {selectedChatData?.online && (
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{selectedChatData?.name}</h3>
                  <p className="text-sm text-slate-600">
                    {selectedChatData?.online ? t("online") : t("offline")} • {selectedChatData?.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t("audio_call")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                        <Video className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t("video_call")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t("more_options")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 bg-slate-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    {!message.isOwn && (
                      <Avatar className="w-8 h-8 border border-slate-200">
                        <AvatarImage src={selectedChatData?.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs">
                          {message.senderName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-sm ${
                        message.isOwn
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      {message.content && <p className="text-sm">{message.content}</p>}

                      {message.attachments && message.attachments.length > 0 && (
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {message.attachments.map((attachment: string, index: number) => (
                            <div key={index} className="relative rounded-lg overflow-hidden">
                              <img
                                src={attachment || "/placeholder.svg"}
                                alt="Attachment"
                                className="w-full h-24 object-cover rounded-lg"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      <p className={`text-xs mt-1 ${message.isOwn ? "text-emerald-100" : "text-slate-500"}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end space-x-2">
                    <Avatar className="w-8 h-8 border border-slate-200">
                      <AvatarImage src={selectedChatData?.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs">
                        {selectedChatData?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="px-4 py-3 rounded-2xl bg-white text-slate-800 border border-slate-200 shadow-sm">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "600ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Attachments Preview */}
          {attachments.length > 0 && (
            <div className="p-2 border-t border-slate-200 bg-white">
              <div className="flex flex-wrap gap-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-200">
                    <img
                      src={attachment || "/placeholder.svg"}
                      alt="Attachment"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeAttachment(index)}
                      className="absolute top-0 right-0 bg-slate-800 bg-opacity-70 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
                accept="image/*,video/*"
              />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-full h-9 w-9 p-0" onClick={handleAttachment}>
                      <Paperclip className="w-5 h-5 text-slate-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("attach_files")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-full h-9 w-9 p-0" onClick={handleAttachment}>
                      <ImageIcon className="w-5 h-5 text-slate-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("send_image")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex-1 relative">
                <Input
                  placeholder={t("type_message")}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="pr-10 py-6 bg-slate-50 border-slate-200"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-8 w-8 p-0"
                >
                  <Smile className="w-5 h-5 text-slate-600" />
                </Button>
              </div>

              {newMessage.trim() || attachments.length > 0 ? (
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-full h-10 w-10 p-0"
                >
                  <Send className="w-5 h-5" />
                </Button>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className={`rounded-full h-10 w-10 p-0 ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"}`}
                        onClick={toggleRecording}
                      >
                        <Mic className="w-5 h-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isRecording ? t("stop_recording") : t("voice_message")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">{t("select_conversation")}</h3>
            <p className="text-slate-500 max-w-xs mx-auto">{t("select_conversation_desc")}</p>
          </div>
        </div>
      )}
    </div>
  )
}
