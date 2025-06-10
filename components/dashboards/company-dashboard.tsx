"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Eye, TrendingUp, Plus, MapPin, Clock, ArrowRight, Building2, Shield } from "lucide-react"
import Link from "next/link"

export function CompanyDashboard() {
  const stats = [
    { title: "Roles Activos", value: "8", icon: Briefcase, color: "text-cyan-600" },
    { title: "Candidatos Totales", value: "156", icon: Users, color: "text-emerald-600" },
    { title: "Vistas del Perfil", value: "2.3k", icon: Eye, color: "text-slate-600" },
    { title: "Tasa de Respuesta", value: "78%", icon: TrendingUp, color: "text-cyan-600" },
  ]

  const activeJobs = [
    {
      id: 1,
      title: "Desarrollador Full Stack Senior",
      location: "Buenos Aires",
      type: "Tiempo completo",
      applicants: 23,
      posted: "Hace 5 días",
      status: "Activo",
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      location: "Remoto",
      type: "Tiempo completo",
      applicants: 18,
      posted: "Hace 1 semana",
      status: "Activo",
    },
    {
      id: 3,
      title: "Pasantía en Data Science",
      location: "Córdoba",
      type: "Pasantía",
      applicants: 31,
      posted: "Hace 3 días",
      status: "Activo",
    },
  ]

  const recentCandidates = [
    {
      id: 1,
      name: "María González",
      position: "Desarrollador Full Stack Senior",
      university: "Universidad de Buenos Aires",
      skills: ["React", "Node.js", "Python"],
      appliedDate: "Hace 2 horas",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Diseñador UX/UI",
      university: "Universidad Nacional de Córdoba",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      appliedDate: "Hace 1 día",
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Pasantía en Data Science",
      university: "Universidad Tecnológica Nacional",
      skills: ["Python", "R", "Machine Learning"],
      appliedDate: "Hace 2 días",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard de la Empresa</h1>
          <p className="text-slate-600">
            Gestiona ofertas laborales, conecta con universidades y valida experiencias de candidatos.
          </p>
        </div>
        <Link href="/dashboard/post-jobs">
          <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Publicar Rol
          </Button>
        </Link>
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

      {/* University Partners - agregar después de las estadísticas */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Universidades Asociadas</CardTitle>
          <CardDescription>Instituciones educativas con las que colaboramos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-800">Universidad de Buenos Aires</h3>
              <p className="text-sm text-slate-600">1,247 estudiantes disponibles</p>
              <Badge className="mt-2 bg-emerald-100 text-emerald-700">Asociación Activa</Badge>
            </div>
            <div className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-800">Universidad Nacional de Córdoba</h3>
              <p className="text-sm text-slate-600">892 estudiantes disponibles</p>
              <Badge className="mt-2 bg-emerald-100 text-emerald-700">Asociación Activa</Badge>
            </div>
            <div className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-800">Universidad Tecnológica Nacional</h3>
              <p className="text-sm text-slate-600">654 estudiantes disponibles</p>
              <Badge className="mt-2 bg-emerald-100 text-emerald-700">Asociación Activa</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Job Postings */}
        <Card className="border-cyan-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-cyan-700">Mis Publicaciones Activas</CardTitle>
                <CardDescription>Roles que están recibiendo aplicaciones</CardDescription>
              </div>
              <Link href="/dashboard/my-jobs">
                <Button variant="outline" size="sm" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50">
                  Ver todas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-cyan-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{job.title}</h3>
                    <div className="flex items-center text-sm text-slate-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                      <Badge variant="secondary" className="ml-2 bg-cyan-100 text-cyan-700">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">{job.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                  <div className="text-sm font-medium text-cyan-600">{job.applicants} candidatos</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Candidates */}
        <Card className="border-emerald-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-emerald-700">Candidatos Recientes</CardTitle>
                <CardDescription>Nuevas aplicaciones para revisar</CardDescription>
              </div>
              <Link href="/dashboard/candidates">
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                  Ver todos
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
                    <p className="text-sm text-slate-600">{candidate.university}</p>
                    <p className="text-xs text-slate-500 mt-1">Aplicó para: {candidate.position}</p>
                  </div>
                  <div className="text-xs text-slate-500">{candidate.appliedDate}</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {candidate.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Acciones Rápidas</CardTitle>
          <CardDescription>Gestiona tus procesos de reclutamiento de manera eficiente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/dashboard/post-jobs">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-200 hover:bg-cyan-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Publicar Nuevo Rol</h3>
                    <p className="text-sm text-slate-600">Crear una nueva oferta laboral</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/candidates">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Revisar Candidatos</h3>
                    <p className="text-sm text-slate-600">Ver aplicaciones pendientes</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/analytics">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Ver Analíticas</h3>
                    <p className="text-sm text-slate-600">Estadísticas de rendimiento</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/validate-experience">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Validar Experiencias</h3>
                    <p className="text-sm text-slate-600">Verificar candidatos</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Company Profile Completion */}
      <Card className="border-cyan-100 bg-gradient-to-r from-cyan-50 to-emerald-50">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-cyan-600" />
            <CardTitle className="text-cyan-700">Optimiza tu Perfil de Empresa</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-4">
            Un perfil completo y atractivo aumenta la calidad de los candidatos que aplican a tus ofertas. Agrega
            información sobre tu cultura empresarial y beneficios.
          </p>
          <Link href="/dashboard/company-profile">
            <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
              Completar Perfil
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
