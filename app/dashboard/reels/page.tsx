"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import { Heart, MessageCircle, Share2, Bookmark, Play, Pause, Volume2, VolumeX, MoreVertical, Eye } from "lucide-react"
import { useState } from "react"

export default function ReelsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [currentReel, setCurrentReel] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const reels = [
    {
      id: 1,
      author: {
        name: "Ana García",
        username: "@ana_dev",
        avatar: "",
        verified: true,
      },
      title: "Mi primer día como desarrolladora 👩‍💻",
      description:
        "Compartiendo mi experiencia en mi primer día de trabajo como desarrolladora frontend. ¡Estoy muy emocionada! #PrimerTrabajo #Desarrolladora",
      thumbnail: "/placeholder.svg?height=600&width=400",
      duration: "0:45",
      views: 1247,
      likes: 89,
      comments: 23,
      shares: 12,
      tags: ["Trabajo", "Desarrollo", "Experiencia"],
      liked: false,
      bookmarked: false,
      timestamp: "Hace 2 horas",
    },
    {
      id: 2,
      author: {
        name: "Carlos Tech",
        username: "@carlos_tech",
        avatar: "",
        verified: false,
      },
      title: "Tutorial: React Hooks en 60 segundos ⚡",
      description:
        "Aprende los conceptos básicos de React Hooks en menos de un minuto. ¡Perfecto para principiantes! #React #Tutorial #JavaScript",
      thumbnail: "/placeholder.svg?height=600&width=400",
      duration: "1:00",
      views: 3456,
      likes: 234,
      comments: 67,
      shares: 45,
      tags: ["React", "Tutorial", "JavaScript"],
      liked: true,
      bookmarked: true,
      timestamp: "Hace 5 horas",
    },
    {
      id: 3,
      author: {
        name: "Universidad UBA",
        username: "@uba_oficial",
        avatar: "",
        verified: true,
      },
      title: "Laboratorio de IA en acción 🤖",
      description:
        "Conoce nuestro nuevo laboratorio de Inteligencia Artificial donde los estudiantes desarrollan proyectos innovadores. #IA #Universidad #Innovación",
      thumbnail: "/placeholder.svg?height=600&width=400",
      duration: "1:30",
      views: 5678,
      likes: 456,
      comments: 89,
      shares: 78,
      tags: ["IA", "Universidad", "Laboratorio"],
      liked: false,
      bookmarked: false,
      timestamp: "Hace 1 día",
    },
    {
      id: 4,
      author: {
        name: "María UX",
        username: "@maria_ux",
        avatar: "",
        verified: false,
      },
      title: "Proceso de diseño UX paso a paso 🎨",
      description:
        "Te muestro mi proceso completo de diseño UX desde la investigación hasta el prototipo final. #UX #Diseño #Proceso",
      thumbnail: "/placeholder.svg?height=600&width=400",
      duration: "2:15",
      views: 2345,
      likes: 178,
      comments: 34,
      shares: 23,
      tags: ["UX", "Diseño", "Tutorial"],
      liked: true,
      bookmarked: false,
      timestamp: "Hace 2 días",
    },
  ]

  const handleLike = (reelId: number) => {
    // Implementar lógica de like
    console.log(`Liked reel ${reelId}`)
  }

  const handleBookmark = (reelId: number) => {
    // Implementar lógica de bookmark
    console.log(`Bookmarked reel ${reelId}`)
  }

  const handleShare = (reelId: number) => {
    // Implementar lógica de compartir
    console.log(`Shared reel ${reelId}`)
  }

  const currentReelData = reels[currentReel]

  return (
    <div className="max-w-md mx-auto h-screen bg-black relative overflow-hidden">
      {/* Reel Container */}
      <div className="relative h-full">
        {/* Video/Image Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
          <img
            src={currentReelData.thumbnail || "/placeholder.svg"}
            alt={currentReelData.title}
            className="w-full h-full object-cover"
          />

          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white/80 hover:text-white hover:bg-black/20 rounded-full p-4"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </Button>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="text-white">
            <h1 className="text-lg font-bold">{t("reels")}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:bg-black/20 rounded-full p-2"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-black/20 rounded-full p-2">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="flex items-end justify-between">
            {/* Left Content */}
            <div className="flex-1 mr-4">
              {/* Author Info */}
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={currentReelData.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                    {currentReelData.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-semibold text-sm">{currentReelData.author.name}</span>
                    {currentReelData.author.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <span className="text-white/70 text-xs">{currentReelData.author.username}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-black text-xs px-3 py-1"
                >
                  Seguir
                </Button>
              </div>

              {/* Title and Description */}
              <div className="mb-3">
                <h3 className="text-white font-semibold mb-1">{currentReelData.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{currentReelData.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {currentReelData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-4 text-white/70 text-xs">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{currentReelData.views.toLocaleString()}</span>
                </div>
                <span>{currentReelData.timestamp}</span>
                <span>{currentReelData.duration}</span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(currentReelData.id)}
                className={`text-white hover:bg-black/20 rounded-full p-3 flex flex-col items-center ${
                  currentReelData.liked ? "text-red-500" : ""
                }`}
              >
                <Heart className={`w-6 h-6 ${currentReelData.liked ? "fill-current" : ""}`} />
                <span className="text-xs mt-1">{currentReelData.likes}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-black/20 rounded-full p-3 flex flex-col items-center"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs mt-1">{currentReelData.comments}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare(currentReelData.id)}
                className="text-white hover:bg-black/20 rounded-full p-3 flex flex-col items-center"
              >
                <Share2 className="w-6 h-6" />
                <span className="text-xs mt-1">{currentReelData.shares}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleBookmark(currentReelData.id)}
                className={`text-white hover:bg-black/20 rounded-full p-3 ${
                  currentReelData.bookmarked ? "text-yellow-500" : ""
                }`}
              >
                <Bookmark className={`w-6 h-6 ${currentReelData.bookmarked ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReel(index)}
              className={`w-1 h-8 rounded-full transition-all ${index === currentReel ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>

        {/* Swipe Areas */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 cursor-pointer" onClick={() => setCurrentReel(Math.max(0, currentReel - 1))} />
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setCurrentReel(Math.min(reels.length - 1, currentReel + 1))}
          />
        </div>
      </div>

      {/* Mobile Navigation Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/50 text-xs text-center">
        <p>Desliza hacia arriba o abajo para ver más reels</p>
      </div>
    </div>
  )
}
