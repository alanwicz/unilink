"use client"

import { useAuth } from "@/components/auth-provider"
import { StudentDashboard } from "@/components/dashboards/student-dashboard"
import { CompanyDashboard } from "@/components/dashboards/company-dashboard"
import { ValidatorDashboard } from "@/components/dashboards/validator-dashboard"
import { UniversityDashboard } from "@/components/dashboards/university-dashboard"

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) return null

  switch (user.userType) {
    case "student":
      return <StudentDashboard />
    case "university":
      return <UniversityDashboard />
    case "company":
      return <CompanyDashboard />
    case "validator":
      return <ValidatorDashboard />
    default:
      return <div>Tipo de usuario no válido</div>
  }
}
