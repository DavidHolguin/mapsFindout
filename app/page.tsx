'use client'

import { useSession } from '@/contexts/SessionContext'
import UserDashboard from '@/components/User/UserDashboard'
import RestaurantDashboard from '@/components/Restaurant/RestaurantDashboard'
import DriverDashboard from '@/components/Driver/DriverDashboard'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  const { role } = useSession()

  if (!role) {
    return <LoginForm />
  }

  switch (role) {
    case 'user':
      return <UserDashboard />
    case 'restaurant':
      return <RestaurantDashboard />
    case 'driver':
      return <DriverDashboard />
    default:
      return <div>Error: Rol inválido</div>
  }
}

