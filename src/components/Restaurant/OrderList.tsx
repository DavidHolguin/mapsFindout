export default function OrderList({ orders }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Pedidos</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos pendientes</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2 p-2 bg-white rounded shadow">
              <p><strong>Pedido #{order.id}</strong></p>
              <p>Cliente: {order.customerName}</p>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

