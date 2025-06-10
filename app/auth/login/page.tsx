"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"

export default function LoginPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (err) {
      setError("Credenciales inválidas. Usa 'password' como contraseña.")
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
                {t("welcome")}
              </CardTitle>
              <CardDescription className="text-slate-600">{t("login")} en tu cuenta para continuar</CardDescription>
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

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white"
                disabled={loading}
              >
                {loading ? t("loading") : t("login")}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                ¿No tienes cuenta?{" "}
                <Link href="/auth/register" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  {t("register")}
                </Link>
              </p>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-600 mb-2">Cuentas de prueba:</p>
              <div className="space-y-1 text-xs">
                <p>
                  <strong>Estudiante:</strong> estudiante@test.com
                </p>
                <p>
                  <strong>Universidad:</strong> universidad@test.com
                </p>
                <p>
                  <strong>Empresa:</strong> empresa@test.com
                </p>
                <p>
                  <strong>Contraseña:</strong> password
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
