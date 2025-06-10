"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"

export default function RegisterPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<"student" | "university" | "company" | "">("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!userType) {
      setError("Por favor selecciona un tipo de usuario")
      setLoading(false)
      return
    }

    try {
      await register(email, password, name, userType)
      router.push("/dashboard")
    } catch (err) {
      setError("Error al crear la cuenta. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto flex-shrink-0">
              <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Únete a UniLink
              </CardTitle>
              <CardDescription className="text-slate-600">
                Crea tu cuenta para conectar con la comunidad universitaria
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">{t("userType")}</Label>
                <Select
                  value={userType}
                  onValueChange={(value: "student" | "university" | "company") => setUserType(value)}
                >
                  <SelectTrigger className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="Selecciona tu tipo de cuenta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">{t("student")}</SelectItem>
                    <SelectItem value="university">{t("university")}</SelectItem>
                    <SelectItem value="company">{t("company")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white"
                disabled={loading}
              >
                {loading ? t("loading") : t("register")}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                ¿Ya tienes cuenta?{" "}
                <Link href="/auth/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  {t("login")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
