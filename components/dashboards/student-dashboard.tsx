"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Briefcase,
  FileText,
  CheckCircle,
  TrendingUp,
  MapPin,
  Clock,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export function StudentDashboard() {
  const stats = [
    { title: "Postulaciones Activas", value: "5", icon: FileText, color: "text-emerald-600" },
    { title: "Roles Disponibles", value: "23", icon: Briefcase, color: "text-cyan-600" },
    { title: "Validaciones Completadas", value: "3", icon: CheckCircle, color: "text-slate-600" },
    { title: "Perfil Completado", value: "85%", icon: TrendingUp, color: "text-emerald-600" },
  ]

  const recentJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Junior",
      company: "TechStart",
      location: "Remoto",
      type: "Tiempo completo",
      salary: "$800-1200",
      posted: "Hace 2 días",
    },
    {
      id: 2,
      title: "Pasantía en Marketing Digital",
      company: "CreativeAgency",
      location: "Buenos Aires",
      type: "Pasantía",
      salary: "$400-600",
      posted: "Hace 1 semana",
    },
    {
      id: 3,
      title: "Analista de Datos Junior",
      company: "DataCorp",
      location: "Córdoba",
      type: "Tiempo completo",
      salary: "$900-1300",
      posted: "Hace 3 días",
    },
  ]

  const applications = [
    {
      id: 1,
      title: "UX Designer Trainee",
      company: "DesignStudio",
      status: "En revisión",
      appliedDate: "15 Nov 2024",
    },
    {
      id: 2,
      title: "Desarrollador Backend",
      company: "TechSolutions",
      status: "Entrevista programada",
      appliedDate: "12 Nov 2024",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard del Estudiante</h1>
          <p className="text-slate-600">Bienvenido de vuelta, Ana. Aquí tienes un resumen de tu actividad.</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
          <Sparkles className="w-4 h-4 mr-2" />
          Asistente IA
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Job Opportunities */}
        <Card className="border-emerald-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-emerald-700">Roles Recomendados</CardTitle>
                <CardDescription>Oportunidades que coinciden con tu perfil</CardDescription>
              </div>
              <Link href="/dashboard/jobs">
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                  Ver todos
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{job.title}</h3>
                    <div className="flex items-center text-sm text-slate-600 mt-1">
                      <Building2 className="w-4 h-4 mr-1" />
                      {job.company}
                      <MapPin className="w-4 h-4 ml-3 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {job.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                  <div className="text-sm font-medium text-emerald-600">{job.salary}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* My Applications */}
        <Card className="border-cyan-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-cyan-700">Mis Postulaciones</CardTitle>
                <CardDescription>Estado de tus aplicaciones recientes</CardDescription>
              </div>
              <Link href="/dashboard/applications">
                <Button variant="outline" size="sm" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50">
                  Ver todas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="p-4 border border-slate-100 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{app.title}</h3>
                    <p className="text-sm text-slate-600">{app.company}</p>
                  </div>
                  <Badge
                    variant={app.status === "Entrevista programada" ? "default" : "secondary"}
                    className={app.status === "Entrevista programada" ? "bg-cyan-100 text-cyan-700" : ""}
                  >
                    {app.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500">Aplicado el {app.appliedDate}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Profile Completion */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Completa tu Perfil</CardTitle>
          <CardDescription>Un perfil completo aumenta tus posibilidades de ser contactado por empresas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progreso del perfil</span>
              <span className="text-sm text-slate-600">85%</span>
            </div>
            <Progress value={85} className="h-2" />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm">Agregar experiencia laboral</span>
                <Button size="sm" variant="outline">
                  Completar
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm">Subir foto de perfil</span>
                <Button size="sm" variant="outline">
                  Completar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Assistant Preview */}
      <Card className="border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-emerald-700">Asistente IA - Consejo del Día</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-4">
            "Para tu próxima entrevista con TechSolutions, te recomiendo investigar sobre sus proyectos recientes en
            desarrollo web. Prepara ejemplos específicos de tu experiencia con React y Node.js."
          </p>
          <Link href="/dashboard/ai-assistant">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
              Ver más consejos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
