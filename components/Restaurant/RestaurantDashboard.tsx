'use client'

import { useState } from 'react'
import OrderList from './OrderList'
import InvoiceGenerator from './InvoiceGenerator'

export default function RestaurantDashboard() {
  const [orders, setOrders] = useState([])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Restaurante</h1>
      <OrderList orders={orders} />
      <InvoiceGenerator />
    </div>
  )
}

