"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, CheckCircle, Briefcase, Users, Heart, MessageCircle } from "lucide-react"
import { useState } from "react"

interface Notification {
  id: number
  type: "validation" | "job" | "message" | "like" | "comment" | "connection"
  title: string
  description: string
  timestamp: string
  read: boolean
  avatar?: string
  actionUrl?: string
}

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "validation",
      title: "Validación Aprobada",
      description: "Tu experiencia en TechStart ha sido validada por la Universidad de Buenos Aires",
      timestamp: "Hace 5 min",
      read: false,
      avatar: "/logo.png",
    },
    {
      id: 2,
      type: "job",
      title: "Nueva Oferta Laboral",
      description: "TechCorp SA publicó una nueva oferta que coincide con tu perfil",
      timestamp: "Hace 1 hora",
      read: false,
      avatar: "",
    },
    {
      id: 3,
      type: "message",
      title: "Nuevo Mensaje",
      description: "Ana García te envió un mensaje",
      timestamp: "Hace 2 horas",
      read: true,
      avatar: "",
    },
    {
      id: 4,
      type: "like",
      title: "Le gustó tu publicación",
      description: "A Carlos Rodríguez le gustó tu publicación sobre tu proyecto final",
      timestamp: "Hace 3 horas",
      read: true,
      avatar: "",
    },
    {
      id: 5,
      type: "comment",
      title: "Nuevo Comentario",
      description: "Universidad de Buenos Aires comentó en tu publicación",
      timestamp: "Ayer",
      read: true,
      avatar: "/logo.png",
    },
    {
      id: 6,
      type: "connection",
      title: "Nueva Conexión",
      description: "CreativeAgency quiere conectar contigo",
      timestamp: "Hace 2 días",
      read: true,
      avatar: "",
    },
  ])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "validation":
        return <CheckCircle className="w-5 h-5 text-emerald-500" />
      case "job":
        return <Briefcase className="w-5 h-5 text-cyan-500" />
      case "message":
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />
      case "comment":
        return <MessageCircle className="w-5 h-5 text-purple-500" />
      case "connection":
        return <Users className="w-5 h-5 text-orange-500" />
      default:
        return <Bell className="w-5 h-5 text-slate-500" />
    }
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Card className="w-80 border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-slate-600" />
            <CardTitle className="text-lg">Notificaciones</CardTitle>
            {unreadCount > 0 && <Badge className="bg-red-500 text-white text-xs px-2 py-1">{unreadCount}</Badge>}
          </div>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-emerald-600 hover:text-emerald-700"
            >
              Marcar todas
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-96">
          <div className="space-y-1">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${
                  !notification.read ? "bg-emerald-50 border-l-4 border-l-emerald-500" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4
                          className={`text-sm font-medium ${!notification.read ? "text-slate-900" : "text-slate-700"}`}
                        >
                          {notification.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{notification.description}</p>
                        <p className="text-xs text-slate-500 mt-2">{notification.timestamp}</p>
                      </div>
                      {notification.avatar && (
                        <Avatar className="w-8 h-8 ml-2">
                          <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs">
                            {notification.title.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {notifications.length === 0 && (
          <div className="p-8 text-center">
            <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-medium text-slate-700 mb-1">No hay notificaciones</h3>
            <p className="text-xs text-slate-500">Te notificaremos cuando tengas actualizaciones</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
