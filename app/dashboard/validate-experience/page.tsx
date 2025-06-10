"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Building2,
  FileText,
  Download,
  Eye,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"

export default function ValidateExperiencePage() {
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null)
  const [validationFeedback, setValidationFeedback] = useState("")

  const validationRequests = [
    {
      id: 1,
      candidate: {
        name: "Ana García",
        university: "Universidad de Buenos Aires",
        career: "Ingeniería en Sistemas",
        avatar: "",
      },
      experience: {
        company: "TechStart",
        position: "Desarrolladora Frontend",
        duration: "6 meses",
        startDate: "Enero 2024",
        endDate: "Junio 2024",
        description:
          "Desarrollo de interfaces de usuario utilizando React y TypeScript. Colaboración en equipo ágil para la creación de aplicaciones web responsivas. Implementación de mejores prácticas de desarrollo frontend.",
        skills: ["React", "TypeScript", "CSS", "Git", "Agile"],
        achievements: [
          "Redujo el tiempo de carga de la aplicación en 40%",
          "Implementó sistema de componentes reutilizables",
          "Lideró la migración de JavaScript a TypeScript",
        ],
        supervisor: "Carlos Mendez - Tech Lead",
        supervisorEmail: "carlos.mendez@techstart.com",
        supervisorPhone: "+54 11 1234-5678",
      },
      documents: [
        { name: "Certificado de trabajo", type: "PDF", size: "245 KB", verified: true },
        { name: "Carta de recomendación", type: "PDF", size: "180 KB", verified: true },
        { name: "Proyecto final", type: "ZIP", size: "2.1 MB", verified: false },
        { name: "Evaluación de desempeño", type: "PDF", size: "156 KB", verified: true },
      ],
      submittedDate: "Hace 2 días",
      requestedBy: "TechCorp SA",
      priority: "Alta",
      status: "Pendiente",
    },
    {
      id: 2,
      candidate: {
        name: "Carlos Rodríguez",
        university: "Universidad Nacional de Córdoba",
        career: "Licenciatura en Datos",
        avatar: "",
      },
      experience: {
        company: "DataCorp",
        position: "Analista de Datos",
        duration: "4 meses",
        startDate: "Febrero 2024",
        endDate: "Mayo 2024",
        description:
          "Análisis de datos de ventas y creación de dashboards interactivos. Implementación de modelos predictivos para forecasting de ventas.",
        skills: ["Python", "SQL", "Tableau", "Machine Learning", "Statistics"],
        achievements: [
          "Creó dashboard que aumentó eficiencia del equipo en 25%",
          "Desarrolló modelo predictivo con 85% de precisión",
          "Automatizó procesos de reporting semanales",
        ],
        supervisor: "María López - Data Manager",
        supervisorEmail: "maria.lopez@datacorp.com",
        supervisorPhone: "+54 351 987-6543",
      },
      documents: [
        { name: "Certificado de pasantía", type: "PDF", size: "198 KB", verified: true },
        { name: "Portfolio de proyectos", type: "PDF", size: "3.2 MB", verified: true },
        { name: "Código fuente", type: "ZIP", size: "1.8 MB", verified: false },
      ],
      submittedDate: "Hace 1 día",
      requestedBy: "InnovaTech",
      priority: "Media",
      status: "Pendiente",
    },
    {
      id: 3,
      candidate: {
        name: "María González",
        university: "Universidad de Palermo",
        career: "Diseño Gráfico",
        avatar: "",
      },
      experience: {
        company: "DesignStudio",
        position: "Diseñadora UX",
        duration: "5 meses",
        startDate: "Enero 2024",
        endDate: "Mayo 2024",
        description:
          "Diseño de experiencias de usuario para aplicaciones móviles. Creación de prototipos y testing con usuarios reales.",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Usability Testing"],
        achievements: [
          "Mejoró la retención de usuarios en 30%",
          "Diseñó sistema de design tokens",
          "Condujo 15 sesiones de testing con usuarios",
        ],
        supervisor: "Ana Ruiz - UX Director",
        supervisorEmail: "ana.ruiz@designstudio.com",
        supervisorPhone: "+54 11 5678-9012",
      },
      documents: [
        { name: "Certificado de trabajo", type: "PDF", size: "167 KB", verified: true },
        { name: "Portfolio UX", type: "PDF", size: "5.8 MB", verified: true },
        { name: "Testimonios de usuarios", type: "PDF", size: "890 KB", verified: true },
        { name: "Métricas de mejora", type: "PDF", size: "234 KB", verified: true },
      ],
      submittedDate: "Hace 3 horas",
      requestedBy: "CreativeAgency",
      priority: "Alta",
      status: "Pendiente",
    },
  ]

  const completedValidations = [
    {
      id: 4,
      candidate: {
        name: "Luis Martínez",
        university: "Universidad Tecnológica Nacional",
        career: "Ingeniería en Software",
        avatar: "",
      },
      experience: {
        company: "TechCorp",
        position: "Desarrollador Backend",
        duration: "8 meses",
      },
      status: "Validada",
      validatedDate: "Hace 1 día",
      feedback:
        "Experiencia completamente verificada. El candidato demostró excelentes habilidades técnicas y profesionales. Documentación completa y referencias positivas.",
      requestedBy: "StartupTech",
      validator: "TechCorp SA",
    },
    {
      id: 5,
      candidate: {
        name: "Sofia López",
        university: "Universidad de Buenos Aires",
        career: "Marketing Digital",
        avatar: "",
      },
      experience: {
        company: "CreativeAgency",
        position: "Community Manager",
        duration: "6 meses",
      },
      status: "Rechazada",
      validatedDate: "Hace 2 días",
      feedback:
        "Falta documentación oficial de la empresa. Se requiere certificado firmado por RRHH y referencias verificables del supervisor directo.",
      requestedBy: "MediaCorp",
      validator: "TechCorp SA",
    },
  ]

  const handleValidation = (requestId: number, action: "validate" | "reject") => {
    console.log(`${action} validation request ${requestId} with feedback: ${validationFeedback}`)
    setSelectedRequest(null)
    setValidationFeedback("")
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-700"
      case "Media":
        return "bg-yellow-100 text-yellow-700"
      case "Baja":
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
          <h1 className="text-3xl font-bold text-slate-800">Validación de Experiencias</h1>
          <p className="text-slate-600">Valida experiencias laborales de candidatos solicitadas por otras empresas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Reporte
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Solicitudes Pendientes</p>
                <p className="text-2xl font-bold text-amber-600">{validationRequests.length}</p>
              </div>
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Validaciones Completadas</p>
                <p className="text-2xl font-bold text-emerald-600">89</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Tasa de Aprobación</p>
                <p className="text-2xl font-bold text-slate-800">92%</p>
              </div>
              <Shield className="w-8 h-8 text-slate-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Tiempo Promedio</p>
                <p className="text-2xl font-bold text-cyan-600">2.3d</p>
              </div>
              <Clock className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pendientes ({validationRequests.length})</TabsTrigger>
          <TabsTrigger value="completed">Completadas ({completedValidations.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar solicitudes de validación..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Validation Requests */}
          <div className="space-y-4">
            {validationRequests.map((request) => (
              <Card key={request.id} className="border-amber-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={request.candidate.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                          {request.candidate.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-slate-800">{request.candidate.name}</h3>
                        <p className="text-sm text-slate-600">{request.candidate.career}</p>
                        <p className="text-sm text-slate-500">{request.candidate.university}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="secondary" className={getPriorityColor(request.priority)}>
                            Prioridad {request.priority}
                          </Badge>
                          <span className="text-xs text-slate-500">Solicitado por {request.requestedBy}</span>
                          <span className="text-xs text-slate-500">{request.submittedDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedRequest(request.id)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Revisar
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">Experiencia a Validar</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 text-slate-400 mr-2" />
                          <span className="font-medium">{request.experience.position}</span>
                        </div>
                        <div className="text-slate-600">
                          {request.experience.company} • {request.experience.duration}
                        </div>
                        <div className="text-slate-600">
                          {request.experience.startDate} - {request.experience.endDate}
                        </div>
                        <div className="text-slate-600">Supervisor: {request.experience.supervisor}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">Documentos Adjuntos</h4>
                      <div className="space-y-2">
                        {request.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 text-slate-400 mr-2" />
                              <span>{doc.name}</span>
                              <span className="text-slate-500 ml-2">({doc.size})</span>
                              {doc.verified && <CheckCircle className="w-4 h-4 text-emerald-500 ml-2" />}
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedRequest === request.id && (
                    <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium text-slate-700 mb-3">Detalles Completos de la Experiencia</h4>

                      <div className="space-y-4 text-sm mb-4">
                        <div>
                          <span className="font-medium">Descripción del rol:</span>
                          <p className="text-slate-600 mt-1">{request.experience.description}</p>
                        </div>

                        <div>
                          <span className="font-medium">Habilidades desarrolladas:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {request.experience.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="font-medium">Logros principales:</span>
                          <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1">
                            {request.experience.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="font-medium">Contacto del supervisor:</span>
                          <p className="text-slate-600 mt-1">
                            {request.experience.supervisor}
                            <br />
                            Email: {request.experience.supervisorEmail}
                            <br />
                            Teléfono: {request.experience.supervisorPhone}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Comentarios de Validación
                          </label>
                          <Textarea
                            placeholder="Agrega comentarios sobre la validación de esta experiencia..."
                            value={validationFeedback}
                            onChange={(e) => setValidationFeedback(e.target.value)}
                            className="min-h-[80px]"
                          />
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            onClick={() => handleValidation(request.id, "validate")}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Validar Experiencia
                          </Button>
                          <Button
                            onClick={() => handleValidation(request.id, "reject")}
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Rechazar
                          </Button>
                          <Button variant="ghost" onClick={() => setSelectedRequest(null)}>
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {/* Completed Validations */}
          <div className="space-y-4">
            {completedValidations.map((validation) => (
              <Card key={validation.id} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={validation.candidate.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                          {validation.candidate.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">{validation.candidate.name}</h3>
                        <p className="text-sm text-slate-600">{validation.candidate.career}</p>
                        <p className="text-sm text-slate-500">{validation.candidate.university}</p>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium">{validation.experience.position}</span>
                            <span className="text-sm text-slate-600">en {validation.experience.company}</span>
                          </div>
                          <p className="text-sm text-slate-600 italic">"{validation.feedback}"</p>
                          <div className="text-xs text-slate-500 mt-2">
                            Solicitado por {validation.requestedBy} • Validado por {validation.validator}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          validation.status === "Validada"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }
                      >
                        {validation.status}
                      </Badge>
                      <p className="text-xs text-slate-500 mt-1">{validation.validatedDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Validation Guidelines */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-700">Guías para Validación de Experiencias</CardTitle>
          <CardDescription>Criterios importantes para evaluar solicitudes de validación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-700 mb-3">✅ Criterios de Validación</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Documentación oficial completa y verificable
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Fechas y duración coherentes con registros internos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Descripción detallada de responsabilidades y logros
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Contacto de supervisor verificable y disponible
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Evidencia de trabajo realizado (proyectos, código, etc.)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3">❌ Criterios de Rechazo</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Información incompleta o documentación faltante
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Fechas inconsistentes con registros de la empresa
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Supervisor no disponible o no confirma la experiencia
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Discrepancias en la descripción del rol o responsabilidades
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Evidencia insuficiente del trabajo realizado
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
