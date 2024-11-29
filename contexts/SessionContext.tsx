'use client'

import React, { createContext, useState, useContext } from 'react'

type Role = 'user' | 'restaurant' | 'driver'

interface SessionContextType {
  role: Role | null
  setRole: (role: Role) => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role | null>(null)

  return (
    <SessionContext.Provider value={{ role, setRole }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}

