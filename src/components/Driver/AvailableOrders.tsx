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
      <h2 className="text-xl font-bold mb-2">Pedidos Disponibles</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos disponibles en este momento</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2 p-2 bg-white rounded shadow">
              <p><strong>Pedido #{order.id}</strong></p>
              <p>Cliente: {order.customerName}</p>
              <p>Restaurante: {order.restaurantName}</p>
              <p>Total: ${order.total}</p>
              <p>Oferta para el conductor: ${order.driverOffer}</p>
              <button
                onClick={() => onAcceptOrder(order)}
                className="mt-2 bg-primary text-white p-2 rounded hover:bg-primary-dark"
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

