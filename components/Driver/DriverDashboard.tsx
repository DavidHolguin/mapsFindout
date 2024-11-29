'use client'

import { useState } from 'react'
import AvailableOrders from './AvailableOrders'
import CurrentOrder from './CurrentOrder'
import Map from '../shared/Map'

export default function DriverDashboard() {
  const [currentOrder, setCurrentOrder] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Conductor</h1>
      {!currentOrder && <AvailableOrders onAcceptOrder={setCurrentOrder} />}
      {currentOrder && (
        <>
          <CurrentOrder order={currentOrder} />
          <div className="mt-4">
            <Map />
          </div>
        </>
      )}
    </div>
  )
}

