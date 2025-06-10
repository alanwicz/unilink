"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  CheckCircle,
  Building2,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Star,
  Clock,
} from "lucide-react"
import Link from "next/link"

export function UniversityDashboard() {
  const stats = [
    { title: "Estudiantes Registrados", value: "1,247", icon: Users, color: "text-cyan-600" },
    { title: "Validaciones Pendientes", value: "23", icon: Clock, color: "text-amber-600" },
    { title: "Empresas Asociadas", value: "45", icon: Building2, color: "text-emerald-600" },
    { title: "Tasa de Colocación", value: "78%", icon: TrendingUp, color: "text-cyan-600" },
  ]

  const pendingValidations = [
    {
      id: 1,
      studentName: "Ana García",
      career: "Ingeniería en Sistemas",
      experience: "Desarrolladora Frontend en TechStart",
      duration: "6 meses",
      submittedDate: "Hace 2 días",
    },
    {
      id: 2,
      studentName: "Carlos Rodríguez",
      career: "Licenciatura en Datos",
      experience: "Analista de Datos en DataCorp",
      duration: "3 meses",
      submittedDate: "Hace 1 día",
    },
    {
      id: 3,
      studentName: "María González",
      career: "Diseño Gráfico",
      experience: "Diseñadora UX en DesignStudio",
      duration: "4 meses",
      submittedDate: "Hace 3 horas",
    },
  ]

  const topStudents = [
    {
      id: 1,
      name: "Luis Martínez",
      career: "Ingeniería en Software",
      gpa: "9.2",
      validations: 5,
      skills: ["React", "Node.js", "Python"],
    },
    {
      id: 2,
      name: "Sofia López",
      career: "Marketing Digital",
      gpa: "8.8",
      validations: 3,
      skills: ["SEO", "Analytics", "Social Media"],
    },
    {
      id: 3,
      name: "Diego Fernández",
      career: "Ciencia de Datos",
      gpa: "9.5",
      validations: 4,
      skills: ["Python", "R", "Machine Learning"],
    },
  ]

  const partnerCompanies = [
    {
      id: 1,
      name: "TechStart",
      industry: "Tecnología",
      activeRoles: 5,
      studentsHired: 12,
    },
    {
      id: 2,
      name: "DataCorp",
      industry: "Análisis de Datos",
      activeRoles: 3,
      studentsHired: 8,
    },
    {
      id: 3,
      name: "CreativeAgency",
      industry: "Marketing",
      activeRoles: 2,
      studentsHired: 6,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard Universitario</h1>
          <p className="text-slate-600">
            Gestiona estudiantes, valida experiencias y conecta con empresas para crear oportunidades.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link href="/dashboard/students">
            <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50">
              <Users className="w-4 h-4 mr-2" />
              Gestionar Estudiantes
            </Button>
          </Link>
          <Link href="/dashboard/partner-companies">
            <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
              <Building2 className="w-4 h-4 mr-2" />
              Empresas Asociadas
            </Button>
          </Link>
        </div>
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
        {/* Pending Validations */}
        <Card className="border-amber-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-amber-700">Validaciones Pendientes</CardTitle>
                <CardDescription>Experiencias estudiantiles esperando validación</CardDescription>
              </div>
              <Link href="/dashboard/validations">
                <Button variant="outline" size="sm" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                  Ver todas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingValidations.map((validation) => (
              <div
                key={validation.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-amber-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{validation.studentName}</h3>
                    <div className="flex items-center text-sm text-slate-600 mt-1">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      {validation.career}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{validation.experience}</p>
                    <p className="text-xs text-slate-500">Duración: {validation.duration}</p>
                  </div>
                  <span className="text-xs text-slate-500">{validation.submittedDate}</span>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Validar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Students */}
        <Card className="border-emerald-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-emerald-700">Estudiantes Destacados</CardTitle>
                <CardDescription>Estudiantes con mejor rendimiento y validaciones</CardDescription>
              </div>
              <Link href="/dashboard/students">
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                  Ver todos
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topStudents.map((student) => (
              <div
                key={student.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{student.name}</h3>
                    <div className="flex items-center text-sm text-slate-600 mt-1">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      {student.career}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{student.gpa}</span>
                    </div>
                    <div className="text-xs text-slate-500">{student.validations} validaciones</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {student.skills.map((skill, index) => (
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

      {/* Partner Companies */}
      <Card className="border-cyan-100">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-cyan-700">Empresas Asociadas</CardTitle>
              <CardDescription>Empresas que colaboran activamente con nuestra universidad</CardDescription>
            </div>
            <Link href="/dashboard/partner-companies">
              <Button variant="outline" size="sm" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50">
                Gestionar Asociaciones
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {partnerCompanies.map((company) => (
              <div
                key={company.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-cyan-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{company.name}</h3>
                    <p className="text-sm text-slate-600">{company.industry}</p>
                  </div>
                  <Badge className="bg-cyan-100 text-cyan-700">Activa</Badge>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Roles activos:</span>
                    <span className="font-medium">{company.activeRoles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estudiantes contratados:</span>
                    <span className="font-medium text-emerald-600">{company.studentsHired}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Acciones Rápidas</CardTitle>
          <CardDescription>Gestiona las actividades principales de la universidad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/dashboard/validations">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-amber-200 hover:bg-amber-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Procesar Validaciones</h3>
                    <p className="text-sm text-slate-600">23 pendientes</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/students">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Gestionar Estudiantes</h3>
                    <p className="text-sm text-slate-600">1,247 registrados</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/opportunities">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-200 hover:bg-cyan-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Crear Oportunidades</h3>
                    <p className="text-sm text-slate-600">Conectar con empresas</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* University Performance */}
      <Card className="border-cyan-100 bg-gradient-to-r from-cyan-50 to-emerald-50">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-cyan-600" />
            <CardTitle className="text-cyan-700">Rendimiento Universitario</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-700 mb-2">Tasa de Colocación</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Progress value={78} className="flex-1" />
                <span className="text-sm font-medium">78%</span>
              </div>
              <p className="text-xs text-slate-600">Estudiantes empleados en 6 meses</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-2">Satisfacción Empresarial</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Progress value={92} className="flex-1" />
                <span className="text-sm font-medium">92%</span>
              </div>
              <p className="text-xs text-slate-600">Empresas satisfechas con nuestros graduados</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-2">Validaciones Completadas</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Progress value={85} className="flex-1" />
                <span className="text-sm font-medium">85%</span>
              </div>
              <p className="text-xs text-slate-600">Experiencias validadas este mes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
