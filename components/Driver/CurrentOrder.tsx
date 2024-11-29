'use client'

import { useState } from 'react'

export default function CurrentOrder({ order }) {
  const [status, setStatus] = useState('En camino al restaurante')

  const updateStatus = (newStatus) => {
    setStatus(newStatus)
    // In a real app, you would update the status on the server here
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Pedido Actual</h2>
      <p className="mb-2"><strong>Pedido #:</strong> {order.id}</p>
      <p className="mb-2"><strong>Cliente:</strong> {order.customerName}</p>
      <p className="mb-2"><strong>Restaurante:</strong> {order.restaurantName}</p>
      <p className="mb-2"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      <p className="mb-2"><strong>Ganancia del conductor:</strong> ${order.driverOffer.toFixed(2)}</p>
      <p className="mb-4"><strong>Estado actual:</strong> {status}</p>
      <div className="space-x-2">
        <button
          onClick={() => updateStatus('Recogiendo el pedido')}
          className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
        >
          Recoger Pedido
        </button>
        <button
          onClick={() => updateStatus('En camino al cliente')}
          className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
        >
          En Camino al Cliente
        </button>
        <button
          onClick={() => updateStatus('Pedido entregado')}
          className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
        >
          Pedido Entregado
        </button>
      </div>
    </div>
  )
}

