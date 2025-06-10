"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Building2,
  Users,
  Star,
  MapPin,
  Calendar,
  Eye,
  MessageCircle,
  Plus,
  Filter,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCountry, setFilterCountry] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const universities = [
    {
      id: 1,
      name: "Universidad de Buenos Aires",
      country: "Argentina",
      city: "Buenos Aires",
      type: "Pública",
      studentsAvailable: 1247,
      partnershipsActive: 12,
      rating: 4.8,
      specialties: ["Ingeniería", "Medicina", "Derecho", "Ciencias Económicas"],
      status: "Asociada",
      partnershipDate: "Enero 2023",
      studentsHired: 45,
      logo: "/logo.png",
      contact: {
        name: "Dr. María González",
        position: "Directora de Vinculación",
        email: "vinculacion@uba.ar",
        phone: "+54 11 5287-1234",
      },
      description: "Universidad pública líder en Argentina con excelencia académica y amplia oferta de carreras.",
      recentActivity: "15 estudiantes validados esta semana",
    },
    {
      id: 2,
      name: "Universidad Nacional de Córdoba",
      country: "Argentina",
      city: "Córdoba",
      type: "Pública",
      studentsAvailable: 892,
      partnershipsActive: 8,
      rating: 4.6,
      specialties: ["Ingeniería", "Arquitectura", "Ciencias Exactas", "Psicología"],
      status: "Asociada",
      partnershipDate: "Marzo 2023",
      studentsHired: 28,
      logo: "",
      contact: {
        name: "Lic. Carlos Rodríguez",
        position: "Coordinador de Prácticas",
        email: "practicas@unc.edu.ar",
        phone: "+54 351 433-4567",
      },
      description: "Una de las universidades más antiguas de Argentina con fuerte tradición en investigación.",
      recentActivity: "Nueva carrera de Data Science aprobada",
    },
    {
      id: 3,
      name: "Universidad Tecnológica Nacional",
      country: "Argentina",
      city: "Buenos Aires",
      type: "Pública",
      studentsAvailable: 654,
      partnershipsActive: 15,
      rating: 4.7,
      specialties: ["Ingeniería", "Sistemas", "Industrial", "Electrónica"],
      status: "Asociada",
      partnershipDate: "Junio 2023",
      studentsHired: 32,
      logo: "",
      contact: {
        name: "Ing. Ana Martínez",
        position: "Secretaria de Extensión",
        email: "extension@utn.edu.ar",
        phone: "+54 11 4867-7890",
      },
      description: "Universidad especializada en tecnología e ingeniería con fuerte vínculo con la industria.",
      recentActivity: "Convenio firmado con 3 nuevas empresas",
    },
    {
      id: 4,
      name: "Universidad de Palermo",
      country: "Argentina",
      city: "Buenos Aires",
      type: "Privada",
      studentsAvailable: 423,
      partnershipsActive: 6,
      rating: 4.4,
      specialties: ["Diseño", "Comunicación", "Negocios", "Arquitectura"],
      status: "Pendiente",
      partnershipDate: "Noviembre 2024",
      studentsHired: 0,
      logo: "",
      contact: {
        name: "Lic. Sofia López",
        position: "Directora de Carreras",
        email: "carreras@palermo.edu",
        phone: "+54 11 5199-4500",
      },
      description: "Universidad privada reconocida por su innovación en diseño y comunicación.",
      recentActivity: "Solicitud de asociación enviada",
    },
    {
      id: 5,
      name: "Universidad Católica Argentina",
      country: "Argentina",
      city: "Buenos Aires",
      type: "Privada",
      studentsAvailable: 567,
      partnershipsActive: 4,
      rating: 4.5,
      specialties: ["Derecho", "Medicina", "Filosofía", "Economía"],
      status: "Inactiva",
      partnershipDate: "Agosto 2022",
      studentsHired: 8,
      logo: "",
      contact: {
        name: "Dr. Luis Fernández",
        position: "Vicerrector Académico",
        email: "academico@uca.edu.ar",
        phone: "+54 11 4338-0800",
      },
      description: "Universidad católica con tradición en humanidades y ciencias sociales.",
      recentActivity: "Sin actividad en los últimos 6 meses",
    },
  ]

  const countries = ["Argentina", "Chile", "Uruguay", "Brasil"]
  const statuses = ["Asociada", "Pendiente", "Inactiva"]

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCountry = filterCountry === "all" || university.country === filterCountry
    const matchesStatus = filterStatus === "all" || university.status === filterStatus

    return matchesSearch && matchesCountry && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Asociada":
        return "bg-emerald-100 text-emerald-700"
      case "Pendiente":
        return "bg-amber-100 text-amber-700"
      case "Inactiva":
        return "bg-slate-100 text-slate-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Pública":
        return "bg-blue-100 text-blue-700"
      case "Privada":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Casas de Estudios Asociadas</h1>
          <p className="text-slate-600">Gestiona relaciones con universidades e instituciones educativas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avanzados
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Asociación
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Casas de Estudios</p>
                <p className="text-2xl font-bold text-slate-800">{universities.length}</p>
              </div>
              <Building2 className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Asociaciones Activas</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {universities.filter((u) => u.status === "Asociada").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Estudiantes Disponibles</p>
                <p className="text-2xl font-bold text-slate-800">
                  {universities.reduce((sum, u) => sum + u.studentsAvailable, 0).toLocaleString()}
                </p>
              </div>
              <Users className="w-8 h-8 text-slate-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Estudiantes Contratados</p>
                <p className="text-2xl font-bold text-amber-600">
                  {universities.reduce((sum, u) => sum + u.studentsHired, 0)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-600" />
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
                placeholder="Buscar casas de estudios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCountry} onValueChange={setFilterCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los países</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
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

      {/* Universities List */}
      <div className="grid gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={university.logo || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg">
                      {university.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{university.name}</h3>
                      <Badge variant="secondary" className={getStatusColor(university.status)}>
                        {university.status}
                      </Badge>
                      <Badge variant="secondary" className={getTypeColor(university.type)}>
                        {university.type}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {university.city}, {university.country}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          Asociada desde {university.partnershipDate}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          Rating: {university.rating}/5
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-emerald-500 mr-1" />
                            <span>{university.studentsAvailable.toLocaleString()} estudiantes</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 text-amber-500 mr-1" />
                            <span>{university.studentsHired} contratados</span>
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">
                          {university.partnershipsActive} colaboraciones activas
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-3">{university.description}</p>

                    {/* Specialties */}
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {university.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-sm text-slate-600 mb-2">
                      <span className="font-medium">Contacto:</span> {university.contact.name} (
                      {university.contact.position})
                      <br />
                      <span className="text-slate-500">
                        {university.contact.email} • {university.contact.phone}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500">{university.recentActivity}</div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar
                  </Button>
                  {university.status === "Pendiente" && (
                    <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-600">
                      Aprobar
                    </Button>
                  )}
                  {university.status === "Inactiva" && (
                    <Button size="sm" variant="outline" className="border-amber-200 text-amber-600">
                      Reactivar
                    </Button>
                  )}
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
        <Button variant="outline" className="bg-cyan-50 text-cyan-600">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">Siguiente</Button>
      </div>
    </div>
  )
}
