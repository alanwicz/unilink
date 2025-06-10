"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  GraduationCap,
  Star,
  MapPin,
  Calendar,
  CheckCircle,
  Eye,
  MessageCircle,
  MoreHorizontal,
  Download,
  UserPlus,
} from "lucide-react"
import { useState } from "react"

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCareer, setFilterCareer] = useState("all")
  const [filterYear, setFilterYear] = useState("all")

  const students = [
    {
      id: 1,
      name: "Ana García",
      career: "Ingeniería en Sistemas",
      year: "5to año",
      gpa: 9.2,
      location: "Buenos Aires",
      validations: 5,
      skills: ["React", "Node.js", "Python", "MongoDB"],
      experience: [
        { company: "TechStart", position: "Desarrolladora Frontend", duration: "6 meses", validated: true },
        { company: "DataCorp", position: "Analista Junior", duration: "3 meses", validated: true },
      ],
      projects: 8,
      avatar: "",
      status: "Buscando empleo",
      lastActive: "Hace 2 horas",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      career: "Licenciatura en Datos",
      year: "4to año",
      gpa: 8.8,
      location: "Córdoba",
      validations: 3,
      skills: ["Python", "R", "Machine Learning", "SQL"],
      experience: [{ company: "DataCorp", position: "Analista de Datos", duration: "4 meses", validated: true }],
      projects: 12,
      avatar: "",
      status: "Disponible para pasantías",
      lastActive: "Hace 1 día",
    },
    {
      id: 3,
      name: "María González",
      career: "Diseño Gráfico",
      year: "3er año",
      gpa: 9.5,
      location: "Rosario",
      validations: 4,
      skills: ["Figma", "Adobe Creative Suite", "UX/UI", "Prototyping"],
      experience: [
        { company: "DesignStudio", position: "Diseñadora UX", duration: "5 meses", validated: true },
        { company: "CreativeAgency", position: "Diseñadora Gráfica", duration: "2 meses", validated: false },
      ],
      projects: 15,
      avatar: "",
      status: "Empleada",
      lastActive: "Hace 3 horas",
    },
    {
      id: 4,
      name: "Luis Martínez",
      career: "Ingeniería en Software",
      year: "5to año",
      gpa: 9.0,
      location: "Buenos Aires",
      validations: 6,
      skills: ["Java", "Spring", "Docker", "AWS"],
      experience: [
        { company: "TechCorp", position: "Desarrollador Backend", duration: "8 meses", validated: true },
        { company: "StartupTech", position: "Full Stack Developer", duration: "4 meses", validated: true },
      ],
      projects: 10,
      avatar: "",
      status: "Buscando empleo",
      lastActive: "Hace 30 min",
    },
    {
      id: 5,
      name: "Sofia López",
      career: "Marketing Digital",
      year: "4to año",
      gpa: 8.9,
      location: "Mendoza",
      validations: 2,
      skills: ["SEO", "Google Analytics", "Social Media", "Content Marketing"],
      experience: [{ company: "CreativeAgency", position: "Community Manager", duration: "6 meses", validated: true }],
      projects: 7,
      avatar: "",
      status: "Disponible para pasantías",
      lastActive: "Hace 5 horas",
    },
  ]

  const careers = [
    "Ingeniería en Sistemas",
    "Licenciatura en Datos",
    "Diseño Gráfico",
    "Ingeniería en Software",
    "Marketing Digital",
  ]
  const years = ["1er año", "2do año", "3er año", "4to año", "5to año", "Graduado"]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.career.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCareer = filterCareer === "all" || student.career === filterCareer
    const matchesYear = filterYear === "all" || student.year === filterYear

    return matchesSearch && matchesCareer && matchesYear
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Buscando empleo":
        return "bg-emerald-100 text-emerald-700"
      case "Disponible para pasantías":
        return "bg-cyan-100 text-cyan-700"
      case "Empleada":
      case "Empleado":
        return "bg-slate-100 text-slate-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestión de Estudiantes</h1>
          <p className="text-slate-600">Administra y supervisa a los estudiantes de tu universidad</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
            <UserPlus className="w-4 h-4 mr-2" />
            Invitar Estudiante
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Estudiantes</p>
                <p className="text-2xl font-bold text-slate-800">1,247</p>
              </div>
              <GraduationCap className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Buscando Empleo</p>
                <p className="text-2xl font-bold text-slate-800">342</p>
              </div>
              <Search className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Empleados</p>
                <p className="text-2xl font-bold text-slate-800">678</p>
              </div>
              <CheckCircle className="w-8 h-8 text-slate-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Promedio GPA</p>
                <p className="text-2xl font-bold text-slate-800">8.7</p>
              </div>
              <Star className="w-8 h-8 text-amber-600" />
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar estudiantes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCareer} onValueChange={setFilterCareer}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por carrera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las carreras</SelectItem>
                {careers.map((career) => (
                  <SelectItem key={career} value={career}>
                    {career}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los años</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Más Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students List */}
      <div className="grid gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg">
                      {student.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{student.name}</h3>
                      <Badge variant="secondary" className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {student.career} - {student.year}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {student.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Activo {student.lastActive}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="font-medium">GPA: {student.gpa}</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-1" />
                            <span>{student.validations} validaciones</span>
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">
                          {student.projects} proyectos • {student.experience.length} experiencias
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Habilidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Experiencia Reciente:</h4>
                      <div className="space-y-2">
                        {student.experience.slice(0, 2).map((exp, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div>
                              <span className="font-medium">{exp.position}</span> en{" "}
                              <span className="text-slate-600">{exp.company}</span>
                              <span className="text-slate-500"> • {exp.duration}</span>
                            </div>
                            {exp.validated ? (
                              <Badge className="bg-emerald-100 text-emerald-700 text-xs">Validada</Badge>
                            ) : (
                              <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-xs">
                                Pendiente
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
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
                  <Button size="sm" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" disabled>
          Anterior
        </Button>
        <Button variant="outline" className="bg-emerald-50 text-emerald-600">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Siguiente</Button>
      </div>
    </div>
  )
}
