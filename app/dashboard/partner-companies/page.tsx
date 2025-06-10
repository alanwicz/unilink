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
  Briefcase,
  TrendingUp,
  MapPin,
  Calendar,
  Star,
  MessageCircle,
  Eye,
  Plus,
  Filter,
  Download,
} from "lucide-react"
import { useState } from "react"

export default function PartnerCompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterIndustry, setFilterIndustry] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const companies = [
    {
      id: 1,
      name: "TechCorp SA",
      industry: "Tecnología",
      size: "Grande (500+ empleados)",
      location: "Buenos Aires",
      logo: "",
      status: "Activa",
      partnership: {
        startDate: "Enero 2023",
        studentsHired: 45,
        activeRoles: 8,
        averageRating: 4.8,
      },
      contact: {
        name: "María González",
        position: "HR Director",
        email: "maria.gonzalez@techcorp.com",
        phone: "+54 11 1234-5678",
      },
      benefits: ["Seguro médico", "Capacitaciones", "Trabajo remoto", "Bonos por performance"],
      description: "Empresa líder en desarrollo de software y soluciones tecnológicas innovadoras.",
      recentActivity: "Publicó 3 nuevas ofertas hace 2 días",
    },
    {
      id: 2,
      name: "DataCorp Analytics",
      industry: "Análisis de Datos",
      size: "Mediana (100-500 empleados)",
      location: "Córdoba",
      logo: "",
      status: "Activa",
      partnership: {
        startDate: "Marzo 2023",
        studentsHired: 28,
        activeRoles: 5,
        averageRating: 4.6,
      },
      contact: {
        name: "Carlos Rodríguez",
        position: "Talent Acquisition Manager",
        email: "carlos.rodriguez@datacorp.com",
        phone: "+54 351 987-6543",
      },
      benefits: ["Horarios flexibles", "Capacitación en IA", "Equipos de última generación"],
      description: "Especialistas en análisis de datos y business intelligence para empresas.",
      recentActivity: "Contrató 2 estudiantes la semana pasada",
    },
    {
      id: 3,
      name: "CreativeAgency",
      industry: "Marketing y Publicidad",
      size: "Pequeña (10-100 empleados)",
      location: "Rosario",
      logo: "",
      status: "Activa",
      partnership: {
        startDate: "Junio 2023",
        studentsHired: 15,
        activeRoles: 3,
        averageRating: 4.4,
      },
      contact: {
        name: "Ana Martínez",
        position: "Creative Director",
        email: "ana.martinez@creativeagency.com",
        phone: "+54 341 555-0123",
      },
      benefits: ["Ambiente creativo", "Proyectos internacionales", "Días de home office"],
      description: "Agencia de marketing digital y publicidad con clientes nacionales e internacionales.",
      recentActivity: "Validó experiencias de 3 estudiantes",
    },
    {
      id: 4,
      name: "StartupTech",
      industry: "Tecnología",
      size: "Startup (1-50 empleados)",
      location: "Buenos Aires",
      logo: "",
      status: "Pendiente",
      partnership: {
        startDate: "Noviembre 2024",
        studentsHired: 0,
        activeRoles: 2,
        averageRating: 0,
      },
      contact: {
        name: "Luis Fernández",
        position: "CEO",
        email: "luis.fernandez@startuptech.com",
        phone: "+54 11 9876-5432",
      },
      benefits: ["Equity participation", "Aprendizaje acelerado", "Mentoría directa"],
      description: "Startup enfocada en soluciones de inteligencia artificial para el sector financiero.",
      recentActivity: "Solicitó asociación hace 1 semana",
    },
    {
      id: 5,
      name: "DesignStudio",
      industry: "Diseño",
      size: "Mediana (50-200 empleados)",
      location: "Mendoza",
      logo: "",
      status: "Inactiva",
      partnership: {
        startDate: "Agosto 2022",
        studentsHired: 12,
        activeRoles: 0,
        averageRating: 4.2,
      },
      contact: {
        name: "Sofia López",
        position: "HR Manager",
        email: "sofia.lopez@designstudio.com",
        phone: "+54 261 444-7890",
      },
      benefits: ["Proyectos creativos", "Capacitación en diseño", "Ambiente colaborativo"],
      description: "Estudio de diseño especializado en branding y experiencia de usuario.",
      recentActivity: "Sin actividad en los últimos 3 meses",
    },
  ]

  const industries = ["Tecnología", "Análisis de Datos", "Marketing y Publicidad", "Diseño", "Finanzas"]
  const statuses = ["Activa", "Pendiente", "Inactiva"]

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = filterIndustry === "all" || company.industry === filterIndustry
    const matchesStatus = filterStatus === "all" || company.status === filterStatus

    return matchesSearch && matchesIndustry && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activa":
        return "bg-emerald-100 text-emerald-700"
      case "Pendiente":
        return "bg-amber-100 text-amber-700"
      case "Inactiva":
        return "bg-slate-100 text-slate-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const getSizeColor = (size: string) => {
    if (size.includes("Grande")) return "bg-blue-100 text-blue-700"
    if (size.includes("Mediana")) return "bg-purple-100 text-purple-700"
    if (size.includes("Pequeña")) return "bg-green-100 text-green-700"
    if (size.includes("Startup")) return "bg-orange-100 text-orange-700"
    return "bg-slate-100 text-slate-700"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Empresas Asociadas</h1>
          <p className="text-slate-600">Gestiona las colaboraciones con empresas y organizaciones</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
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
                <p className="text-sm font-medium text-slate-600">Total Empresas</p>
                <p className="text-2xl font-bold text-slate-800">{companies.length}</p>
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
                  {companies.filter((c) => c.status === "Activa").length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Estudiantes Contratados</p>
                <p className="text-2xl font-bold text-slate-800">
                  {companies.reduce((sum, c) => sum + c.partnership.studentsHired, 0)}
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
                <p className="text-sm font-medium text-slate-600">Roles Activos</p>
                <p className="text-2xl font-bold text-amber-600">
                  {companies.reduce((sum, c) => sum + c.partnership.activeRoles, 0)}
                </p>
              </div>
              <Briefcase className="w-8 h-8 text-amber-600" />
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
                placeholder="Buscar empresas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterIndustry} onValueChange={setFilterIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por industria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las industrias</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
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
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Más Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Companies List */}
      <div className="grid gap-6">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={company.logo || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg">
                      {company.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{company.name}</h3>
                      <Badge variant="secondary" className={getStatusColor(company.status)}>
                        {company.status}
                      </Badge>
                      <Badge variant="secondary" className={getSizeColor(company.size)}>
                        {company.size.split(" ")[0]}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <Building2 className="w-4 h-4 mr-2" />
                          {company.industry}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {company.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Asociada desde {company.partnership.startDate}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-emerald-500 mr-1" />
                            <span>{company.partnership.studentsHired} contratados</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 text-amber-500 mr-1" />
                            <span>{company.partnership.activeRoles} roles activos</span>
                          </div>
                        </div>
                        {company.partnership.averageRating > 0 && (
                          <div className="flex items-center text-sm text-slate-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span>{company.partnership.averageRating} rating promedio</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-3">{company.description}</p>

                    {/* Benefits */}
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Beneficios:</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.benefits.map((benefit, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-sm text-slate-600">
                      <span className="font-medium">Contacto:</span> {company.contact.name} ({company.contact.position})
                      <br />
                      <span className="text-slate-500">
                        {company.contact.email} • {company.contact.phone}
                      </span>
                    </div>

                    <div className="mt-2 text-xs text-slate-500">{company.recentActivity}</div>
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
                  {company.status === "Pendiente" && (
                    <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-600">
                      Aprobar
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
