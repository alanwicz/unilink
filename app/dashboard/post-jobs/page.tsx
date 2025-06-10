"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Plus, Briefcase, MapPin, Calendar, DollarSign, Users, Clock, Eye, Edit, Trash2, Send } from "lucide-react"
import { useState } from "react"

export default function PostJobsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    type: "",
    location: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
    remote: false,
    urgent: false,
  })

  const myJobs = [
    {
      id: 1,
      title: "Desarrollador Full Stack Senior",
      department: "Tecnología",
      type: "Tiempo completo",
      location: "Buenos Aires",
      salary: "$1200-1800",
      applicants: 23,
      views: 156,
      status: "Activo",
      posted: "Hace 5 días",
      deadline: "15 Dic 2024",
      remote: true,
      urgent: false,
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      department: "Diseño",
      type: "Tiempo completo",
      location: "Remoto",
      salary: "$900-1300",
      applicants: 18,
      views: 89,
      status: "Activo",
      posted: "Hace 1 semana",
      deadline: "20 Dic 2024",
      remote: true,
      urgent: false,
    },
    {
      id: 3,
      title: "Pasantía en Data Science",
      department: "Análisis",
      type: "Pasantía",
      location: "Córdoba",
      salary: "$400-600",
      applicants: 31,
      views: 203,
      status: "Activo",
      posted: "Hace 3 días",
      deadline: "10 Dic 2024",
      remote: false,
      urgent: true,
    },
    {
      id: 4,
      title: "Marketing Digital Specialist",
      department: "Marketing",
      type: "Freelance",
      location: "Buenos Aires",
      salary: "$800-1200",
      applicants: 12,
      views: 67,
      status: "Pausado",
      posted: "Hace 2 semanas",
      deadline: "25 Dic 2024",
      remote: true,
      urgent: false,
    },
  ]

  const handleCreateJob = () => {
    console.log("Creating job:", newJob)
    setShowCreateForm(false)
    setNewJob({
      title: "",
      department: "",
      type: "",
      location: "",
      salary: "",
      description: "",
      requirements: "",
      benefits: "",
      remote: false,
      urgent: false,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-emerald-100 text-emerald-700"
      case "Pausado":
        return "bg-amber-100 text-amber-700"
      case "Cerrado":
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
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestión de Ofertas Laborales</h1>
          <p className="text-slate-600">Publica y gestiona ofertas de trabajo para atraer talento universitario</p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nueva Oferta
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Ofertas Activas</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {myJobs.filter((job) => job.status === "Activo").length}
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
                <p className="text-sm font-medium text-slate-600">Total Candidatos</p>
                <p className="text-2xl font-bold text-cyan-600">
                  {myJobs.reduce((sum, job) => sum + job.applicants, 0)}
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
                <p className="text-sm font-medium text-slate-600">Total Vistas</p>
                <p className="text-2xl font-bold text-slate-800">{myJobs.reduce((sum, job) => sum + job.views, 0)}</p>
              </div>
              <Eye className="w-8 h-8 text-slate-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Tasa de Aplicación</p>
                <p className="text-2xl font-bold text-amber-600">18%</p>
              </div>
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Job Form */}
      {showCreateForm && (
        <Card className="border-cyan-100">
          <CardHeader>
            <CardTitle className="text-cyan-700">Crear Nueva Oferta Laboral</CardTitle>
            <CardDescription>Completa la información para atraer a los mejores candidatos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Título del Puesto</Label>
                <Input
                  id="title"
                  placeholder="Ej: Desarrollador Frontend Senior"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="department">Departamento</Label>
                <Select
                  value={newJob.department}
                  onValueChange={(value) => setNewJob({ ...newJob, department: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="diseno">Diseño</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="ventas">Ventas</SelectItem>
                    <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                    <SelectItem value="finanzas">Finanzas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type">Tipo de Empleo</Label>
                <Select value={newJob.type} onValueChange={(value) => setNewJob({ ...newJob, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tiempo-completo">Tiempo completo</SelectItem>
                    <SelectItem value="medio-tiempo">Medio tiempo</SelectItem>
                    <SelectItem value="pasantia">Pasantía</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="contrato">Por contrato</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input
                  id="location"
                  placeholder="Ej: Buenos Aires, Remoto"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="salary">Rango Salarial</Label>
                <Input
                  id="salary"
                  placeholder="Ej: $800-1200"
                  value={newJob.salary}
                  onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="remote"
                    checked={newJob.remote}
                    onCheckedChange={(checked) => setNewJob({ ...newJob, remote: checked })}
                  />
                  <Label htmlFor="remote">Trabajo remoto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="urgent"
                    checked={newJob.urgent}
                    onCheckedChange={(checked) => setNewJob({ ...newJob, urgent: checked })}
                  />
                  <Label htmlFor="urgent">Urgente</Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descripción del Puesto</Label>
              <Textarea
                id="description"
                placeholder="Describe las responsabilidades principales, objetivos del rol y cómo encaja en el equipo..."
                value={newJob.description}
                onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                className="min-h-[120px]"
              />
            </div>

            <div>
              <Label htmlFor="requirements">Requisitos</Label>
              <Textarea
                id="requirements"
                placeholder="Lista los requisitos técnicos, experiencia necesaria, habilidades blandas..."
                value={newJob.requirements}
                onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="benefits">Beneficios</Label>
              <Textarea
                id="benefits"
                placeholder="Describe los beneficios, oportunidades de crecimiento, cultura empresarial..."
                value={newJob.benefits}
                onChange={(e) => setNewJob({ ...newJob, benefits: e.target.value })}
                className="min-h-[100px]"
              />
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={handleCreateJob}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Publicar Oferta
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* My Jobs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Activas ({myJobs.filter((j) => j.status === "Activo").length})</TabsTrigger>
          <TabsTrigger value="paused">Pausadas ({myJobs.filter((j) => j.status === "Pausado").length})</TabsTrigger>
          <TabsTrigger value="all">Todas ({myJobs.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {myJobs
            .filter((job) => job.status === "Activo")
            .map((job) => (
              <Card key={job.id} className="border-emerald-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                        <Badge variant="secondary" className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                        <Badge variant="secondary" className={getTypeColor(job.type)}>
                          {job.type}
                        </Badge>
                        {job.urgent && <Badge className="bg-red-100 text-red-700">Urgente</Badge>}
                        {job.remote && <Badge className="bg-blue-100 text-blue-700">Remoto</Badge>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <DollarSign className="w-4 h-4 mr-2" />
                            {job.salary}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <Users className="w-4 h-4 mr-2" />
                            {job.applicants} candidatos
                          </div>
                          <div className="flex items-center text-sm text-slate-600 mb-1">
                            <Eye className="w-4 h-4 mr-2" />
                            {job.views} vistas
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            Cierra: {job.deadline}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-slate-500">Publicado {job.posted}</div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Candidatos
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="paused" className="space-y-4">
          {myJobs
            .filter((job) => job.status === "Pausado")
            .map((job) => (
              <Card key={job.id} className="border-amber-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
                        <Badge variant="secondary" className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                        <Badge variant="secondary" className={getTypeColor(job.type)}>
                          {job.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600">
                        {job.department} • {job.location} • {job.salary}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {job.applicants} candidatos • Publicado {job.posted}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                        Reactivar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {myJobs.map((job) => (
            <Card key={job.id} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
                      <Badge variant="secondary" className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                      <Badge variant="secondary" className={getTypeColor(job.type)}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-600">
                      {job.department} • {job.location} • {job.applicants} candidatos
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
