"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Clock, TrendingUp, Building2, ArrowRight, Star, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ValidatorDashboard() {
  const stats = [
    { title: "Validaciones Pendientes", value: "12", icon: Clock, color: "text-amber-600" },
    { title: "Validaciones Completadas", value: "89", icon: CheckCircle, color: "text-emerald-600" },
    { title: "Puntuación de Confianza", value: "4.8", icon: Star, color: "text-slate-600" },
    { title: "Tasa de Aprobación", value: "76%", icon: TrendingUp, color: "text-emerald-600" },
  ]

  const pendingValidations = [
    {
      id: 1,
      studentName: "Ana García",
      company: "TechStart",
      position: "Desarrolladora Frontend",
      duration: "6 meses",
      submittedDate: "Hace 2 días",
      priority: "Alta",
    },
    {
      id: 2,
      studentName: "Carlos Rodríguez",
      company: "DataCorp",
      position: "Analista de Datos",
      duration: "3 meses",
      submittedDate: "Hace 1 día",
      priority: "Media",
    },
    {
      id: 3,
      studentName: "María González",
      company: "DesignStudio",
      position: "Diseñadora UX",
      duration: "4 meses",
      submittedDate: "Hace 3 horas",
      priority: "Alta",
    },
  ]

  const recentValidations = [
    {
      id: 1,
      studentName: "Luis Martínez",
      company: "InnovaTech",
      position: "Desarrollador Backend",
      status: "Aprobada",
      validatedDate: "Hace 1 día",
      feedback: "Experiencia bien documentada y verificable",
    },
    {
      id: 2,
      studentName: "Sofia López",
      company: "CreativeAgency",
      position: "Community Manager",
      status: "Rechazada",
      validatedDate: "Hace 2 días",
      feedback: "Falta documentación de respaldo",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard del Validador</h1>
          <p className="text-slate-600">
            Ayuda a construir confianza en la plataforma validando experiencias laborales.
          </p>
        </div>
        <Link href="/dashboard/pending-validations">
          <Button className="bg-gradient-to-r from-slate-500 to-emerald-500 hover:from-slate-600 hover:to-emerald-600">
            <Shield className="w-4 h-4 mr-2" />
            Ver Pendientes
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

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Validations */}
        <Card className="border-amber-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-amber-700">Validaciones Pendientes</CardTitle>
                <CardDescription>Experiencias esperando tu revisión</CardDescription>
              </div>
              <Link href="/dashboard/pending-validations">
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
                      <Building2 className="w-4 h-4 mr-1" />
                      {validation.company} • {validation.position}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Duración: {validation.duration}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge
                      variant={validation.priority === "Alta" ? "destructive" : "secondary"}
                      className={validation.priority === "Alta" ? "bg-red-100 text-red-700" : ""}
                    >
                      {validation.priority}
                    </Badge>
                    <span className="text-xs text-slate-500">{validation.submittedDate}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Aprobar
                  </Button>
                  <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Rechazar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Validations */}
        <Card className="border-emerald-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-emerald-700">Validaciones Recientes</CardTitle>
                <CardDescription>Tu actividad de validación reciente</CardDescription>
              </div>
              <Link href="/dashboard/validation-history">
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                  Ver historial
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentValidations.map((validation) => (
              <div key={validation.id} className="p-4 border border-slate-100 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{validation.studentName}</h3>
                    <div className="flex items-center text-sm text-slate-600 mt-1">
                      <Building2 className="w-4 h-4 mr-1" />
                      {validation.company} • {validation.position}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge
                      variant={validation.status === "Aprobada" ? "default" : "destructive"}
                      className={
                        validation.status === "Aprobada" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                      }
                    >
                      {validation.status}
                    </Badge>
                    <span className="text-xs text-slate-500">{validation.validatedDate}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2 italic">"{validation.feedback}"</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Validation Guidelines */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Guías de Validación</CardTitle>
          <CardDescription>Criterios importantes para evaluar experiencias laborales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-700 mb-3">✅ Criterios de Aprobación</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Documentación completa y verificable
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Fechas y duración coherentes
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Descripción detallada de responsabilidades
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Contacto de referencia válido
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3">❌ Criterios de Rechazo</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Información incompleta o vaga
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Fechas inconsistentes o imposibles
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Falta de documentación de respaldo
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Información claramente falsa
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validator Recognition */}
      <Card className="border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-emerald-700">Reconocimiento del Validador</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-700 mb-2">
                Tu trabajo como validador es fundamental para mantener la confianza en UniLink. ¡Gracias por tu
                dedicación!
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="font-medium">Puntuación: 4.8/5</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="font-medium">Validador Verificado</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-600">89</div>
              <div className="text-sm text-slate-600">Validaciones completadas</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
