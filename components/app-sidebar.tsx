"use client"

import type * as React from "react"
import {
  Home,
  Users,
  Building2,
  Briefcase,
  MessageSquare,
  Video,
  CheckSquare,
  GraduationCap,
  Shield,
  LogOut,
} from "lucide-react"

import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, logout } = useAuth()
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  if (!user) return null

  const getNavigationItems = () => {
    const commonItems = [
      {
        title: t("dashboard"),
        url: "/dashboard",
        icon: Home,
      },
      {
        title: t("feed"),
        url: "/dashboard/feed",
        icon: MessageSquare,
      },
      {
        title: t("reels"),
        url: "/dashboard/reels",
        icon: Video,
      },
      {
        title: t("chat"),
        url: "/dashboard/chat",
        icon: MessageSquare,
      },
    ]

    switch (user.userType) {
      case "student":
        return [
          ...commonItems,
          {
            title: "Mi Perfil",
            url: "/dashboard/profile",
            icon: Users,
          },
          {
            title: "Oportunidades",
            url: "/dashboard/opportunities",
            icon: Briefcase,
          },
        ]

      case "university":
        return [
          ...commonItems,
          {
            title: t("students"),
            url: "/dashboard/students",
            icon: Users,
          },
          {
            title: t("validations"),
            url: "/dashboard/validations",
            icon: CheckSquare,
          },
          {
            title: t("partnerCompanies"),
            url: "/dashboard/partner-companies",
            icon: Building2,
          },
          {
            title: t("opportunities"),
            url: "/dashboard/opportunities",
            icon: Briefcase,
          },
        ]

      case "company":
        return [
          ...commonItems,
          {
            title: t("postJobs"),
            url: "/dashboard/post-jobs",
            icon: Briefcase,
          },
          {
            title: t("candidates"),
            url: "/dashboard/candidates",
            icon: Users,
          },
          {
            title: t("universities"),
            url: "/dashboard/universities",
            icon: GraduationCap,
          },
          {
            title: t("validateExperience"),
            url: "/dashboard/validate-experience",
            icon: Shield,
          },
        ]

      default:
        return commonItems
    }
  }

  const navigationItems = getNavigationItems()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-8 h-8 flex-shrink-0">
            <img src="/logo.png" alt="UniLink" className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            UniLink
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center space-x-3 px-2 py-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{user.name}</p>
                <p className="text-xs text-slate-500 truncate">{user.email}</p>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
