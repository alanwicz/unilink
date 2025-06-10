"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  userType: "student" | "university" | "company"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, userType: User["userType"]) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demo
const mockUsers: User[] = [
  { id: "1", name: "Ana García", email: "estudiante@test.com", userType: "student" },
  { id: "2", name: "Universidad de Buenos Aires", email: "universidad@test.com", userType: "university" },
  { id: "3", name: "TechCorp SA", email: "empresa@test.com", userType: "company" },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("unilink_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock authentication
    const foundUser = mockUsers.find((u) => u.email === email)
    if (foundUser && password === "password") {
      setUser(foundUser)
      localStorage.setItem("unilink_user", JSON.stringify(foundUser))
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const register = async (email: string, password: string, name: string, userType: User["userType"]) => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      userType,
    }
    setUser(newUser)
    localStorage.setItem("unilink_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("unilink_user")
  }

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
