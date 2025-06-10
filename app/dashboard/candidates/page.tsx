"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Star,
  MapPin,
  Calendar,
  CheckCircle,
  Eye,
  MessageCircle,
  Download,
  Heart,
  X,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { useState } from "react"

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPosition, setFilterPosition] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const candidates = [
    {
      id: 1,
      name: "Ana García",
      position: "Desarrollador Full Stack Senior",
      university: "Universidad de Buenos Aires",
      career: "Ingeniería en Sistemas",
      location: "Buenos Aires",
      appliedDate: "Hace 2 días",
      status: "Nuevo",
      experience: "2 años",
      skills: ["React", "Node.js", "Python", "MongoDB"],
      gpa: 9.2,
      validations: 5,
      avatar: "",
      coverLetter: "Me interesa mucho esta posición porque...",
      portfolio: "https://ana-garcia.dev",
      availability: "Inmediata",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Desarrollador Full Stack Senior",
      university: "Universidad Nacional de Córdoba",
      career: "Licenciatura en Sistemas",
      location: "Córdoba",
      appliedDate: "Hace 1 día",
      status: "En revisión",
      experience: "1.5 años",
      skills: ["Vue.js", "Laravel", "MySQL", "Docker"],
      gpa: 8.8,
      validations: 3,
      avatar: "",
      coverLetter: "Tengo experiencia trabajando con...",
      portfolio: "https://carlos-dev.com",
      availability: "2 semanas",
    },
    {
      id: 3,
      name: "María González",
      position: "Diseñador UX/UI",
      university: "Universidad de Palermo",
      career: "Diseño Gráfico",
      location: "Buenos Aires",
      appliedDate: "Hace 3 días",
      status: "Entrevista programada",
      experience: "1 año",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      gpa: 9.5,
      validations: 4,
      avatar: "",
      coverLetter: "Mi pasión por el diseño centrado en el usuario...",
      portfolio: "https://maria-ux.design",
      availability: "1 mes",
    },
    {
      id: 4,
      name: "Luis Martínez",
      position: "Pasantía en Data Science",
      university: "Universidad Tecnológica Nacional",
      career: "Ingeniería en Sistemas",
      location: "Buenos Aires",
      appliedDate: "Hace 5 días",
      status: "Rechazado",
      experience: "Sin experiencia",
      skills: ["Python", "R", "Machine Learning", "SQL"],
      gpa: 9.0,
      validations: 2,
      avatar: "",
      coverLetter: "Aunque no tengo experiencia laboral...",
      portfolio: "https://luis-data.github.io",
      availability: "Inmediata",
    },
    {
      id: 5,
      name: "Sofia López",
      position: "Diseñador UX/UI",
      university: "Universidad de Buenos Aires",
      career: "Diseño Industrial",
      location: "Buenos Aires",
      appliedDate: "Hace 1 semana",
      status: "Contratado",
      experience: "6 meses",
      skills: ["Sketch", "InVision", "Principle", "Zeplin"],
      gpa: 8.9,
      validations: 3,
      avatar: "",
      coverLetter: "Mi experiencia en diseño industrial me ha dado...",
      portfolio: "https://sofia-design.com",
      availability: "Contratada",
    },
  ]

  const positions = ["Desarrollador Full Stack Senior", "Diseñador UX/UI", "Pasantía en Data Science"]
  const statuses = ["Nuevo", "En revisión", "Entrevista programada", "Contratado", "Rechazado"]

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesPosition = filterPosition === "all" || candidate.position === filterPosition
    const matchesStatus = filterStatus === "all" || candidate.status === filterStatus

    return matchesSearch && matchesPosition && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nuevo":
        return "bg-blue-100 text-blue-700"
      case "En revisión":
        return "bg-amber-100 text-amber-700"
      case "Entrevista programada":
        return "bg-purple-100 text-purple-700"
      case "Contratado":
        return "bg-emerald-100 text-emerald-700"
      case "Rechazado":
        return "bg-red-100 text-red-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const candidatesByStatus = {
    new: candidates.filter((c) => c.status === "Nuevo"),
    reviewing: candidates.filter((c) => c.status === "En revisión"),
    interview: candidates.filter((c) => c.status === "Entrevista programada"),
    hired: candidates.filter((c) => c.status === "Contratado"),
    rejected: candidates.filter((c) => c.status === "Rechazado"),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestión de Candidatos</h1>
          <p className="text-slate-600">Revisa y gestiona las aplicaciones para tus ofertas laborales</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar CV
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avanzados
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{candidatesByStatus.new.length}</p>
              <p className="text-sm text-slate-600">Nuevos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">{candidatesByStatus.reviewing.length}</p>
              <p className="text-sm text-slate-600">En Revisión</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{candidatesByStatus.interview.length}</p>
              <p className="text-sm text-slate-600">Entrevistas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-600">{candidatesByStatus.hired.length}</p>
              <p className="text-sm text-slate-600">Contratados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{candidatesByStatus.rejected.length}</p>
              <p className="text-sm text-slate-600">Rechazados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Búsqueda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar candidatos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterPosition} onValueChange={setFilterPosition}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por posición" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las posiciones</SelectItem>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Candidates List */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Todos ({candidates.length})</TabsTrigger>
          <TabsTrigger value="new">Nuevos ({candidatesByStatus.new.length})</TabsTrigger>
          <TabsTrigger value="reviewing">En Revisión ({candidatesByStatus.reviewing.length})</TabsTrigger>
          <TabsTrigger value="interview">Entrevistas ({candidatesByStatus.interview.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg">
                        {candidate.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-slate-800">{candidate.name}</h3>
                        <Badge variant="secondary" className={getStatusColor(candidate.status)}>
                          {candidate.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <Briefcase className="w-4 h-4 mr-2" />
                            Aplicó para: {candidate.position}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {candidate.career} - {candidate.university}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            {candidate.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            Aplicó {candidate.appliedDate}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="font-medium">GPA: {candidate.gpa}</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-1" />
                              <span>{candidate.validations} validaciones</span>
                            </div>
                          </div>
                          <div className="text-sm text-slate-600 mb-1">Experiencia: {candidate.experience}</div>
                          <div className="text-sm text-slate-600">Disponibilidad: {candidate.availability}</div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Habilidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Cover Letter Preview */}
                      <div>
                        <h4 className="text-sm font-medium text-slate-700 mb-1">Carta de Presentación:</h4>
                        <p className="text-sm text-slate-600 italic">"{candidate.coverLetter}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Perfil
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline" className="flex-1 text-emerald-600 hover:bg-emerald-50">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-red-600 hover:bg-red-50">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          {candidatesByStatus.new.map((candidate) => (
            <Card key={candidate.id} className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                        {candidate.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
                      <p className="text-sm text-slate-600">{candidate.position}</p>
                      <p className="text-sm text-slate-500">{candidate.university}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Revisar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="reviewing" className="space-y-4">
          {candidatesByStatus.reviewing.map((candidate) => (
            <Card key={candidate.id} className="border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                        {candidate.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
                      <p className="text-sm text-slate-600">{candidate.position}</p>
                      <p className="text-sm text-slate-500">En revisión desde {candidate.appliedDate}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                      Programar Entrevista
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                      Rechazar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4">
          {candidatesByStatus.interview.map((candidate) => (
            <Card key={candidate.id} className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                        {candidate.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
                      <p className="text-sm text-slate-600">{candidate.position}</p>
                      <p className="text-sm text-slate-500">Entrevista programada</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Contratar
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
