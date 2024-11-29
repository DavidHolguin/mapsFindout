'use client'

import { useState, useEffect } from 'react'

export default function Cart({ items, onPlaceOrder }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + parseFloat(item.price), 0)
    setTotal(newTotal)
  }, [items])

  return (
    <div className="mt-4 bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-2">Carrito</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{item.name}</span> - ${item.price}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
          <button
            onClick={onPlaceOrder}
            className="w-full mt-4 bg-primary text-white p-2 rounded hover:bg-primary-dark"
          >
            Realizar pedido
          </button>
        </>
      )}
    </div>
  )
}

