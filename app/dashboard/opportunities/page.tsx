"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Users,
  Eye,
  Send,
  Filter,
  TrendingUp,
  Clock,
} from "lucide-react"
import { useState } from "react"

export default function OpportunitiesPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    benefits: "",
    type: "",
    location: "",
    students: "",
  })

  const opportunities = [
    {
      id: 1,
      title: "Programa de Pasantías en Desarrollo Frontend",
      company: "TechCorp SA",
      type: "Pasantía",
      location: "Buenos Aires",
      studentsNeeded: 5,
      studentsApplied: 23,
      description: "Buscamos estudiantes de últimos años para unirse a nuestro equipo de desarrollo frontend.",
      requirements: ["React", "JavaScript", "CSS", "Git"],
      benefits: ["Mentoring", "Certificación", "Posibilidad de contratación"],
      status: "Activa",
      createdDate: "Hace 3 días",
      deadline: "15 Dic 2024",
      contact: "maria.gonzalez@techcorp.com",
    },
    {
      id: 2,
      title: "Analistas de Datos Junior",
      company: "DataCorp Analytics",
      type: "Tiempo completo",
      location: "Córdoba",
      studentsNeeded: 3,
      studentsApplied: 18,
      description: "Oportunidad para graduados recientes en carreras relacionadas con datos y estadística.",
      requirements: ["Python", "SQL", "Estadística", "Machine Learning"],
      benefits: ["Capacitación continua", "Proyectos internacionales", "Crecimiento profesional"],
      status: "Activa",
      createdDate: "Hace 1 semana",
      deadline: "20 Dic 2024",
      contact: "carlos.rodriguez@datacorp.com",
    },
    {
      id: 3,
      title: "Diseñadores UX/UI",
      company: "CreativeAgency",
      type: "Freelance",
      location: "Remoto",
      studentsNeeded: 2,
      studentsApplied: 12,
      description: "Proyectos de diseño para clientes nacionales e internacionales.",
      requirements: ["Figma", "Adobe Creative Suite", "Prototipado", "User Research"],
      benefits: ["Horarios flexibles", "Proyectos variados", "Portafolio internacional"],
      status: "Activa",
      createdDate: "Hace 5 días",
      deadline: "10 Dic 2024",
      contact: "ana.martinez@creativeagency.com",
    },
    {
      id: 4,
      title: "Programa de Innovación Tecnológica",
      company: "StartupTech",
      type: "Proyecto",
      location: "Buenos Aires",
      studentsNeeded: 8,
      studentsApplied: 5,
      description: "Colaboración en proyectos de IA aplicada al sector financiero.",
      requirements: ["Python", "Machine Learning", "APIs", "Innovación"],
      benefits: ["Equity participation", "Mentoría directa", "Networking"],
      status: "Pendiente",
      createdDate: "Hace 2 días",
      deadline: "25 Dic 2024",
      contact: "luis.fernandez@startuptech.com",
    },
  ]

  const companies = ["TechCorp SA", "DataCorp Analytics", "CreativeAgency", "StartupTech", "DesignStudio"]

  const handleCreateOpportunity = () => {
    console.log("Creating opportunity:", newOpportunity)
    setShowCreateForm(false)
    setNewOpportunity({
      title: "",
      company: "",
      description: "",
      requirements: "",
      benefits: "",
      type: "",
      location: "",
      students: "",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activa":
        return "bg-emerald-100 text-emerald-700"
      case "Pendiente":
        return "bg-amber-100 text-amber-700"
      case "Cerrada":
        return "bg-slate-100 text-slate-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Tiempo completo":
        return "bg-blue-100 text-blue-700"
      case "Pasantía":
        return "bg-purple-100 text-purple-700"
      case "Freelance":
        return "bg-green-100 text-green-700"
      case "Proyecto":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestión de Oportunidades</h1>
          <p className="text-slate-600">Crea y gestiona oportunidades laborales para tus estudiantes</p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nueva Oportunidad
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Oportunidades Activas</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {opportunities.filter((o) => o.status === "Activa").length}
                </p>
              </div>
              <Briefcase className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Estudiantes Aplicados</p>
                <p className="text-2xl font-bold text-cyan-600">
                  {opportunities.reduce((sum, o) => sum + o.studentsApplied, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Posiciones Disponibles</p>
                <p className="text-2xl font-bold text-slate-800">
                  {opportunities.reduce((sum, o) => sum + o.studentsNeeded, 0)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-slate-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Pendientes Aprobación</p>
                <p className="text-2xl font-bold text-amber-600">
                  {opportunities.filter((o) => o.status === "Pendiente").length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Opportunity Form */}
      {showCreateForm && (
        <Card className="border-cyan-100">
          <CardHeader>
            <CardTitle className="text-cyan-700">Crear Nueva Oportunidad</CardTitle>
            <CardDescription>Conecta a tus estudiantes con empresas asociadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Título de la Oportunidad</label>
                <Input
                  placeholder="Ej: Desarrolladores Frontend Junior"
                  value={newOpportunity.title}
                  onChange={(e) => setNewOpportunity({ ...newOpportunity, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                <Select
                  value={newOpportunity.company}
                  onValueChange={(value) => setNewOpportunity({ ...newOpportunity, company: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company} value={company}>
                        {company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Oportunidad</label>
                <Select
                  value={newOpportunity.type}
                  onValueChange={(value) => setNewOpportunity({ ...newOpportunity, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                    <SelectItem value="Pasantía">Pasantía</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Proyecto">Proyecto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ubicación</label>
                <Input
                  placeholder="Ej: Buenos Aires, Remoto"
                  value={newOpportunity.location}
                  onChange={(e) => setNewOpportunity({ ...newOpportunity, location: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Número de Estudiantes</label>
                <Input
                  type="number"
                  placeholder="Ej: 5"
                  value={newOpportunity.students}
                  onChange={(e) => setNewOpportunity({ ...newOpportunity, students: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Descripción</label>
              <Textarea
                placeholder="Describe la oportunidad, responsabilidades y objetivos..."
                value={newOpportunity.description}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, description: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Requisitos</label>
              <Textarea
                placeholder="Lista los requisitos técnicos y académicos..."
                value={newOpportunity.requirements}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, requirements: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Beneficios</label>
              <Textarea
                placeholder="Describe los beneficios y oportunidades de crecimiento..."
                value={newOpportunity.benefits}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, benefits: e.target.value })}
              />
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={handleCreateOpportunity}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Crear Oportunidad
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">
            Activas ({opportunities.filter((o) => o.status === "Activa").length})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pendientes ({opportunities.filter((o) => o.status === "Pendiente").length})
          </TabsTrigger>
          <TabsTrigger value="all">Todas ({opportunities.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input placeholder="Buscar oportunidades..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Opportunities List */}
          <div className="space-y-4">
            {opportunities
              .filter((o) => o.status === "Activa")
              .map((opportunity) => (
                <Card key={opportunity.id} className="border-emerald-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-semibold text-slate-800">{opportunity.title}</h3>
                          <Badge variant="secondary" className={getStatusColor(opportunity.status)}>
                            {opportunity.status}
                          </Badge>
                          <Badge variant="secondary" className={getTypeColor(opportunity.type)}>
                            {opportunity.type}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-center text-sm text-slate-600 mb-1">
                              <Building2 className="w-4 h-4 mr-2" />
                              {opportunity.company}
                            </div>
                            <div className="flex items-center text-sm text-slate-600 mb-1">
                              <MapPin className="w-4 h-4 mr-2" />
                              {opportunity.location}
                            </div>
                            <div className="flex items-center text-sm text-slate-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              Cierra: {opportunity.deadline}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-sm text-slate-600 mb-1">
                              <Users className="w-4 h-4 mr-2" />
                              {opportunity.studentsApplied} aplicados de {opportunity.studentsNeeded} necesarios
                            </div>
                            <div className="text-sm text-slate-500">Creada {opportunity.createdDate}</div>
                            <div className="text-sm text-slate-500">Contacto: {opportunity.contact}</div>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 mb-3">{opportunity.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 mb-2">Requisitos:</h4>
                            <div className="flex flex-wrap gap-1">
                              {opportunity.requirements.map((req, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 mb-2">Beneficios:</h4>
                            <div className="flex flex-wrap gap-1">
                              {opportunity.benefits.map((benefit, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs bg-emerald-100 text-emerald-700"
                                >
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 ml-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalles
                        </Button>
                        <Button size="sm" variant="outline">
                          <Users className="w-4 h-4 mr-2" />
                          Ver Candidatos
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          <div className="space-y-4">
            {opportunities
              .filter((o) => o.status === "Pendiente")
              .map((opportunity) => (
                <Card key={opportunity.id} className="border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-semibold text-slate-800">{opportunity.title}</h3>
                          <Badge variant="secondary" className={getStatusColor(opportunity.status)}>
                            {opportunity.status}
                          </Badge>
                          <Badge variant="secondary" className={getTypeColor(opportunity.type)}>
                            {opportunity.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{opportunity.description}</p>
                        <div className="text-sm text-slate-500">
                          Empresa: {opportunity.company} • Creada {opportunity.createdDate}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                          Aprobar
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                          Rechazar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-800">{opportunity.title}</h3>
                        <Badge variant="secondary" className={getStatusColor(opportunity.status)}>
                          {opportunity.status}
                        </Badge>
                        <Badge variant="secondary" className={getTypeColor(opportunity.type)}>
                          {opportunity.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600">
                        {opportunity.company} • {opportunity.location} • {opportunity.createdDate}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
