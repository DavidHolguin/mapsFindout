'use client'

import { useState } from 'react'
import { useSession } from '@/contexts/SessionContext'

export default function LoginForm() {
  const { setRole } = useSession()
  const [selectedRole, setSelectedRole] = useState<'user' | 'restaurant' | 'driver'>('user')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setRole(selectedRole)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <div className="mb-4">
          <label className="block mb-2">Selecciona tu rol:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as 'user' | 'restaurant' | 'driver')}
            className="w-full p-2 border rounded"
          >
            <option value="user">Usuario</option>
            <option value="restaurant">Restaurante</option>
            <option value="driver">Conductor</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

