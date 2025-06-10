import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Building2, Shield, Sparkles, CheckCircle } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-slate-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              UniLink
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/auth/login">
              <Button variant="ghost" className="text-slate-600 hover:text-emerald-600">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            <Sparkles className="w-4 h-4 mr-1" />
            Conectando Talento Universitario
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-cyan-600 to-slate-700 bg-clip-text text-transparent">
            Tu futuro profesional comienza aquí
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            UniLink conecta estudiantes universitarios con empresas a través de casas de estudios validadoras, creando
            un ecosistema confiable para oportunidades laborales y pasantías.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-lg px-8"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 border-emerald-200 hover:bg-emerald-50">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Tres perspectivas, un objetivo</h2>
            <p className="text-xl text-slate-600">Diseñado para estudiantes, empresas y casas de estudios</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-700">Para Estudiantes</CardTitle>
                <CardDescription>Encuentra oportunidades laborales validadas por tu casa de estudios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Explora roles disponibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Gestiona tus postulaciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Valida tu experiencia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Consejos de IA personalizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-700">Para Casas de Estudios</CardTitle>
                <CardDescription>
                  Valida a tus estudiantes y conecta con empresas para crear oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                    Valida experiencias estudiantiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                    Conecta con empresas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                    Gestiona perfiles de estudiantes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                    Promueve talento universitario
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-slate-700">Para Empresas</CardTitle>
                <CardDescription>
                  Encuentra talento universitario validado y gestiona procesos de contratación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
                    Publica ofertas laborales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
                    Contacta casas de estudios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
                    Valida experiencias de candidatos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
                    Acceso a perfiles verificados
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Impulsando carreras universitarias</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <div className="text-emerald-100">Estudiantes conectados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85+</div>
              <div className="text-emerald-100">Casas de estudios asociadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-emerald-100">Empresas colaboradoras</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">¿Listo para dar el siguiente paso?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Únete a UniLink y comienza a construir tu futuro profesional hoy mismo
          </p>
          <Link href="/auth/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-lg px-8"
            >
              Crear Cuenta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 flex-shrink-0">
                  <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold">UniLink</span>
              </div>
              <p className="text-slate-400">Conectando talento universitario con oportunidades profesionales.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Para Estudiantes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Para Empresas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Para Casas de Estudios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 UniLink. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
