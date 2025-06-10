"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  ImageIcon,
  Video,
  FileText,
  Send,
  Bookmark,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"

export default function FeedPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [newPost, setNewPost] = useState("")
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Ana García",
        role: "Estudiante de Ingeniería",
        university: "Universidad de Buenos Aires",
        avatar: "",
      },
      content:
        "¡Acabo de completar mi primer proyecto en React! 🚀 Fue desafiante pero muy gratificante. Gracias a todos los que me ayudaron en el proceso.",
      timestamp: "Hace 2 horas",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["React", "JavaScript", "Desarrollo"],
      type: "text",
      liked: false,
      bookmarked: false,
    },
    {
      id: 2,
      author: {
        name: "TechCorp SA",
        role: "Empresa",
        university: "",
        avatar: "",
      },
      content:
        "🔥 Nueva oportunidad laboral: Buscamos Desarrollador Full Stack Junior. Excelente oportunidad para recién graduados. ¡Postúlate ahora!",
      timestamp: "Hace 4 horas",
      likes: 45,
      comments: 12,
      shares: 18,
      tags: ["Trabajo", "FullStack", "Junior"],
      type: "job",
      liked: true,
      bookmarked: true,
    },
    {
      id: 3,
      author: {
        name: "Universidad de Buenos Aires",
        role: "Casa de Estudios",
        university: "",
        avatar: "",
      },
      content:
        "📚 Recordatorio: Las inscripciones para el curso de Machine Learning están abiertas hasta el viernes. ¡No te pierdas esta oportunidad!",
      timestamp: "Hace 6 horas",
      likes: 67,
      comments: 23,
      shares: 34,
      tags: ["MachineLearning", "Curso", "Educación"],
      type: "announcement",
      liked: false,
      bookmarked: false,
    },
    {
      id: 4,
      author: {
        name: "Carlos Rodríguez",
        role: "Estudiante de Data Science",
        university: "Universidad Nacional de Córdoba",
        avatar: "",
      },
      content:
        "Compartiendo mi experiencia en la pasantía en DataCorp. Aprendí muchísimo sobre análisis de datos y visualización. ¡Recomiendo a todos buscar estas oportunidades!",
      timestamp: "Hace 1 día",
      likes: 89,
      comments: 15,
      shares: 7,
      tags: ["DataScience", "Pasantía", "Experiencia"],
      type: "experience",
      liked: true,
      bookmarked: false,
    },
  ])

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: {
          name: "Usuario Actual",
          role: "Estudiante",
          university: "Mi Universidad",
          avatar: "",
        },
        content: newPost,
        timestamp: "Ahora",
        likes: 0,
        comments: 0,
        shares: 0,
        tags: [],
        type: "text" as const,
        liked: false,
        bookmarked: false,
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    )
  }

  const handleBookmark = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post)))
  }

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "job":
        return "bg-emerald-100 text-emerald-700"
      case "announcement":
        return "bg-blue-100 text-blue-700"
      case "experience":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "job":
        return "💼"
      case "announcement":
        return "📢"
      case "experience":
        return "⭐"
      default:
        return "💭"
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-800">{t("feed")}</h1>
        <p className="text-slate-600">Mantente conectado con la comunidad universitaria</p>
      </div>

      {/* Create Post */}
      <Card className="border-emerald-100">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="¿Qué quieres compartir con la comunidad?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[80px] border-0 resize-none focus-visible:ring-0 text-base"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-slate-600">
                <ImageIcon className="w-4 h-4 mr-2" />
                Imagen
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                <FileText className="w-4 h-4 mr-2" />
                Documento
              </Button>
            </div>
            <Button
              onClick={handleCreatePost}
              disabled={!newPost.trim()}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
            >
              <Send className="w-4 h-4 mr-2" />
              Publicar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-slate-800">Tendencias</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["React", "DataScience", "Pasantías", "JavaScript", "MachineLearning", "UX/UI"].map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-emerald-100">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-slate-800">{post.author.name}</h4>
                    <p className="text-sm text-slate-600">{post.author.role}</p>
                    {post.author.university && <p className="text-xs text-slate-500">{post.author.university}</p>}
                    <p className="text-xs text-slate-500">{post.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {post.type !== "text" && (
                    <Badge variant="secondary" className={getPostTypeColor(post.type)}>
                      {getPostTypeIcon(post.type)} {post.type}
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-slate-800 leading-relaxed">{post.content}</p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-emerald-50">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`${post.liked ? "text-red-600 hover:text-red-700" : "text-slate-600 hover:text-slate-700"}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${post.liked ? "fill-current" : ""}`} />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    {post.shares}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleBookmark(post.id)}
                  className={`${post.bookmarked ? "text-emerald-600 hover:text-emerald-700" : "text-slate-600 hover:text-slate-700"}`}
                >
                  <Bookmark className={`w-4 h-4 ${post.bookmarked ? "fill-current" : ""}`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
          Cargar más publicaciones
        </Button>
      </div>
    </div>
  )
}
