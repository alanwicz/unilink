"use client"

import type React from "react"

import { useAuth } from "@/components/auth-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { NotificationsPanel } from "@/components/notifications-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 flex-shrink-0 mx-auto mb-4">
            <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
          </div>
          <p className="text-slate-600">{t("loading")}</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex-shrink-0">
                <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                UniLink
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <NotificationsPanel />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-slate-50">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
