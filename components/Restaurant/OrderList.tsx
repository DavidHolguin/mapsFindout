'use client'

import { useState, useEffect } from 'react'

const mockOrders = [
  { id: 1, customerName: "Juan Pérez", items: [{ name: "BURGUER BUCAROS", quantity: 2 }], total: 37.00 },
  { id: 2, customerName: "María García", items: [{ name: "BURGUER MELANI", quantity: 1 }], total: 17.50 },
]

export default function OrderList({ orders }) {
  const [localOrders, setLocalOrders] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setLocalOrders(mockOrders)
  }, [])

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Pedidos Pendientes</h2>
      {localOrders.length === 0 ? (
        <p>No hay pedidos pendientes</p>
      ) : (
        <ul className="space-y-4">
          {localOrders.map((order) => (
            <li key={order.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-lg mb-2">Pedido #{order.id}</h3>
              <p className="mb-2">Cliente: {order.customerName}</p>
              <ul className="list-disc list-inside mb-2">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>
              <p className="font-bold">Total: ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

