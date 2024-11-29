'use client'

import { useState, useEffect } from 'react'

const mockOrders = [
  { id: 1, customerName: "Juan Pérez", restaurantName: "BURGUER BUCAROS", total: 25.00, driverOffer: 5.00 },
  { id: 2, customerName: "María García", restaurantName: "BURGUER MELANI", total: 30.00, driverOffer: 6.00 },
]

export default function AvailableOrders({ onAcceptOrder }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setOrders(mockOrders)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pedidos Disponibles</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos disponibles en este momento</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-lg mb-2">Pedido #{order.id}</h3>
              <p className="mb-1"><strong>Cliente:</strong> {order.customerName}</p>
              <p className="mb-1"><strong>Restaurante:</strong> {order.restaurantName}</p>
              <p className="mb-1"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p className="mb-2"><strong>Oferta para el conductor:</strong> ${order.driverOffer.toFixed(2)}</p>
              <button
                onClick={() => onAcceptOrder(order)}
                className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
              >
                Aceptar Pedido
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

