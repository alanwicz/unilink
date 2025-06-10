"use client"

import { Alert } from "@/components/ui/alert"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Building2,
  FileText,
  Download,
  Eye,
  Filter,
  Calendar,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  PhoneIcon,
  Star,
} from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ValidationsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [selectedValidation, setSelectedValidation] = useState<number | null>(null)
  const [feedback, setFeedback] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState<string | null>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState<{show: boolean, type: string, id: number | null}>({
    show: false,
    type: '',
    id: null
  })
  const [expandedDetails, setExpandedDetails] = useState<{[key: number]: boolean}>({})

  const pendingValidations = [
    {
      id: 1,
      student: {
        name: "Ana García",
        career: "Ingeniería en Sistemas",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "ana.garcia@estudiantes.unilink.com",
        phone: "+54 11 1234-5678",
        university: "Universidad de Buenos Aires",
        semester: "8vo semestre",
        gpa: "8.7/10"
      },
      experience: {
        company: "TechStart",
        position: "Desarrolladora Frontend",
        duration: "6 meses",
        startDate: "Enero 2024",
        endDate: "Junio 2024",
        description:
          "Desarrollo de interfaces de usuario utilizando React y TypeScript. Colaboración en equipo ágil para la creación de aplicaciones web responsivas. Implementación de componentes reutilizables y optimización de rendimiento.",
        skills: ["React", "TypeScript", "CSS", "Git", "Jest"],
        supervisor: "Carlos Mendez - Tech Lead",
        supervisorEmail: "carlos.mendez@techstart.com",
        supervisorPhone: "+54 11 5678-1234",
        projects: [
          "Rediseño del dashboard principal de la aplicación",
          "Implementación de sistema de autenticación con OAuth",
          "Desarrollo de componentes de UI reutilizables"
        ],
        achievements: [
          "Reducción del tiempo de carga en un 40%",
          "Implementación de pruebas automatizadas con 90% de cobertura",
          "Mejora de accesibilidad según estándares WCAG 2.1"
        ]
      },
      documents: [
        { name: "Certificado de trabajo", type: "PDF", size: "245 KB", verified: true },
        { name: "Carta de recomendación", type: "PDF", size: "180 KB", verified: true },
        { name: "Proyecto final", type: "ZIP", size: "2.1 MB", verified: false },
      ],
      submittedDate: "Hace 2 días",
      priority: "Alta",
      notes: "La estudiante ha adjuntado todos los documentos requeridos y tiene excelentes referencias."
    },
    {
      id: 2,
      student: {
        name: "Carlos Rodríguez",
        career: "Licenciatura en Datos",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "carlos.rodriguez@estudiantes.unilink.com",
        phone: "+54 351 987-6543",
        university: "Universidad Nacional de Córdoba",
        semester: "6to semestre",
        gpa: "9.2/10"
      },
      experience: {
        company: "DataCorp",
        position: "Analista de Datos",
        duration: "3 meses",
        startDate: "Marzo 2024",
        endDate: "Mayo 2024",
        description:
          "Análisis de datos de ventas y creación de dashboards interactivos. Implementación de modelos predictivos para forecasting. Automatización de procesos de reporting mediante Python y SQL.",
        skills: ["Python", "SQL", "Tableau", "Machine Learning", "Power BI"],
        supervisor: "María López - Data Manager",
        supervisorEmail: "maria.lopez@datacorp.com",
        supervisorPhone: "+54 351 456-7890",
        projects: [
          "Desarrollo de dashboard de KPIs de ventas",
          "Implementación de modelo predictivo de demanda",
          "Automatización de reportes semanales"
        ],
        achievements: [
          "Mejora de precisión en pronósticos de ventas en un 25%",
          "Reducción del tiempo de generación de reportes en un 80%",
          "Identificación de patrones que aumentaron conversión en 15%"
        ]
      },
      documents: [
        { name: "Certificado de pasantía", type: "PDF", size: "198 KB", verified: true },
        { name: "Portfolio de proyectos", type: "PDF", size: "3.2 MB", verified: false },
      ],
      submittedDate: "Hace 1 día",
      priority: "Media",
      notes: "El estudiante tiene excelente rendimiento académico. Verificar el portfolio de proyectos."
    },
    {
      id: 3,
      student: {
        name: "María González",
        career: "Diseño Gráfico",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "maria.gonzalez@estudiantes.unilink.com",
        phone: "+54 11 9876-5432",
        university: "Universidad de Palermo",
        semester: "7mo semestre",
        gpa: "8.9/10"
      },
      experience: {
        company: "DesignStudio",
        position: "Diseñadora UX",
        duration: "4 meses",
        startDate: "Febrero 2024",
        endDate: "Mayo 2024",
        description:
          "Diseño de experiencias de usuario para aplicaciones móviles. Creación de prototipos y testing con usuarios. Colaboración con equipos de desarrollo para implementación de diseños.",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "UI Design"],
        supervisor: "Ana Ruiz - UX Director",
        supervisorEmail: "ana.ruiz@designstudio.com",
        supervisorPhone: "+54 11 2345-6789",
        projects: [
          "Rediseño de aplicación móvil de finanzas",
          "Creación de sistema de diseño unificado",
          "Investigación de usuarios y pruebas de usabilidad"
        ],
        achievements: [
          "Aumento de retención de usuarios en un 30%",
          "Mejora de satisfacción del usuario de 3.2 a 4.7/5",
          "Reducción de tiempo de onboarding en un 40%"
        ]
      },
      documents: [
        { name: "Certificado de trabajo", type: "PDF", size: "167 KB", verified: true },
        { name: "Portfolio UX", type: "PDF", size: "5.8 MB", verified: true },
        { name: "Testimonios de usuarios", type: "PDF", size: "890 KB", verified: true },
      ],
      submittedDate: "Hace 3 horas",
      priority: "Alta",
      notes: "La estudiante tiene un portfolio impresionante y excelentes referencias de su supervisor."
    },
  ]

  const completedValidations = [
    {
      id: 4,
      student: {
        name: "Luis Martínez",
        career: "Ingeniería en Software",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      experience: {
        company: "InnovaTech",
        position: "Desarrollador Backend",
        duration: "8 meses",
      },
      status: "Aprobada",
      validatedDate: "Hace 1 día",
      feedback: "Experiencia bien documentada y verificable. El estudiante demostró excelentes habilidades técnicas.",
      validator: "Universidad de Buenos Aires",
    },
    {
      id: 5,
      student: {
        name: "Sofia López",
        career: "Marketing Digital",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      experience: {
        company: "CreativeAgency",
        position: "Community Manager",
        duration: "6 meses",
      },
      status: "Rechazada",
      validatedDate: "Hace 2 días",
      feedback: "Falta documentación de respaldo. Se requiere certificado oficial de la empresa.",
      validator: "Universidad de Buenos Aires",
    },
    {
      id: 6,
      student: {
        name: "Diego Fernández",
        career: "Ciencia de Datos",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      experience: {
        company: "AnalyticsPro",
        position: "Data Scientist Jr.",
        duration: "5 meses",
      },
      status: "Aprobada",
      validatedDate: "Hace 3 días",
      feedback: "Documentación completa y verificada. Excelente desempeño confirmado por supervisor.",
      validator: "Universidad Nacional de Córdoba",
    },
  ]

  const handleValidation = (validationId: number, action: "approve" | "reject") => {
    setShowConfirmDialog({
      show: false,
      type: '',
      id: null
    })
    
    // Aquí iría la lógica real para aprobar o rechazar
    console.log(`${action} validation ${validationId} with feedback: ${feedback}`)
    
    // Simulamos éxito
    alert(`Validación ${action === 'approve' ? 'aprobada' : 'rechazada'} exitosamente`)
    
    setSelectedValidation(null)
    setFeedback("")
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-700 border-red-200"
      case "Media":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "Baja":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  const filteredValidations = pendingValidations
    .filter(validation => 
      validation.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      validation.experience.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      validation.experience.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(validation => 
      filterPriority ? validation.priority === filterPriority : true
    )

  const toggleDetails = (id: number) => {
    setExpandedDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{t("validation_management")}</h1>
          <p className="text-slate-600">{t("validation_management_desc")}</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
            <Download className="w-4 h-4 mr-2" />
            {t("export_report")}
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{t("pending")}</p>
                <p className="text-2xl font-bold text-amber-600">{pendingValidations.length}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{t("approved")}</p>
                <p className="text-2xl font-bold text-emerald-600">89</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{t("rejected")}</p>
                <p className="text-2xl font-bold text-red-600">12</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{t("approval_rate")}</p>
                <p className="text-2xl font-bold text-slate-800">88%</p>
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            {t("pending")} ({pendingValidations.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            {t("completed")} ({completedValidations.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input 
                placeholder={t("search_validations")} 
                className="pl-10 bg-white border-slate-200" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                  <Filter className="w-4 h-4 mr-2" />
                  {filterPriority ? `${t("priority")}: ${filterPriority}` : t("filter_by_priority")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => setFilterPriority(null)}>
                  {t("all_priorities")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterPriority("Alta")}>
                  <Badge className={`mr-2 ${getPriorityColor("Alta")}`}>
                    {t("high")}
                  </Badge>
                  {t("high_priority")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterPriority("Media")}>
                  <Badge className={`mr-2 ${getPriorityColor("Media")}`}>
                    {t("medium")}
                  </Badge>
                  {t("medium_priority")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterPriority("Baja")}>
                  <Badge className={`mr-2 ${getPriorityColor("Baja")}`}>
                    {t("low")}
                  </Badge>
                  {t("low_priority")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Pending Validations */}
          <div className="space-y-4">
            {filteredValidations.length > 0 ? (
              filteredValidations.map((validation) => (
                <Card key={validation.id} className="border-slate-200 overflow-hidden shadow-sm">
                  <CardContent className="p-0">
                    {/* Header Section */}
                    <div className="p-6 border-b border-slate-100">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12 border border-slate-200">
                            <AvatarImage src={validation.student.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                              {validation.student.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-slate-800">{validation.student.name}</h3>
                            <div className="flex items-center text-sm text-slate-600">
                              <GraduationCap className="w-4 h-4 mr-1" />
                              {validation.student.career}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className={getPriorityColor(validation.priority)}>
                                {t("priority")}: {validation.priority}
                              </Badge>
                              <span className="text-xs text-slate-500">{validation.submittedDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-slate-200 text-slate-700 hover:bg-slate-50"
                            onClick={() => toggleDetails(validation.id)}
                          >
                            {expandedDetails[validation.id] ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                {t("hide_details")}
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                {t("show_details")}
                              </>
                            )}
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="bg-emerald-500 hover:bg-emerald-600 text-white"
                            onClick={() => setSelectedValidation(validation.id)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            {t("review")}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Experience Summary */}
                    <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 text-slate-500 mr-2" />
                            <span className="font-medium text-slate-800">{validation.experience.position}</span>
                          </div>
                          <div className="text-sm text-slate-600">
                            {validation.experience.company} • {validation.experience.duration}
                          </div>
                          <div className="text-sm text-slate-600">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {validation.experience.startDate} - {validation.experience.endDate}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-slate-700">{t("documents")}</div>
                          <div className="text-sm text-slate-600">{validation.documents.length} {t("attached")}</div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedDetails[validation.id] && (
                      <div className="p-6 border-b border-slate-100">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">{t("student_details")}</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <GraduationCap className="w-4 h-4 text-slate-400 mr-2" />
                                <span className="text-slate-600">{validation.student.university}</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 text-slate-400 mr-2" />
                                <span className="text-slate-600">{validation.student.email}</span>
                              </div>
                              <div className="flex items-center">
                                <PhoneIcon className="w-4 h-4 text-slate-400 mr-2" />
                                <span className="text-slate-600">{validation.student.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-slate-400 mr-2" />
                                <span className="text-slate-600">GPA: {validation.student.gpa}</span>
                              </div>
                            </div>
                            
                            <h4 className="font-medium text-slate-700 mt-4 mb-3">{t("experience_description")}</h4>
                            <p className="text-sm text-slate-600">{validation.experience.description}</p>
                            
                            <h4 className="font-medium text-slate-700 mt-4 mb-2">{t("skills")}</h4>
                            <div className="flex flex-wrap gap-1">
                              {validation.experience.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">{t("documents")}</h4>
                            <div className="space-y-2">
                              {validation.documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-white rounded-md border border-slate-200">
                                  <div className="flex items-center">
                                    <FileText className="w-4 h-4 text-slate-400 mr-2" />
                                    <span className="text-sm">{doc.name}</span>
                                    <span className="text-xs text-slate-500 ml-2">({doc.size})</span>
                                    {doc.verified && <CheckCircle className="w-4 h-4 text-emerald-500 ml-2" />}
                                  </div>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <Download className="w-4 h-4 text-slate-600" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{t("download_document")}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              ))}
                            </div>
                            
                            <h4 className="font-medium text-slate-700 mt-4 mb-3">{t("supervisor_contact")}</h4>
                            <div className="p-3 bg-white rounded-md border border-slate-200">
                              <div className="text-sm font-medium text-slate-800">{validation.experience.supervisor}</div>
                              <div className="text-sm text-slate-600 mt-1">
                                <Mail className="w-4 h-4 inline mr-1" />
                                {validation.experience.supervisorEmail}
                              </div>
                              <div className="text-sm text-slate-600 mt-1">
                                <PhoneIcon className="w-4 h-4 inline mr-1" />
                                {validation.experience.supervisorPhone}
                              </div>
                              <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                {t("verify_contact")}
                              </Button>
                            </div>
                            
                            <h4 className="font-medium text-slate-700 mt-4 mb-2">{t("notes")}</h4>
                            <p className="text-sm text-slate-600 p-3 bg-amber-50 border border-amber-100 rounded-md">
                              {validation.notes}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="p-4 bg-white flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-200 text-red-600 hover:bg-red-50"
                        onClick={() => setShowConfirmDialog({
                          show: true,
                          type: 'reject',
                          id: validation.id
                        })}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        {t("reject")}
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-emerald-500 hover:bg-emerald-600 text-white"
                        onClick={() => setShowConfirmDialog({
                          show: true,
                          type: 'approve',
                          id: validation.id
                        })}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {t("approve")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">{t("no_validations_found")}</h3>
                  <p className="text-slate-600 mb-4">{t("no_validations_found_desc")}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('')
                      setFilterPriority(null)
                    }}
                  >
                    {t("clear_filters")}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {/* Completed Validations */}
          <div className="space-y-4">
            {completedValidations.map((validation) => (
              <Card key={validation.id} className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12 border border-slate-200">
                        <AvatarImage src={validation.student.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                          {validation.student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">{validation.student.name}</h3>
                        <p className="text-sm text-slate-600">{validation.student.career}</p>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium">{validation.experience.position}</span>
                            <span className="text-sm text-slate-600">en {validation.experience.company}</span>
                          </div>
                          <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-md border border-slate-100">
                            "{validation.feedback}"
                          </p>
                          <div className="text-xs text-slate-500 mt-2">
                            {t("validated_by")} {validation.validator} • {validation.validatedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          validation.status === "Aprobada"
                            ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                            : "bg-red-100 text-red-700 border-red-200"
                        }
                      >
                        {validation.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Validation Guidelines */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-700">{t("validation_guidelines")}</CardTitle>
          <CardDescription>{t("validation_guidelines_desc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-700 mb-3">✅ {t("approval_criteria")}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t("approval_criteria_1")}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t("approval_criteria_2")}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t("approval_criteria_3")}
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  {t("approval_criteria_4")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3">❌ {t("rejection_criteria")}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <Alert\
