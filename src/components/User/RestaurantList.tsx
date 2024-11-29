import { useState, useEffect } from 'react'

const mockRestaurants = [
  { id: 11, name: "BURGUER BUCAROS", category: { name: "Fast Food" } },
  // Add more mock restaurants here
]

export default function RestaurantList({ onSelectRestaurant }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setRestaurants(mockRestaurants)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Restaurantes</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="mb-2">
            <button
              onClick={() => onSelectRestaurant(restaurant)}
              className="w-full text-left p-2 bg-white rounded shadow hover:bg-gray-100"
            >
              <span className="font-bold">{restaurant.name}</span>
              <span className="ml-2 text-gray-600">{restaurant.category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

