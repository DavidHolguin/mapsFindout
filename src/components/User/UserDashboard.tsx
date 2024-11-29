import { useState } from 'react'
import RestaurantList from './RestaurantList'
import RestaurantMenu from './RestaurantMenu'
import Cart from './Cart'
import Map from '../shared/Map'

export default function UserDashboard() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [cart, setCart] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Usuario</h1>
      {!selectedRestaurant && <RestaurantList onSelectRestaurant={setSelectedRestaurant} />}
      {selectedRestaurant && !orderPlaced && (
        <>
          <RestaurantMenu restaurant={selectedRestaurant} addToCart={(item) => setCart([...cart, item])} />
          <Cart items={cart} onPlaceOrder={() => setOrderPlaced(true)} />
        </>
      )}
      {orderPlaced && <Map />}
    </div>
  )
}

